import React from 'react';

const Header = () => {
  return (
    <header className="py-4 px-10  sticky top-0 z-10"
    style={{
      backgroundColor: '#ffc451',
      border: '2px solid black',
    }}>
      <div className="container">
        <h1 className="hidden sm:block text-xl font-semibold text-center ">KIRA (Knowledge Integrated R-Land AI-ChatBot)</h1>
        <h1 className=" block sm:hidden text-xl font-semibold text-center  ">KIRA</h1>
      </div>
    </header>
  );
};

export default Header;