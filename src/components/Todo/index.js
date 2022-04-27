import React from 'react';

const Todo = ( { id, todo, status, handleUpdate, handleDelete} ) => {
  return (
    <li>
      id: {id} <br/>
      todo: {todo}<br/>
      status: <button onClick={handleUpdate}>{status ? '✅' : '☑️'}</button>
      <button onClick={handleDelete}>🗑</button>
    </li>
  )
}

export {Todo};