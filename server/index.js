const express = require('express');
const { uuid } = require  ('uuidv4');
const port = 3001

const app = express()
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) =>{
  res.send('Hello World')
})

const TodoStatus = {
  icebox: 0,
  done: 1,
}

let todoList = [
  {
    id: uuid(),
    todo: 'hogehoge',
    status: TodoStatus.icebox
  },
  {
    id: uuid(),
    todo: 'aaaaaaa',
    status: TodoStatus.icebox
  }
]
// Read
app.get("/get_list", (req, res) => {
  res.json({data: todoList})
})

// Create
app.post("/create", (req, res) => {
  if (!req.body.todo) {
    res.status(406).json({status: "Error: Todo Not Found"});
    return;
  }
  todoList.push({
    id: uuid(),
    todo: req.body.todo,
    status: TodoStatus.icebox
  });
  res.json({status: "OK"})
})

//Update
app.post("/status_update", (req, res) => { 
  if (todoList.flatMap(i => i.id).includes(req.body.id)) {
    const matchedIndex = todoList.findIndex((i) => i.id === req.body.id);
    todoList[matchedIndex].status = todoList[matchedIndex].status ? TodoStatus.icebox : TodoStatus.done;
    res.json({ status: "OK" });
  } else {
    req.status(406).send("Error: IDが一致しません")
  }
})

//Delete
app.post("/delete", (req, res) => {
  if (todoList.flatMap(i => i.id).includes(req.body.id)) {
    todoList = todoList.filter((i) => i.id !== req.body.id);
    res.json({status: "OK"});
  } else {
    res.status(406).send("Error: IDが一致しません")
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})