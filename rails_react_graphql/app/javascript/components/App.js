import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './apollo'
import WorkoutComponent from './WorkoutComponent'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <header>Add Header Here</header>
          Here is the workout component
          <WorkoutComponent />
        </div>
      </ApolloProvider>
    )
  }
}

export default App
