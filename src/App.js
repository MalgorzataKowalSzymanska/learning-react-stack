import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addName, addSurname, changeColor } from './actions';
import { Button, Input, FormControl, InputLabel } from '@material-ui/core';
import PersonList from './PesronList';

function App() {
  const emptyPersonData = useSelector(state => state.PersonData);
  const peopleListData = useSelector(state => state.PersonList);
  const backgroundColor = useSelector(state => state.ColorChanger);
  const dispatch = useDispatch();

  return (
    <div style={{
      backgroundColor: backgroundColor
    }}>
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
      <Button variant="contained" color="default" onClick={() => dispatch(changeColor(backgroundColor))}>
        change background
</Button>
      <PersonList peopleList={peopleListData}></PersonList>
    </div>
  );
}
export default App;
