import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor(props) {
    super(props);
    this.newColor = this.newColor.bind(this);
    this.greenify = this.greenify.bind(this);
    this.blackify = this.blackify.bind(this);
    this.yellowify = this.yellowify.bind(this);
    this.autochange = this.autochange.bind(this);
    this.state = {
      style:
      {
        height: '50px',
        width: '50px',
        backgroundColor: randomHexColor()
      }
    };
  }
  newColor() {
    this.setState({
      style:
      {
        ...this.state.style,
        backgroundColor: randomHexColor()
      }
    })
  }
  greenify() {
    this.setState({
      style:
      {
        ...this.state.style,
        backgroundColor: 'green'
      }
    })
  }
  blackify(evt) {
    evt.preventDefault()
    this.setState({
      style:
      {
        ...this.state.style,
        backgroundColor: 'black'
      }
    })
  }
  yellowify() {
    this.setState({
      style:
      {
        ...this.state.style,
        backgroundColor: 'yellow'
      }
    })
  }
  autochange() {
    setInterval(() => {
      this.setState({
        style:
        {
          ...this.state.style,
          backgroundColor: randomHexColor()
        }
      }); 
    }, 3000);
  }
  render() {
    return (
      <div style={this.state.style} onClick={this.newColor} onMouseEnter={this.greenify} onContextMenu={this.blackify} onDragEnter={this.yellowify}>{this.autochange()}</div>
    )
  }
}

export default Pixel
