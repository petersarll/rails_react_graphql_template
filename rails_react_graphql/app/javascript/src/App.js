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
        <div className="main">
          <header>Add Header Here</header>
          Here is the workout component
          <WorkoutComponent />
          <WorkoutList />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
