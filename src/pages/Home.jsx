import React, { useState } from "react";
import { searchForPeople, searchForShows } from "../api/tvmaze";

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [shows, setShows] = useState(null);
  const [showError, setShowError] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");

  const handleSearch = (ev) => {
    setSearchValue(ev.target.value);
  };

  const onSearch = async (e) => {
    e.preventDefault();
    try {
      if (searchOption === "shows") {
        const showResult = await searchForShows(searchValue);
        setShows(showResult);
      } else {
        const actorResult = await searchForPeople(searchValue);
        setShows(actorResult);
      }
    } catch (error) {
      setShowError(error);
    }
  };

  const handleRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };

  const renderShowsData = () => {
    if (showError) {
      return <div>Error Occured: {showError.message}</div>;
    }
    if (shows) {
      return shows[0].show
        ? shows.map((data) => <div key={data.show.id}>{data.show.name}</div>)
        : shows.map((data) => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
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
      <div>{renderShowsData()}</div>
    </div>
  );
}

export default Home;
