import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Filters from './components/Filters'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Cards />
          <Filters />
        </header>
      </div>
    );
  }
}

export default App;
