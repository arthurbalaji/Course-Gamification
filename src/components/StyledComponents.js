import styled from "styled-components";

export const Container = styled.div`
  font-family: "Arial", sans-serif;
  background-color: #f4f4f9;
  min-height: 100vh;
  color: #333;
`;

export const PageContent = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`;

export const Heading = styled.h1`
  text-align: center;
  color: #1e3a8a;
  margin-bottom: 20px;
`;

export const CourseCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  background: ${({ status }) =>
    status === "completed"
      ? "#d4edda"
      : status === "in-progress"
      ? "#fff3cd"
      : "#f8d7da"};
  color: ${({ status }) =>
    status === "completed"
      ? "#155724"
      : status === "in-progress"
      ? "#856404"
      : "#721c24"};
  border-left: 6px solid
    ${({ status }) =>
      status === "completed"
        ? "#28a745"
        : status === "in-progress"
        ? "#ffc107"
        : "#dc3545"};
  border-radius: 8px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #1e3a8a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #155a9f;
  }
`;

export const VideoContainer = styled.div`
  margin: 20px 0;
  iframe {
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const TotalPoints = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
