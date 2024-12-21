import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import CourseDetails from "./components/CourseDetails";
import Points from "./components/Points";
import { Container } from "./components/StyledComponents";

const App = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/points" element={<Points />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
