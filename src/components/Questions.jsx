import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions }) => (
  <section className="container">
    <h1>Questions</h1>
    {questions.map((question) => (
      <SingleQuestion key={question.id} {...question} />
    ))}
  </section>
);

export default Questions;
