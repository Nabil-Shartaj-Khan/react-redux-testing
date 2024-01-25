import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../redux/reducer/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-header bg-primary">
        <h4>Counter App</h4>
      </div>
      <div className="card-body">
        <h1 className="text-center">{count}</h1>
        <div className="my-4 d-flex justify-content-around pt-2">
          <button
            className="btn btn-success py-2 px-4"
            onClick={() => {
              dispatch(increment());
            }}
          >
            Increase
          </button>
          <button
            className="btn btn-danger py-2 px-4"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            Decrease
          </button>
          <button
            className="btn btn-warning py-2 px-4"
            onClick={() => {
              dispatch(reset());
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
