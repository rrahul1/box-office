import React, { useState } from "react";

function SearchForm({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchOption, setSearchOption] = useState("shows");

  const handleSearch = (ev) => {
    setSearchValue(ev.target.value);
  };

  const handleRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };

  const handleSearchInput = (e) => {
    e.preventDefault();
    const options = {
      q: searchValue,
      searchOption,
    };
    onSearch(options);
  };

  return (
    <form onSubmit={handleSearchInput}>
      <input type="text" value={searchValue} onChange={handleSearch} />
      <label>
        Shows
        <input
          type="radio"
          name="search-option"
          value="shows"
          checked={searchOption === "shows"}
          onChange={handleRadioChange}
        />
      </label>
      <label>
        Actors
        <input
          type="radio"
          name="search-option"
          value="actors"
          checked={searchOption === "actors"}
          onChange={handleRadioChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
