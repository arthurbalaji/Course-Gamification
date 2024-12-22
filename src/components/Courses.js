import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageContent, Heading, CourseCard, Button } from "./StyledComponents";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://course-gamification.onrender.com/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error(err));
  }, []);

  const handleViewCourse = (id) => {
    fetch(`https://course-gamification.onrender.com/courses/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "in-progress" }),
    }).catch((err) => console.error(err));
  };

  return (
    <PageContent>
      <Heading>Available Courses</Heading>
      {courses.map((course) => (
        <CourseCard key={course.id} status={course.status}>
          <div>
            <h3>{course.name}</h3>
            <p>Status: {course.status === "Yet to start course" ? "Yet to start course" : course.status}</p>
          </div>
          <Button as={Link} to={`/courses/${course.id}`} onClick={() => handleViewCourse(course.id)}>
            View Course
          </Button>
        </CourseCard>
      ))}
    </PageContent>
  );
};

export default Courses;
