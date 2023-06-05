import React from "react";
import ShowCard from "./ShowCard";
import { useStarredShow } from "../../lib/useStarredShows";

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
    <div>
      {shows.map((data) => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : "/not-found.png"}
          summary={data.show.summary}
          handleStarClick={handleStarClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </div>
  );
}

export default ShowsGrid;
