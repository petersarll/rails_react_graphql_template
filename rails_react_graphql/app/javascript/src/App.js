import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './apollo'
import WorkoutComponent from './Components/WorkoutComponent'
import WorkoutList from './Components/WorkoutList'

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
            {/* <header className="mp-h1">ReTrain</header> */}
            {/* <WorkoutComponent />
                    <WorkoutList /> */}
          </header>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
