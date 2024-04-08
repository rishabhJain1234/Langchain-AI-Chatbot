import Header from "../components/prompt/header";
import PromptBox from "../components/prompt/prompt";
import ChatBox from "../components/prompt/ChatBox";
import ChatDiv from "../components/prompt/ChatDiv";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { user_history } from "../features/prev_his";
import { BASE_URL } from "../backend/api";
import { useSelector } from "react-redux";
import { increment } from "../features/c_query";
import axios from "axios";
import background from "../images/iitr-kira-background (3).jpeg";

function Prompt(){
    const urlParams = new URLSearchParams(window.location.search);
    let jugad= useSelector(state=>state.cq.jugad);
    let token = urlParams.get('token');
    let token_ac="";
    if(token!=null){
    for(let i=0;i<(token.length);i++){
     if(i!=0){
      token_ac+=token[i];
     }
    }
   }
   console.log(token_ac);   
   let dispatch=useDispatch();

   const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token_ac}`,
    }
  });


    useEffect(() => {
        console.log('enjkerng')
        console.log(jugad);
        if(jugad==1){
        if (token) {
          axiosInstance.get('user/')
            .then(response => {
              const chatHistory = response.data;
              const actualHistory = [];
              for (let i = 0; i < chatHistory.length; i++) {
                if(i==0) continue;
                if (i % 2 === 1) {
                  actualHistory.push({ "user": chatHistory[i] });
                } else {
                  actualHistory.push({ "ai": chatHistory[i] });
                }
              }
              console.log(actualHistory);
              for(let i=0;i<actualHistory.length;i++){
                dispatch(user_history(actualHistory[i]));
              }
            })
            .catch(error => {
              console.error('Error fetching chat history:', error);
              // Handle error, maybe redirect to login page or display an error message
            });
        }
        dispatch(increment());
    }

      }, [dispatch, axiosInstance, token]);

    
    let chat_history=useSelector(state=> state.history.history);
    console.log("jugado")
    console.log(chat_history);
    return(
      <>
      <div className="absolute inset-0 bg-cover bg-center h-screen"
          style={{
              backgroundImage: `url(${background})`,
              filter: "blur(8px)",
              zIndex: "-1",
          }}>

      </div>
      <div className="flex flex-col h-screen">
          <Header />
          <ChatDiv />
          {/* <ChatBox initialColor={"grey"} message={"rkjegnjegrjjiufirfjiereggrjeugheuri"} /> */}
          <PromptBox />
      </div>
  </>
    )
}
export default Prompt;