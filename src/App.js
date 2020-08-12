import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addName ,addSurname} from './actions';

function App() {
  const emptyPersonData = useSelector(state => state.isEmpty)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>First react-redux Appp</h1>
      <h3>For Personal Information:</h3>
            
                <label>First name: </label>
                <input type="text" id="firstName"></input>
                <button onClick={() => dispatch(addName(document.getElementById("firstName").value))}>Add Name</button>
                <label>Surname:  </label>
                <input type="text" id="surname"></input>
                <button onClick={() => dispatch(addSurname(document.getElementById("surname").value))}>Add surname</button>
           
    </div>
  );
}

export default App;
