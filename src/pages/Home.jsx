import React, { useState } from "react";
import { searchForPeople, searchForShows } from "../api/tvmaze";
import SearchForm from "../components/SearchForm";
import ShowsGrid from "../components/shows/ShowsGrid";
import ActorsGrid from "../components/actors/ActorsGrid";
import { useQuery } from "@tanstack/react-query";
import { TextCenter } from "../components/common/TextCenter";

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
      return <TextCenter>Error Occured: {showError.message}</TextCenter>;
    }

    if (shows?.length === 0) {
      return <TextCenter>No Results</TextCenter>;
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
