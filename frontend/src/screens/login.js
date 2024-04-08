import roorkee from "../images/roorkee.png";
import Kira_com from "../components/login/kira";
import Login_right from "../components/login/com_bt";

function login(){
    return(
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${roorkee})`,
          filter: "blur(8px)",
          zIndex: "-1",
        }}
      />
      <div className="flex flex-col md:flex-row justify-around  items-center ">
        <Kira_com />
        <Login_right />
      </div>
    </div>
    )
}
export default login;

// return(
//     <div className="flex justify-around items-center h-screen bg-cover bg-blur" style={{backgroundImage: `url(${roorkee})`}}>
//          <Kira_com />
//          <Login_right />
//     </div>
// )