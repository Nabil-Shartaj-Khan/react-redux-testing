const Counter = () => {
  return (
    <div className="card">
      <div className="card-header bg-primary">
        <h4>Counter App</h4>
      </div>
      <div className="card-body">
        <h1 className="text-center">00</h1>
        <div className="my-4 d-flex justify-content-around pt-2">
          <button className="btn btn-success py-2 px-4">Increase</button>
          <button className="btn btn-danger py-2 px-4">Decrease</button>
          <button className="btn btn-warning py-2 px-4">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
