import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { CREATE_WORKOUT } from '../apollo'
import ScrollAnimation from 'react-animate-on-scroll'

//CSS
import '../stylesheets/workoutcomponent.css'
import 'animate.css/animate.min.css'

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
          <div className="wc-1">
            <div className="h2">
              <ScrollAnimation animateIn="fadeIn">Create</ScrollAnimation>
            </div>
            <this.showErrors />
            <div className="form-div">
              <div className="form-header">Try Me Now</div>
              <form
                onSubmit={e => {
                  e.preventDefault()
                  this.handleFormSubmit({ createWorkout })
                }}
              >
                <div>
                  <label>Exercise Name</label>
                  <br />
                  <input
                    className="frm-input"
                    placeholder="type in an exercise"
                    type="text"
                    id="exerciseName"
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Sets</label>
                  <br />
                  <input
                    className="frm-input"
                    placeholder="type the amount of sets"
                    type="text"
                    id="sets"
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Reps</label>
                  <br />
                  <input
                    className="frm-input"
                    placeholder="type in the amount of reps"
                    type="text"
                    id="reps"
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Rest</label>
                  <br />
                  <input
                    className="frm-input"
                    placeholder="type in the length of rest"
                    rows="10"
                    cols="60"
                    id="rest"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <button className="sbmt-btn" type="submit">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        )}
      </Mutation>
    )
  }
}

export default Workout
