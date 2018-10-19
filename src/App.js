import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Center from 'react-center';
import NavBar from './components/NavBar';
import SimulationList from './components/SimulationList'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
    <Center>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
   </Center>
   <SimulationList />
   </div>

    );
  }
}

export default App;
