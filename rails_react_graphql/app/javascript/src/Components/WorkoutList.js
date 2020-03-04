import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_ALL_WORKOUTS } from '../apollo'

function WorkoutList({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_ALL_WORKOUTS)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <ul name="dog" onChange={onDogSelected}>
      {data.allWorkouts.map(workout => (
        <li key={workout.id} value={workout.exerciseName}>
          {workout.exerciseName} | {workout.rest}
        </li>
      ))}
    </ul>
  )
}

export default WorkoutList
