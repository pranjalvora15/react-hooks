const Reducer = () => {
  return (
    <div className="App-header">
      <ul>
        <li>useReducer is used to for state management</li>
        <li>useReducer is alternative to useState</li>
        <li>In fact useReducer is build using useReducer</li>
      </ul>

      <table>
        <thead>
          <th scope="col">reduce in JavaScript</th>
          <th scope="col">useReducer in React</th>
        </thead>
        <tbody>
          <tr>
            <td>array.reduce(reducer function,initial value)</td>
            <td>useReducer(reducer function, initial State)</td>
          </tr>
          <tr>
            <td>singleValue=reducer(accumulator,itemValue)</td>
            <td>
              One will get new state value from reducer as per action i.e.
              newState =reducer(currentState,action){" "}
            </td>
          </tr>
          <tr>
            <td>reduce method returns a single value</td>
            <td>
              useReducer returns a pair of values. [newState,dispatch]
              <li> dispatch method is used to specify the action</li>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Reducer;
