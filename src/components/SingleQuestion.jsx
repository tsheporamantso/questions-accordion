import React, { useReducer } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import reducer from "./hooks/reducer";
import { TOGGLE_BTN } from "./actions";

const defaultState = {
  showInfo: false,
};

const SingleQuestion = ({ info, title }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => dispatch({ type: TOGGLE_BTN })}
        >
          {state.showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {state.showInfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
