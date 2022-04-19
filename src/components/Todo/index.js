import React from 'react';

const Todo = ( { id, todo, status} ) => {
  return (
    <li>
      id: {id} <br/>
      todo: {todo}<br/>
      status: {status ? '✅' : '☑️'}
    </li>
  )
}

export {Todo};