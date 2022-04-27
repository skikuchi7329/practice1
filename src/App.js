import { useEffect, useState, useCallback } from "react";
import { Todo } from "./components/Todo";
import { TodoApi } from './api/TodoApi';

const App = () => {
  const [list, setList] = useState([]);

  const [keyword, setKeyword] = useState("Type Something");

  const fetchData = useCallback(async () => {
    const res = await TodoApi.getList();
    setList(res.data.data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handlCreate = async () => {
    await TodoApi.create(keyword);
    fetchData();
  };

  const handleUpdate = async (id) => {
    await TodoApi.changeStatus(id);
    fetchData();
  };

  const handleDelete = async (id) => {
    await TodoApi.delete(id);
    fetchData();
  }

  return (
    <div className="App">
      <input value={keyword} onChange={handleChange} />
      <button onClick={handlCreate}>Create</button>
      <ul>
        {list &&
          list.map(({ id, todo, status }) => (
            <Todo key={id} id={id} todo={todo} status={status} handleUpdate={()=>handleUpdate(id)} handleDelete={()=>handleDelete(id)} />
          ))}
      </ul>
    </div>
  );
};

export default App;
