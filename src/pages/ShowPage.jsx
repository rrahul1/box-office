import React from "react";
import { useParams } from "react-router-dom";
import { getShowById } from "../api/tvmaze";
import { useQuery } from "@tanstack/react-query";
import ShowMainData from "../components/shows/ShowMainData";
import Details from "../components/shows/Details";
import Seasons from "../components/shows/Seasons";
import Cast from "../components/shows/Cast";

function ShowPage() {
  const { showId } = useParams();

  const { data: showData, error: showError } = useQuery({
    queryKey: ["show", showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }

  if (showData) {
    return (
      <div>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          ratings={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <div>
          <h1>Details</h1>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <div>
          <h1>Seasons</h1>
          <Seasons seasons={showData._embedded.seasons} />
        </div>
        <div>
          <h1>Cast</h1>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }

  return <div>Loading....!!!</div>;
}

export default ShowPage;
