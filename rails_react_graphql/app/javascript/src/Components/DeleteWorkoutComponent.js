import React, { Component } from 'react'
import { DESTROY_WORKOUT } from '../apollo'
import { Mutation } from 'react-apollo'

class DeleteWorkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 18,
      errors: []
    }
  }

  handleFormSubmit = props => {
    let { destroyWorkout } = props
    let { id } = this.state

    console.log(id)
    destroyWorkout({
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
      .catch(e => {
        let messages = JSON.parse(e.graphQLErrors[0].message)
        this.setState({
          errors: messages.errors
        })
      })
  }

  render() {
    return (
      <Mutation mutation={DESTROY_WORKOUT}>
        {destroyWorkout => (
          <div>
            <button onClick={this.handleFormSubmit({ destroyWorkout })}>
              {' '}
              click me to delete number 18{' '}
            </button>
          </div>
        )}
      </Mutation>
    )
  }
}

export default DeleteWorkout
