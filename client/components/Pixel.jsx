import React from "react"

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, 0)}`

const width = "40px"
const height = width

class Pixel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        fontFamily: "Times New Roman",
        width: width,
        height: height,
        backgroundColor: randomHexColor(),
      },
    }
  }

  changeColor = (evt) => {
    this.setState({
      style: {
        width: width,
        height: height,
        backgroundColor: randomHexColor(),
      },
    })
  }

  componentDidMount() {
    setInterval(this.changeColor, 1000)
  }

  onContextMenu = (evt) => {
    evt.preventDefault()
    this.setState({
      style: {
        width: width,
        height: height,
        backgroundColor: "black",
      },
    })
  }

  dblClick = (evt) => {
    this.setState({
      style: {
        width: width,
        height: height,
        backgroundColor: "white",
      },
    })
  }

  dragEnter = (evt) => {
    this.setState({
      style: {
        width: width,
        height: height,
        backgroundColor: "yellow",
      },
    })
  }
  render() {
    return (
      <div
        style={this.state.style}
        onClick={this.changeColor}
        onMouseEnter={this.changeColor}
        onContextMenu={this.onContextMenu}
        onDoubleClick={this.dblClick}
        onDragEnter={this.dragEnter}
        className="emptyDiv"
      ></div>
    )
  }
}
export default Pixel
