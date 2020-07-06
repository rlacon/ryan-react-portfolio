import React, { Component } from 'react'
import { Transition } from 'react-transition-group';
const duration = 3000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  backgroundColor: "red",
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

export class Dummy extends Component {

  state ={
    fade: false
  }

  toggle =() => {
    this.setState({fade: !this.state.fade})
  }

  componentDidMount(){
    this.setState({
      fade: !this.state.fade
    })
  }

  componentWillMount(){
    this.setState({
      fade: !this.state.fade
    })
  }
  render() {
    return (
      <div>
       <Transition in={this.state.fade} timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
     <h1>i am dummy!!!</h1>
     <button onClick={this.toggle}>click here</button>
      </div>
    )}
  </Transition>
      </div>
    )
  }
}

export default Dummy
