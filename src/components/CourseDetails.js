import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PageContent, Heading, VideoContainer, Button } from "./StyledComponents";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleComplete = () => {
    if (!course || course.status === "completed") return;

    fetch(`http://localhost:5000/courses/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "completed" }),
    })
      .then(() => {
        fetch("http://localhost:5000/courses")
          .then((res) => res.json())
          .then((courses) => {
            const completedPoints = courses
              .filter((c) => c.status === "completed")
              .reduce((sum, c) => sum + c.points, 0);

            fetch("http://localhost:5000/user", {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ totalPoints: completedPoints }),
            })
              .then(() => {
                alert("Course marked as completed and points updated!");
                navigate("/courses");
              })
              .catch((err) => console.error(err));
          });
      })
      .catch((err) => console.error(err));
  };

  return (
    <PageContent>
      {course ? (
        <>
          <Heading>{course.name}</Heading>
          <VideoContainer>
            <iframe
              width="100%"
              height="500"
              src={course.videoUrl}
              title="Course Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoContainer>
          <Button onClick={handleComplete}>Mark as Completed</Button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </PageContent>
  );
};

export default CourseDetails;
