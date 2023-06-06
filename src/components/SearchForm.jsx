import React, { useState } from "react";
import { useSearchStr } from "../api/useSearchStr";
import CustomRadio from "./CustomRadio";

function SearchForm({ onSearch }) {
  const [searchValue, setSearchValue] = useSearchStr("");
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

      <CustomRadio
        label="Shows"
        type="radio"
        name="search-option"
        value="shows"
        checked={searchOption === "shows"}
        onChange={handleRadioChange}
      />
      <CustomRadio
        label="Actors"
        type="radio"
        name="search-option"
        value="shows"
        checked={searchOption === "actors"}
        onChange={handleRadioChange}
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
