import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./CounterSlice.js";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <section>
      <p>{count}</p>
      <div className="counter-section"  className="counter-button">
        <button className="counter-button" onClick={() => dispatch(increment())}>+</button>
        <button className="counter-button" onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  );
};

export default Counter;
