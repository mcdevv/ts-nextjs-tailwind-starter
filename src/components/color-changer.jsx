import React, { useState } from 'react';

const ColorChanger = () => {
  const [bgColor, setBgColor] = useState('');

  return (
    <div className={`my-2 p-8 ${bgColor}`}>
      <div className='mt-4 flex justify-center space-x-4'>
        <button
          className='rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700'
          onClick={() => setBgColor('bg-red-500')}
        >
          Red
        </button>
        <button
          className='rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700'
          onClick={() => setBgColor('bg-green-500')}
        >
          Green
        </button>
        <button
          className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700'
          onClick={() => setBgColor('bg-blue-500')}
        >
          Blue
        </button>
      </div>
    </div>
  );
};

export default ColorChanger;
