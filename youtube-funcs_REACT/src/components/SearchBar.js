import React, { useState, useEffect } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    //from parent cmp recieve data
    //parent cmp told what search is
    //props from parent
    onFormSubmit(term);
  };

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar ui segment">
      <form action="" onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label htmlFor="">Video search</label>
          <input value={term} onChange={onInputChange} type="text" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
