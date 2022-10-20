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
      <br />
      <hr />
      <br />
      <p>
        Read useState vs useReducer or when to use what after understanding
        useReducer
      </p>
      <table>
        <thead>
          <th scope="col">Scenario</th>
          <th scope="col">useState</th>
          <th scope="col">useReducer</th>
        </thead>
        <tbody>
          <tr>
            <td className="bold">Type of State</td>
            <td>Number,String,Boolean</td>
            <td>Object or Array</td>
          </tr>
          <tr>
            <td className="bold">Number of state transition</td>
            <td>One or two</td>
            <td>Too Many</td>
          </tr>
          <tr>
            <td className="bold">Related state transitions? </td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td className="bold">Business logic </td>
            <td>Used when there is no business logic</td>
            <td>Used when there is complex business logic</td>
          </tr>
          <tr>
            <td className="bold">Local state vs global state </td>
            <td>More preferable when one have to deal with local state </td>
            <td>More preferable when have to deal with global state</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Reducer;
