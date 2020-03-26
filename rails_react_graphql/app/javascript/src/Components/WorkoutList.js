import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_ALL_WORKOUTS } from '../apollo'

import '../stylesheets/workoutlist.css'
import Phone from '../svg/phone.svg'

function WorkoutList({ onSelected }) {
  const { loading, error, data } = useQuery(GET_ALL_WORKOUTS)

  const removeDiv = () => {
    const item = document.getElementById('dog')
    item.slice()
  }

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  return (
    <div className="wl-1">
      <div className="tablet-screen">
        <ul id="dog" onChange={onSelected}>
          {data.allWorkouts.map(workout => (
            <li className="exc-ind-lst" key={workout.id} value={workout.id}>
              <div className="exc-div">{workout.exerciseName}</div>
              <div className="rst-div">{workout.rest}</div>
              <div className="btn-div">
                <button
                  className="rmve-btn"
                  id="rmve-btn"
                  key={workout.id}
                  onClick={removeDiv}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="circle-div" id="circle-div"></div>
      <div className="contact" id="contact-div"></div>
      <img className="phone" id="phone" src={Phone} />
    </div>
  )
}

export default WorkoutList
