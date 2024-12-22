import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PageContent, Heading, TotalPoints } from "./StyledComponents";

const Points = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://course-gamification.onrender.com/user")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <PageContent>
      <Heading>Your Points</Heading>
      <TotalPoints>
        <h2>Total Points: {user ? user.totalPoints : "Loading..."}</h2>
      </TotalPoints>
    </PageContent>
  );
};

export default Points;
