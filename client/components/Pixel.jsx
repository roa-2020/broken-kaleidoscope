import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myStyle: {
        fontFamily: 'Times New Roman',
        height: "100px",
        width: "100px",
        backgroundColor: randomHexColor()
      }
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = (evt) => {
    this.setState({
      myStyle: {
        ...this.state.myStyle,
        backgroundColor: randomHexColor()
      }
    })
  }

  colorTime() {
    setInterval(() => {
      this.setState({
        myStyle: {
          ...this.state.myStyle,
          backgroundColor: randomHexColor()
        }
      })
    }, 2000)
  }

  render() {
    return (
      <div style={this.state.myStyle} onClick={this.clickHandler}>
        {this.colorTime()}
      </div>
    )
  }
}

export default Pixel