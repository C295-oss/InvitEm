import React, { useState } from 'react';
import './App.css';
import Multiple from './form';


const [submittedData, setSubmittedData] = useState(null);
const onSubmit = (data) => {
  setSubmittedData(data);
};


function App() {
  return (
    <>
    
    <nav className="flex bg-whiteBody mx-auto mx-w-screen-xl px-4 lg:px-8 lg:py-8 items-center justify-between">
      
      <div className='flex justify-self-start justify-around inline-flex'>
        <img src='./planet.svg' alt='logo' className='h-20 mx-6'/>
        <div className="flex items-center justify-center">
          <h1 className='color-blackText text-4xl font-bold'>Hello, friend</h1>
        </div>
      </div>
      
      <div className='justify-end'>
        <button type='button' 
          className='text-md font-bold bg-blackText text-whiteBody px-12 py-2 rounded-md hover:scale-125'
        >sign in</button>
      </div>

    </nav>

    <div className='flex'>
      <div className="bg-whiteNav h-screen w-3/5">
        <p>my events</p>

        {submittedData && (
          <div className="mt-5">
            <h2>Submitted Data</h2>
              <div>
                <p>Name: {submittedData.name}</p>
                <p>Date: {submittedData.date}</p>
                <p>Location: {submittedData.location}</p>
                <p>Time: {submittedData.time}</p>
                <p>Description: {submittedData.description}</p>
            </div>
          </div>
        )}

      </div>
    
      <div className="h-screen w-2/5 bg-lightWhite text-center">
        <h1 className='font-bold color-blackText text-4xl'>Create Event</h1>
        < Multiple onSubmit={onSubmit} />

      </div>
    </div>

    </>

  );
}

export default App;
