import { useEffect, useState } from "react";

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/get_list")
      .then((res) => response.json())
      .then((result) => {
        setList(result.data);
      });
  }, []);

  return (
    <div className="App">
      <ul>
      {list && list.map((i) => <li key={i.id}>{i.todo} | {i.id} | {i.status ? '✅': '☑️'}</li>)}
      </ul>
    </div>
  )
};

export default App;
