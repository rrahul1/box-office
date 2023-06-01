import React, { useState } from "react";
import { searchForPeople, searchForShows } from "../api/tvmaze";
import SearchForm from "../components/SearchForm";
import ShowsGrid from "../components/shows/ShowsGrid";
import ActorsGrid from "../components/actors/ActorsGrid";

function Home() {
  const [shows, setShows] = useState(null);
  const [showError, setShowError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setShowError(null);
      if (searchOption === "shows") {
        const showResult = await searchForShows(q);
        setShows(showResult);
      } else {
        const actorResult = await searchForPeople(q);
        setShows(actorResult);
      }
    } catch (error) {
      setShowError(error);
    }
  };

  const renderShowsData = () => {
    if (showError) {
      return <div>Error Occured: {showError.message}</div>;
    }

    if (shows?.length === 0) {
      return <div>No Results</div>;
    }
    if (shows) {
      return shows[0].show ? (
        <ShowsGrid shows={shows} />
      ) : (
        <ActorsGrid actors={shows} />
      );
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderShowsData()}</div>
    </div>
  );
}

export default Home;
