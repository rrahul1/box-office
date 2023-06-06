import React from "react";
import ActorCard from "./ActorCard";
import { FlexGrid } from "../common/FlexGrid";
import notFound from "../../lib/not-found.png";

function ActorsGrid({ actors }) {
  return (
    <FlexGrid>
      {actors.map((data) => (
        <ActorCard
          key={data.person.id}
          id={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
          image={data.person.image ? data.person.image.medium : notFound}
        />
      ))}
    </FlexGrid>
  );
}

export default ActorsGrid;
