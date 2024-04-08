import React from 'react';
import ChatBox from './ChatBox';
import { useSelector } from 'react-redux';

const ChatDiv = () => {
  const qna = useSelector(state => state.history.history);
  
  return (
    <div id="scrollable" className="pt-4 absolute bottom-28 top-14 px-16 w-full "
     style={{
      overflowY: 'scroll',

    }}>
      {qna.map((item) => (
        <>
        <div className='flex justify-end'>
          {item.user && <ChatBox message={item.user} heading={"Prompt"} initialColor={"blue"} alignment={"end"}/>}
        </div>
        <div className='flex'>
          {item.ai && <ChatBox message={item.ai} heading={"Response"} initialColor={"gray"} alignment={"start"}/>}
        </div>
        </>
      ))}
    </div>

  );
};

export default ChatDiv;
