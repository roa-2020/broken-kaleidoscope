import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myStyle: {
        fontFamily: 'Times New Roman',
        height: "10px",
        width: "10px",
        backgroundColor: randomHexColor()
      }
    }
  }

  render() {
    return (
      <div style={this.state.myStyle}>

      </div>
    )
  }
}

export default Pixel