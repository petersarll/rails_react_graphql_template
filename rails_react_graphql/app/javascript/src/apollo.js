import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

export const client = new ApolloClient({
  uri: '/graphql'
})

// let's define graphql queries here, similar to what we send using rails Graphiql Engine

export const CREATE_WORKOUT = gql`
  mutation CreateExercise(
    $exerciseName: String!
    $sets: String!
    $reps: String!
    $rest: String!
  ) {
    createExercise(
      input: {
        exerciseName: $exerciseName
        sets: $sets
        reps: $reps
        rest: $rest
      }
    ) {
      workout {
        id
        exerciseName
        rest
      }
    }
  }
`

// // get a single book query
// export const GET_BOOK = gql`
//   query getWorkout($workoutid: ) {
//     workout(id: $workoutid) {
//       exerciseName
//     }
//   }
// `

//get all workout queries
export const GET_ALL_WORKOUTS = gql`
  query allWorkouts {
    allWorkouts {
      exerciseName
      rest
      id
    }
  }
`
