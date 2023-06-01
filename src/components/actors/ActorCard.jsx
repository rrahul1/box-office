import React from "react";
import { Link } from "react-router-dom";

function ActorCard({ name, country, gender, deathday, birthday, image }) {
  console.log(gender);
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>
        {name}
        {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from ${country}` : "No country known"}</p>
      {!!birthday && <p>Born on ${birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : "Alive"}</p>
      <div>
        <Link to="/">Read More</Link>
        <button>Star Me</button>
      </div>
    </div>
  );
}

export default ActorCard;
