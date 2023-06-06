import React from "react";
import { Link, useParams } from "react-router-dom";
import { getShowById } from "../api/tvmaze";
import { useQuery } from "@tanstack/react-query";
import ShowMainData from "../components/shows/ShowMainData";
import Details from "../components/shows/Details";
import Seasons from "../components/shows/Seasons";
import Cast from "../components/shows/Cast";
import styled from "styled-components";
import { TextCenter } from "../components/common/TextCenter";

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
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/">Go back to home</Link>
        </BackHomeWrapper>

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
        <InfoBlock>
          <h1>Seasons</h1>
          <Seasons seasons={showData._embedded.seasons} />
        </InfoBlock>
        <InfoBlock>
          <h1>Cast</h1>
          <Cast cast={showData._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }

  return <TextCenter>Loading....!!!</TextCenter>;
}

export default ShowPage;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
