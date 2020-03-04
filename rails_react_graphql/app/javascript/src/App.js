import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './apollo'
import WorkoutComponent from './Components/WorkoutComponent'
import WorkoutList from './Components/WorkoutList'

import './stylesheets/App.css'

class App extends Component {
  render() {
    return (
      <div className="mp-1">
        <ApolloProvider client={client}>
          <header className="mp-h1">ReTrain</header>
          <WorkoutComponent />
          <WorkoutList />
        </ApolloProvider>
      </div>
    )
  }
}

export default App
