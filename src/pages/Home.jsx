import React, { useState } from "react";
import { searchForPeople, searchForShows } from "../api/tvmaze";
import SearchForm from "../components/SearchForm";
import ShowsGrid from "../components/shows/ShowsGrid";
import ActorsGrid from "../components/actors/ActorsGrid";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const [filter, setFilter] = useState(null);

  const { data: shows, error: showError } = useQuery({
    queryKey: ["search", filter],
    queryFn: () =>
      filter.searchOption === "shows"
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
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
