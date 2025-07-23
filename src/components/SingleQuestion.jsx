import React from "react";

const SingleQuestion = ({ info, title }) => {
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
      </header>
      <p>{info}</p>
    </article>
  );
};

export default SingleQuestion;
