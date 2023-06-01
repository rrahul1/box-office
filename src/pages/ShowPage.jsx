import React from "react";
import { useParams } from "react-router-dom";

function ShowPage() {
  const { showId } = useParams();
  console.log(showId);
  return <div>ShowPage</div>;
}

export default ShowPage;
