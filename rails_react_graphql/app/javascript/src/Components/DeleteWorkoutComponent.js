import React, { Component } from 'react'
// import { DESTROY_WORKOUT } from '../apollo'
import { Mutation } from 'react-apollo'
import { DESTROY_WORKOUT } from '../apollo'

class DeleteWorkout extends Component {
  constructor() {
    super()
    this.state = {
      id: 12,
      errors: []
    }
  }

  handleFormSubmit = props => {
    let { destroyExercise } = props
    let { id } = this.state

    console.log(id)
    destroyExercise({
      variables: {
        id: id
      }
    })
      .then(response => {
        alert('Book Details deleted successfully')
        const { data } = response
        console.log(data)
        window.location.reload(true)
      })
      .catch(console.log('youre encountering an error'))
    //   .catch(e => {
    //     let messages = JSON.parse(e.graphQLErrors[0].message)
    //     this.setState({
    //       errors: messages.errors
    //     })
    //   })
  }

  render() {
    return (
      <Mutation mutation={DESTROY_WORKOUT}>
        {destroyExercise => (
          <div>
            <button onClick={this.handleFormSubmit({ destroyExercise })}>
              click me to delete number 18
            </button>
          </div>
        )}
      </Mutation>
    )
  }
}

export default DeleteWorkout
