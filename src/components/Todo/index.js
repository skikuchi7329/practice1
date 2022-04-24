import React from 'react';

const Todo = ( { id, todo, status, handleUpdate} ) => {
  return (
    <li>
      id: {id} <br/>
      todo: {todo}<br/>
      status: <button onClick={handleUpdate}>{status ? '✅' : '☑️'}</button>
    </li>
  )
}

export {Todo};