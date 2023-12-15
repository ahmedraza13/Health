import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../model/userSchema.mjs";

const SignupController = async (req, res) => {
  try {
    const body = req.body;
    const { fullName, email, password, accountType } = body;
    
    if (!fullName || !email || !password || !accountType) {
      res.json({
        status: false,
        message: "All fields are required",
        data: null,
      });
      return;
    }

    // Check if the provided accountType is 'admin'
    if (accountType === 'admin') {
      // Check if an admin user already exists
      const adminExists = await UserModel.exists({ isAdmin: true });

      if (adminExists) {
        res.json({
          status: false,
          message: "Admin user already exists",
          data: null,
        });
        return;
      }
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const objToSend = {
      fullName,
      email,
      password: hashPassword,
      accountType,
    };

    const emailExist = await UserModel.findOne({ email });
    
    if (emailExist) {
      res.json({
        status: false,
        message: "Email already exists",
        data: null,
      });
      return;
    }

    const userSave = await UserModel.create(objToSend);

    if (accountType === "admin") {
      // Update the user to set isAdmin to true
      await UserModel.updateOne({ _id: userSave._id }, { isAdmin: true });
      res.json({
        status: true,
        message: "Admin user created successfully",
        data: userSave,
      })
      return
    }

    res.json({
      status: true,
      message: "User created successfully",
      data: userSave,
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
      data: null,
    });
  }
};


const LoginController = async (req, res) => {
  try {
    const body = req.body;
    const { email, password } = body;
    if (!email || !password) {
      res.json({
        status: false,
        message: "All fields are required",
        data: null,
      });
      return;
    }
    const emailExist = await UserModel.findOne({ email });
    if (!emailExist) {
      res.json({
        status: false,
        message: "Email not found",
        data: null,
      });
      return;
    }
    const comparePasswrod = await bcrypt.compare(password, emailExist.password);
    if (!comparePasswrod) {
      res.json({
        status: false,
        message: "Incorrect password",
        data: null,
      });
      return;
    }

    if (emailExist.accountType === "admin") {
     const  tokenAdmin = "Admin"
        res.json({
          status: true,
          message: "Admin Login successfully",
          data: emailExist,
          tokenAdmin,
        })
     
        return;
      }
    
    const token = jwt.sign(
      { email: emailExist.email, id: emailExist._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    
    console.log(token);
    res.json({
      status: true,
      message: "Login successfully",
      data: emailExist,
      token,
    });
    return;
  } catch (error) {
    res.json({
      status: false,
      message: error.message,
      data: null,
    });
  }
};


export { SignupController, LoginController };
