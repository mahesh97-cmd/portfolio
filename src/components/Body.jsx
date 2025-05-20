import React from 'react';
import Navbar from './Navbar';
import Home from './Hero';
import About from './About';

const Body = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <main className='flex-1 overflow-auto'>
        <Home/>
        <About/>

      </main>
    </div>
  );
};

export default Body;
