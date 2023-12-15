import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes.jsx";

const App = () => {
  return (
    <>
      <AppRoutes />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
};

export default App;
