import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './apollo'
import WorkoutComponent from './Components/WorkoutComponent'
import WorkoutList from './Components/WorkoutList'
import Logo from './mockup.svg'
import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom'

import './stylesheets/App.css'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="bp">
            <header className="mp-1">
              <div className="mp-2" id="ht"></div>
              <div className="mp-3"></div>
              <div className="mp-4" id="ht"></div>
            </header>
            <div className="h1">
              Nunc mattis enim ut tellus. At elementum eu facilisis sed odio
              morbi.
            </div>
            <div className="p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. labore et dolore magna
              aliqua.
            </div>
            <button className="btn" id="contact">
              Contact
            </button>
            <Link className="btn" id="about" to="#trynow">
              Try Now
            </Link>
            <div className="mp-h1">Retrain</div>
            <img className="laptop" src={Logo} />
            <div id="trynow"></div>
            <WorkoutComponent />
            <WorkoutList />
          </div>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
