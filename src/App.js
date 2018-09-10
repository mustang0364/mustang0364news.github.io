import React, { Component } from 'react';
import routes from './routes'
import  Header from './Shared/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       {routes}
       <Header/>
      </div>
    );
  }
}

export default App;