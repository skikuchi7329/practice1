const express = require('express');
const app = express()
const { uuid } = require  ('uuidv4');
const port = 3001

app.get('/', (req, res) =>{
  res.send('Hello World')
})

const TodoStatus = {
  inProgress: 0,
  done: 1,
}

let todoList = [
  {
    id: uuid(),
    todo: 'hogehoge',
    status: TodoStatus.inProgress
  }
]

app.get("/get_list", (req, res) => {
  res.json({data: todoList})
})

app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})