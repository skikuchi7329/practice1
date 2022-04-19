import { useEffect, useState } from "react";
import { Todo } from "./components/Todo";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/get_list")
      .then((res) => res.json())
      .then((result) => {
        setList(result.data);
      });
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
