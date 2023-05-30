import React from "react";

function AppTitle(props) {
  const {
    title = "Box Office",
    subtitle = "Are you looking for a movie or an acttor",
  } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export default AppTitle;