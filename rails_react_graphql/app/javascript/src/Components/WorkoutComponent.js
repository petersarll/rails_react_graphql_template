import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { CREATE_WORKOUT } from '../apollo'

class Workout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exerciseName: null,
      sets: null,
      reps: null,
      rest: null,
      errors: []
    }
  }

  handleFormSubmit = props => {
    let { createWorkout } = props
    let { exerciseName, sets, reps, rest } = this.state

    console.log(exerciseName, sets, reps, rest)
    createWorkout({
      variables: {
        exerciseName: exerciseName,
        sets: sets,
        reps: reps,
        rest: rest
      }
    })
      .then(response => {
        alert('Book Details Updated successfully')
        const { data } = response
        console.log(data)
      })
      .catch(e => {
        let messages = JSON.parse(e.graphQLErrors[0].message)
        this.setState({
          errors: messages.errors
        })
      })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  showErrors = () => {
    let { errors } = this.state
    const errorsList = errors.map((error, index) => (
      <li key={index}>{error}</li>
    ))

    return <ul>{errorsList}</ul>
  }
  render() {
    return (
      <Mutation mutation={CREATE_WORKOUT}>
        {createWorkout => (
          <div>
            <h2>Create Workout Form</h2>
            <this.showErrors />
            <form
              onSubmit={e => {
                e.preventDefault()
                this.handleFormSubmit({ createWorkout })
              }}
            >
              <div>
                <label>Exercise Name</label>
                <input
                  type="text"
                  id="exerciseName"
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div>
                <label>Sets</label>
                <input
                  type="text"
                  id="sets"
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div>
                <label>Reps</label>
                <input
                  type="text"
                  id="reps"
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div>
                <label>Rest</label>
                <input
                  rows="10"
                  cols="60"
                  id="rest"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        )}
      </Mutation>
    )
  }
}

export default Workout
