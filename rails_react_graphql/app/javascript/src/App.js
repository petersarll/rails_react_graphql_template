import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './apollo'
import WorkoutComponent from './Components/WorkoutComponent'
import WorkoutList from './Components/WorkoutList'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
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
