import React from "react";
import "./styles.css";
import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from './store/index';
import {updateFormData,fetchSolution} from "./store/todoSlices"

const Form:React.FC = () => {
  const solutionState = useSelector((state: RootState) => state.todosReducer)
  const dispatch = useDispatch<AppDispatch>();

  const update = (event: React.ChangeEvent<HTMLInputElement>) =>{
  dispatch(updateFormData({...solutionState,
    [event.target.name]: event.target.value}))
    dispatch(fetchSolution(solutionState))
};

  const { array, sum, solution } = solutionState;

  return (
    <form onSubmit={(e) => dispatch(fetchSolution(solutionState))}>
      <input
        value={array}
        onChange={(e) => update(e)}
        placeholder="First name"
        type="text"
        name="array"
        required
      />

      <input
        value={sum}
        onChange={(e) => update(e)}
        placeholder="Sum"
        type="text"
        name="sum"
        required
      />

      <input
        value={solution}
        onChange={(e) => update(e)}
        placeholder="Password"
        type="test"
        name="solution"
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
