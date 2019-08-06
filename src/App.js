import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>IdCard</h2>
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg" />

        <h2>Greetings</h2>
        <Greetings lang='de'>
          Ludwig
        </Greetings>

        <h2>Random</h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
    );
  }
}

export default App;
