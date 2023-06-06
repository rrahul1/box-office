import React from "react";
import { useStarredShow } from "../lib/useStarredShows";
import { useQuery } from "@tanstack/react-query";
import { getShowsByIds } from "../api/tvmaze";
import ShowsGrid from "../components/shows/ShowsGrid";
import { TextCenter } from "../components/common/TextCenter";

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

  if (starredItems?.length === 0) {
    return <TextCenter>No shows were starrd.. !</TextCenter>;
  }

  if (starredShowError) {
    return <TextCenter>Error occured {starredShowError.message}</TextCenter>;
  }

  if (starredItems?.length > 0) {
    return <ShowsGrid shows={starredItems} />;
  }

  return <TextCenter>Data Loading...</TextCenter>;
}

export default Starred;
