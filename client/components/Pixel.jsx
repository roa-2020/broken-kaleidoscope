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
    this.setState({
      
    })
  }

  render() {
  return (<div style={this.state.style}>{this.state.greg}</div>);

  }
}

export default Pixel;