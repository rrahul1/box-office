import React from "react";
import { useStarredShow } from "../lib/useStarredShows";
import { useQuery } from "@tanstack/react-query";
import { getShowsByIds } from "../api/tvmaze";
import ShowsGrid from "../components/shows/ShowsGrid";

function Starred() {
  const [starredShowsIds] = useStarredShow();

  const { data: starredItems, error: starredShowError } = useQuery({
    queryKey: ["starred", starredShowsIds],
    queryFn: () =>
      getShowsByIds(starredShowsIds).then((result) =>
        result.map((show) => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredItems) {
    return <ShowsGrid shows={starredItems} />;
  }

  return <div>Data Loading...</div>;
}

export default Starred;
