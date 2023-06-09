import React from "react";
import ShowCard from "./ShowCard";
import { useStarredShow } from "../../lib/useStarredShows";
import { FlexGrid } from "../common/FlexGrid";
import notFound from "../../lib/not-found.png";

function ShowsGrid({ shows }) {
  const [starredShows, dispatchStarred] = useStarredShow();

  const handleStarClick = (showId) => {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: "UNSTAR", showId });
    } else {
      dispatchStarred({ type: "STAR", showId });
    }
  };

  return (
    <FlexGrid>
      {shows.map((data) => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : notFound}
          summary={data.show.summary}
          handleStarClick={handleStarClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
}

export default ShowsGrid;
