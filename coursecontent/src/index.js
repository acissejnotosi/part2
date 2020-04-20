import React from "react";
import ReactDOM from "react-dom";

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Total = ({ parts }) => {
  let initialValue = 0;
  const sum = parts.reduce((acc, cur) => acc + cur.exercises, initialValue);
  return <p> Number of exercises {sum}</p>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}{" "}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
      <Total parts={parts} />
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
