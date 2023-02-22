import { useState } from "react";
import { search, robots } from "./robots";
import Robolist from "./components/Robolist";
import SearchBox from "./components/SearchBox";

function App() {
  const [data, setData] = useState(robots);
  const handleSearch = (term) => {
    if (term == "") {
      setData(robots);
    }
    const searchResult = search(term.toLowerCase());
    setData(searchResult);
  };
  return (
    <div className="tc">
        <h1>Robot Friends</h1>
      <SearchBox onSearch={handleSearch} />
      <Robolist robots={data} />
    </div>
  );
}

export default App;
