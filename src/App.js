import { useState } from "react";
import { search, robots } from "./robots";
import Robolist from "./components/Robolist";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  const [data, setData] = useState(robots);
  const handleSearch = (term) => {
    if (term == "") {
      setData(robots);
    }
    const searchResult = search(term.toLowerCase());
    setData(searchResult);
  };

  try{
      return (
    <div className="tc">
      <h1>Robot Friends</h1>
      <SearchBox onSearch={handleSearch} />
      <Scroll>
        <Robolist robots={data} />
      </Scroll>
    </div>
  );
  }catch(e){
     <ErrorBoundary error={e} />
  }

}

export default App;
