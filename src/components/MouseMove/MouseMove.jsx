import React, { Component } from 'react'

export default class MouseMove extends Component {
    
    state = {
        mouseX: 0,
        mouseY: 0
    }

    mouseMoveHandler = (event) => {
        this.setState({
            mouseX: event.offsetX,
            mouseY: event.offsetY
        })
    }

    componentDidMount()
        {
            window.addEventListener('mousemove', this.mouseMoveHandler)
        }
    

    componentWillUnmount() {
        window.addEventListener('mousemove', this.mouseMoveHandler)
    }

  render() {
    return (
      <div>
        <div>MouseX: {this.state.mouseX}</div>
        <div>MouseY: {this.state.mouseY}</div>
      </div>
    )
  }
}
