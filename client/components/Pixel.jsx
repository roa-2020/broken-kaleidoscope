import React from 'react'


const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {

  state = {
    style: {
      height: '50px',
      width: '50px',
      background: randomHexColor(),
    },
    greg: "greg",
  
  }

  eventHandler = (e) => {
    console.log('click')
    this.setState({
      style: {
        ...this.state.style,
        background: randomHexColor()
      },
    })
  }

  onMouse = (e) => {
    console.log('on MOUSE MOVE')
    this.setState({
      style: {
        ...this.state.style,
        background: randomHexColor()
      },
    })
  }

  onDouble = (e) => {
    console.log()
    this.setState({
      style: {
        ...this.state.style,
        background: 'yellow'()
      },
    })
  }

  render() {
  return (<div 
    onDoubleClick={this.onDouble} 
    onMouseEnter={this.onMouse} 
    onClick={this.eventHandler} 
    style={this.state.style}>
    {this.state.greg}
    </div>);

  }
}

export default Pixel;