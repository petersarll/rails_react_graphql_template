import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './apollo'
import WorkoutComponent from './Components/WorkoutComponent'
import WorkoutList from './Components/WorkoutList'
import List from './Components/List'
import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom'

//SVG images
import Laptop from './svg/mockup.svg'
import Ipad from './svg/ipad.svg'
import './stylesheets/App.css'

import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

import { Exercises } from './exerciseLibrary.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: Exercises
    }
    // this.removeItem = this.removeItem.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  // removeItem(item) {
  //   // Put our list into an array
  //   const list = this.state.list.slice()
  //   // Check to see if item passed in matches item in array
  //   list.some((el, i) => {
  //     if (el === item) {
  //       // If item matches, remove it from array
  //       list.splice(i, 1)
  //       return true
  //     }
  //   })
  //   // Set state to list
  //   this.setState({
  //     list: list
  //   })
  // }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="bp">
            <header className="mp-1">
              <div className="mp-2" id="ht"></div>
              <div className="mp-3"></div>
              <div className="mp-4" id="ht"></div>
            </header>
            <div className="h1">
              <ScrollAnimation animateIn="fadeIn">
                Nunc mattis enim ut tellus. At elementum eu facilisis sed odio
                morbi.
              </ScrollAnimation>
            </div>
            <div className="p2">
              <ScrollAnimation animateIn="fadeIn">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. labore et dolore magna
                aliqua.
              </ScrollAnimation>
            </div>
            <Link className="btn" id="contact" to="#contact-div">
              <div className="btn-txt">Contact</div>
            </Link>
            <Link className="btn" id="about" to="#trynow">
              <div className="btn-txt">Try Now</div>
            </Link>
            <div className="mp-h1">Retrain</div>
            <img className="laptop" src={Laptop} />
            <div id="trynow"></div>
          </div>
          <div className="trynow-summary-cntnr">
            <div className="trynow-summary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. labore et dolore magna
              aliqua.
            </div>
          </div>
          <WorkoutComponent />
          <WorkoutList />
          <img className="ipad" src={Ipad} />
          {/* adding exercise */}
          <div className="content">
            <div className="container">
              <section className="section">
                <List items={this.state.list} delete={this.removeItem} />
              </section>
              <hr />
            </div>
          </div>
          <div className="contact-div" id="contactnow"></div>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
