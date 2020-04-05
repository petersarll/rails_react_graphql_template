import React, { Component } from 'react'
// import { DESTROY_WORKOUT } from '../apollo'
import { Mutation } from 'react-apollo'
import { DESTROY_WORKOUT } from '../apollo'

class DeleteWorkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '13',
      errors: []
    }
  }

  handleFormSubmit = props => {
    // let { destroyExercise } = props
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
        window.location.reload(false)
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
      <div>
        <Mutation mutation={DESTROY_WORKOUT} variables={{ id }}>
          <div>
            <button onClick={}>click me to delete number 18</button>
          </div>
        </Mutation>
      </div>
    )
  }
}

export default DeleteWorkout
