import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { current_quest } from '../../features/c_query';
import { useSelector } from 'react-redux';
import { user_history } from '../../features/prev_his';
import axios from 'axios';
import { auth_token } from '../../backend/api';
import { BASE_URL } from '../../backend/api';
import { change_token } from '../../features/token_slice';


const scrollToBottom = () => {
  setTimeout(() => {
    // Your code to be executed after the delay
  }, 1000); 
  const scrollable= document.getElementById("scrollable");
  scrollable.scrollTop=scrollable.scrollHeight;

}

const PromptBox = () => {
 const dispatch=useDispatch();
//  const currentHistory = useSelector(state => state.history.history);
//  const sessionHistory = useSelector(state => state.sess.sessionHistory);
 const current_query = useSelector(state => state.cq.quest);
 const urlParams = new URLSearchParams(window.location.search);
 console.log(urlParams);
 let token = urlParams.get('token');
 let token_ac="";
 if(token!=null){
 for(let i=0;i<(token.length);i++){
  if(i!=0){
   token_ac+=token[i];
  }
 }
}

 const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token_ac}`,
  }
});
 
 if(token!=undefined){
  dispatch(change_token(token));
 } else{
  window.location.href="http://localhost:3000/login";
 }
 const handleInputChange = (event) => {
    dispatch(current_quest(event.target.value));
    console.log("done");
  };

  const handlequery =async() => {
      const data_query={
        "user":current_query
      }

      dispatch(user_history(data_query));
      // dispatch(session_history(data_query));
      console.log(token);
      let resp="";
      
      await axiosInstance.post(`${BASE_URL}conversation/?query=${current_query}`)
        .then(response => {
            resp=response.data;
            console.log(response.data);
          })
          .catch(error => {
            resp="Sorry some error occured";
          });
        const data_response={
          "ai":resp,
        }

      dispatch(user_history(data_response));
      scrollToBottom();

      // dispatch(session_history(data_response));
      // console.log(currentHistory);

  }

  return (
    <div className="fixed bottom-6 left-0 right-0">
    <div className="mx-24 lg-2:mx-60 bg-white border border-gray-300 rounded-lg flex items-center ">
      <input
        type="text"
        className="flex-1 mr-2 py-2 px-4 border border-gray-400 rounded-l-lg focus:outline-none"
        placeholder="Ask your doubt here"
        onChange={handleInputChange}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg" onClick={handlequery}>
        <ArrowUpIcon className="h-5 w-5" />
      </button>
    </div>
  </div>

);
};


export default PromptBox;

