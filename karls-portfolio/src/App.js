import './App.css';
import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from '../components/Footer';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
