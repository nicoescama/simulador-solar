import React, { Component } from 'react';
import './App.css';
import Center from 'react-center';
import NavBar from './components/NavBar';
import SimulationList from './components/SimulationList'


class App extends Component {
  render() {
    return (
      <div>
    <NavBar />

   <SimulationList />
   </div>

    );
  }
}


export default App;
