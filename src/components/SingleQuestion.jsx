import React, { useReducer } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const TOGGLE_BTN = "TOGGLE_BTN";

const defaultState = {
  showInfo: false,
};

const reducer = (state, action) => {
  if (action.type === TOGGLE_BTN) {
    return { ...state, showInfo: !state.showInfo };
  }
  return state;
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
