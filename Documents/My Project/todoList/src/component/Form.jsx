import React, { useDebugValue, useState } from 'react';

const Form = () => {
    const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    console.log(useDebugValue);
  }

  return (
    <form className='mb-4 font-primary w-full' onSubmit={handleSubmit}>
        <input type='text' className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300' placeholder='What task do you have today?' onChange={(e)=> console.log(e.target.value)}/>
        <button className='bg-gray-900 border-none p-2 text-white cursor-pointer rounded ml-2'>
            Add Task
        </button>

    </form>
  );
}

export default Form;
