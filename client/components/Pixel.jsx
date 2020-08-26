import React from 'react'


const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {

  state = {
    style: {
      height: '50px',
      width: '50px',
      borderRadius: '50px/50px',
      marginLeft: '-20px',
      marginRight: '-20px',
      opacity: '0.5',
      background: randomHexColor(),
    },
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
    console.log('double clicked')
    this.setState({
      style: {
        ...this.state.style,
        background: 'white',
      },
    })
  }

  drag = (e) => {
    console.log('this aint no 10 second race')
    this.setState({
      style: {
        ...this.state.style,
        background: 'yellow',
      },
    })
  }

  onContext = (e) => {
    console.log('right clicked')
    this.state({
      style: {
        ...this.state.style,
        background: 'black',
      }
    })
  }

  render() {
  return (<div 
    onContextMenu={this.onContext}
    onDragEnter={this.drag}
    onDoubleClick={this.onDouble} 
    onMouseEnter={this.onMouse} 
    onClick={this.eventHandler} 
    style={this.state.style}>
    {this.state.greg}
    </div>);

  }
}

export default Pixel;