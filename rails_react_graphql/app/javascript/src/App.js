import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './apollo'
import WorkoutComponent from './Components/WorkoutComponent'
import WorkoutList from './Components/WorkoutList'
import CoolLogo from './mockup.svg'

import './stylesheets/App.css'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <header className="mp-1">
            <div className="mp-2" id="ht"></div>
            <div className="mp-3"></div>
            <div className="mp-4" id="ht"></div>
          </header>
          <div className="mp-h1">Welcome</div>
          <img className="laptop" src={CoolLogo} />
          {/* <WorkoutComponent />
          <WorkoutList /> */}
        </div>
      </ApolloProvider>
    )
  }
}

export default App
