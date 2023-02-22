import React, { useState } from "react";

function SearchBox({ onSearch }) {
  const [term, setTerm] = useState("");
  const handleChange = (e) => {
    setTerm(e.target.value);
      onSearch(term);
  };
  return (
    <div className="pa2">
      <input className="pa3 ba b--green bg-lightest-blue" type="text" value={term} onChange={handleChange} />
    </div>
  );
}

export default SearchBox;
