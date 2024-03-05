import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'increase') {
    return {
      count: state.count + 1,
    };
  } else if (action.type === 'decrease') {
    if (state.count == 0) {
      return {
        count: 0,
      };
    } else
      return {
        count: state.count - 1,
      };
  }
}

const CounterComponent = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleIncreaseOnClick() {
    dispatch({ type: 'increase' });
  }

  function handleDecreaseOnClick() {
    dispatch({ type: 'decrease' });
  }

  return (
    <>
      <div>
        <h1>Counter</h1>
        <h2>{state?.count}</h2>

        <button onClick={handleIncreaseOnClick}>increase</button>
        {state?.count > 0 && (
          <button onClick={handleDecreaseOnClick}>decrease</button>
        )}
      </div>
    </>
  );
};

export default CounterComponent;
