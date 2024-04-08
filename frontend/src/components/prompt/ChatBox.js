import { ThumbUpIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';


const ChatBox = ({ message,initialColor,alignment,heading }) => {

  return (
    <div id="chatbox"
  className={`  font-bold py-2 px-4 shadow-lg transition duration-150 ease-in-out transform hover:scale-105 text-left flex flex-col my-4 p-5 border border-black rounded-lg relative overflow-hidden`}
  style={{
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparent background color
    backdropFilter: 'blur(8px)', // Apply blur effect
    maxWidth: '60%',
    backgroundColor: '#ffc451',
  }}
>
  <span className="border border-black mb-2 px-5 py-1 bg- font-bold tracking-wider rounded-full font-serif text-gray-700 ">{heading}</span>
  <p className="text-2xl  font-semibold">{message}</p>
  {/* <button
    className="absolute bottom-0 right-0 bg-blue-500 text-white px-4 py-2 rounded-lg"
  > */}
    <span className='w-8 h-8'>
        <ThumbUpIcon />
    </span>
    {/* <ThumbUpIcon/> */}
  {/* </button> */}
</div>
  );
};

export default ChatBox;
