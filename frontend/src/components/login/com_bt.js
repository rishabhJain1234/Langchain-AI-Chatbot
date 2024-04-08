import google from "../../images/google.png";
import channeli from "../../images/ch_i.jpg";
import Button from "./buttons";
import { axiosInstance } from "../../backend/axios_ins";

function Login_right() {
    const handleGoogle =()=>{
      console.log("Access denied");
    }
    const handleChanneli = async () => {
      window.location.href = "http://localhost:8000/";
    }
    return (
      <div className="flex flex-col justify-evenly items-center h-1/2 w-1/2">
          <Button logo={google} text="LOGIN WITH GOOGLE" onclfn={handleGoogle}/>
          <Button logo={channeli} text="LOGIN WITH Channel-i" onclfn={handleChanneli}/>
      </div>
    );
  }
export default Login_right;