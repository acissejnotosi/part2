import React from "react";

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
const Header = ({ name }) => {
  return <h2>{name}</h2>;
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

export default Course;
