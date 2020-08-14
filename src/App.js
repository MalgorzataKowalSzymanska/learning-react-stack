import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addName, addSurname } from './actions';
import { Button, Input, FormControl, InputLabel } from '@material-ui/core';
import PersonList from './PesronList';

function App() {
  const emptyPersonData = useSelector(state => state.isPersonData);
  const peopleListData = useSelector(state => state.isPersonList);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>First react-redux Appp</h1>
      <h3>For Personal Information:</h3>
      <FormControl>
        <InputLabel>First name: </InputLabel>
        <Input id="firstName" />
        <Button variant="contained" color="primary" onClick={() => dispatch(addName(document.getElementById("firstName").value))}>Add Name</Button>
      </FormControl>
      <FormControl>
        <InputLabel>Surname: </InputLabel>
        <Input id="surname" />
        <Button variant="outlined" color="primary" onClick={() => dispatch(addSurname(document.getElementById("surname").value))}>Add surname</Button>
      </FormControl>
      <span>{emptyPersonData}</span>
      <PersonList peopleList={peopleListData}></PersonList>
    </div>
  );
}
export default App;
