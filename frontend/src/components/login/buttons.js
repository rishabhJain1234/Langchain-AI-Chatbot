import React from 'react';

function Button({ logo, text ,onclfn}) {
  return (
    <button className="m-12 flex items-center justify-evenly bg-yellow-300 bg-opacity-50 rounded-full py-4 px-4 lg-2:px-8 font-normal border-2  border-black w-11/12 lg-2:w-3/5 md:w-5/6" onClick={onclfn}>
      {logo && <img src={logo} alt="Logo" className="w-2/12  h-2/12  mr-2" />}
      <span className="text-sm xl:text-lg font-semibold ">{text}</span>
    </button>
  );
}

export default Button;