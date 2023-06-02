import React from "react";

function ShowMainData({ image, name, ratings, summary, genres }) {
  return (
    <div>
      <img src={image ? image.original : "/not-found.png"} alt={name} />
      <div>
        <h1>{name}</h1>
        <p>Ratings: {ratings.average || "N/A"}</p>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div>
          Genres:{" "}
          <div>
            {genres.map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowMainData;
