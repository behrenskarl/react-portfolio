import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './pages/style.css';
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import AboutMe from './pages/aboutMe'
import Portfolio from './pages/portfolio'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)


function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Navbar/>
            <div>
              {/* routes */}
              <Route exact path='/' component={AboutMe} />
              <Route exact path='/about' component={AboutMe} />
              <Route exact path='/portfolio' component={Portfolio} />
            </div>
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
