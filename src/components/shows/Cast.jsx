import React from "react";

function Cast({ cast }) {
  return (
    <div>
      {cast.map(({ person, character, voice }) => (
        <div key={person.id}>
          <div>
            <img
              src={person.image ? person.image.medium : "/not-found.png"}
              alt={person.name}
            />
          </div>
          <div>
            Name: {person.name} | {character.name} {voice && "| Voiceover"}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cast;
