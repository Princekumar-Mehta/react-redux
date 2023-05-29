import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "../actions/actions";
const Home = () => {
  const myState = useSelector((state) => {
    return state.changeNumber;
  });
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment/Decrement Counter</h1>
      <h4>using React and Redux</h4>
      <button onClick={() => dispatch(decNumber(5))}>-</button>
      <input type="text" value={myState} />
      <button onClick={() => dispatch(incNumber(10))}>+</button>
    </div>
  );
};

export default Home;
