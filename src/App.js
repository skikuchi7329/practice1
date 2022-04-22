import axios from "axios";
import { useEffect, useState } from "react";
import { Todo } from "./components/Todo";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
  const axios = require('axios');

  axios.get("http://localhost:3001/get_list")
    .then((res) => {
      setList(res.data.data);
    })
  }, []);

  return (
    <div className="App">
      <ul>
        {list && list.map(({id, todo, status}) => <Todo key={id} id={id} todo={todo} status={status} />)}
      </ul>
    </div>
  );
};

export default App;
