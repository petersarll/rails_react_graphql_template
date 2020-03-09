import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_ALL_WORKOUTS } from '../apollo'

import '../stylesheets/workoutlist.css'

function WorkoutList({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_ALL_WORKOUTS)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div className="wl-1">
      <div className="tablet-screen">
        <ul name="dog" onChange={onDogSelected}>
          {data.allWorkouts.map(workout => (
            <li
              className="exc-ind-lst"
              key={workout.id}
              value={workout.exerciseName}
            >
              {workout.exerciseName} | {workout.rest} |{' '}
              <button className="rmve-btn"> X </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="circle-div" id="circle-div"></div>
    </div>
  )
}

export default WorkoutList
