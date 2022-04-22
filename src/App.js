import { useEffect, useState, useCallback } from "react";
import { Todo } from "./components/Todo";
const axios = require('axios');

const App = () => {
  const [list, setList] = useState([]);

  const fetchData = useCallback(async () => {
    const res = await axios.get("http://localhost:3001/get_list")
    setList(res.data.data);
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <div className="App">
      <ul>
        {list && list.map(({id, todo, status}) => <Todo key={id} id={id} todo={todo} status={status} />)}
      </ul>
    </div>
  );
};

export default App;
