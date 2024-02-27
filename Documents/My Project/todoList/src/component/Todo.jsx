import React from 'react';
import {AiFillEdit} from 'react-icons/ai'

const Todo = ({task}) => {
  return (
    <div className='flex justify-between items-center bg-violet-800 text-white py-3 px-4 rounded-md mb-1 cursor-pointer'>
      <p className='font-primary'>{task.task}</p>
      <div>
        <AiFillEdit className='text-xl' />
       
      </div>
    </div>
  );
}

export default Todo;
