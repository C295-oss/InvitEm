import React,{ useState } from 'react';
import './App.css';
import Multiple from './form';


function App() {
  const [formDataList, setFormDataList] = useState([]);

  const addFormData = (data) => {
    setFormDataList([...formDataList, data]);
  };

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

        {formDataList.map((formData, index) => (
          <div key={index} className="justify-around flex mt-5 w-full">
            <h2>Submitted Data {index + 1}</h2>
            <div className="flex mt-5">
              <p>Name: {formData.name}</p>
              <p>Date: {formData.date}</p>
              <p>Location: {formData.location}</p>
              <p>Time: {formData.time}</p>
              
              <div className="text-wrap">
                <p>Description: {formData.description}</p>
              </div>
            
            </div>
          </div>
        ))}
      </div>
    
      <div className="h-screen w-2/5 bg-lightWhite text-center">
        <h1 className='font-bold color-blackText text-4xl'>Create Event</h1>
        <Multiple addFormData={addFormData} />

      </div>
    </div>

    </>

  );
}

export default App;
