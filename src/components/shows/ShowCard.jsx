import React from "react";

function ShowCard({ name, image, id, summary, handleStarClick, isStarred }) {
  const summaryStripped = summary
    ? summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")
    : "No Description";

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{summaryStripped}...</p>
      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <button
          onClick={() => {
            handleStarClick(id);
          }}
        >
          {isStarred ? "Unstar" : "Star"}
        </button>
      </div>
    </div>
  );
}

export default ShowCard;
