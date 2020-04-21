import React from "react";
import ReactDOM from "react-dom";

const Header = ({ name }) => {
  return <h2>{name}</h2>;
};

const Total = ({ parts }) => {
  let initialValue = 0;
  const sum = parts.reduce((acc, cur) => acc + cur.exercises, initialValue);
  return <b> total of {sum} exercises</b>;
};

const Part = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <p id={part.id}>
          {" "}
          {part.name} {part.exercises}{" "}
        </p>
      ))}
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      <Part parts={parts} />
      <Total parts={parts} />
    </>
  );
};

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => {
        return (
          <>
            <Header name={course.name} />
            <Content parts={course.parts} />
          </>
        );
      })}
    </>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
