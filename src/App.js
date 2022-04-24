import { useEffect, useState, useCallback } from "react";
import { Todo } from "./components/Todo";
const axios = require("axios");

const App = () => {
  const [list, setList] = useState([]);

  const [keyword, setKeyword] = useState("Type Something");

  const fetchData = useCallback(async () => {
    const res = await axios.get("http://localhost:3001/get_list");
    setList(res.data.data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handlCreate = async () => {
    await axios.post("http://localhost:3001/create", { todo: keyword });
    fetchData();
  };

  const handleUpdate = async (id) => {
    await axios.post("http;//localhost:3001/update_status", { "id": id})
    fetchData();
  }

  return (
    <div className="App">
      <input value={keyword} onChange={handleChange} />
      <button onClick={handlCreate}>Create</button>
      <ul>
        {list &&
          list.map(({ id, todo, status }) => (
            <Todo key={id} id={id} todo={todo} status={status} handleUpdate={()=>handleUpdate(id)} />
          ))}
      </ul>
    </div>
  );
};

export default App;
