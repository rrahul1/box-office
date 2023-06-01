import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowById } from "../api/tvmaze";

function ShowPage() {
  const { showId } = useParams();
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getShowById(showId);
        setShowData(response);
      } catch (error) {
        setShowError(null);
      }
    }
    fetchData();
  }, [showId]);

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }

  if (showData) {
    return <div>Got show data {showData.name}</div>;
  }

  return <div>ShowPage</div>;
}

export default ShowPage;
