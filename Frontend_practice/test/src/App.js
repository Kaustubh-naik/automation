// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {Box, Button} from '@mui/material';

function App()
{
  const [employees,setEmployees] = useState();
  const getEmployees = async() => 
  {
    const responce = await fetch(
      "https://dummy.restapiexample.com/api/v1/employee/1",
      {
        method: "get",
      }
    );
    // console.log(responce,"hhhhhhhhhhhhh")
    const data = await responce.json();
    console.log(data);
    setEmployees(data?.data);
  };
  return(
    <div>
    <Box className="App">Welcome to react session</Box>
    <Button onClick={() => getEmployees()}>Test</Button>
    </div>
  );
}

export default App;