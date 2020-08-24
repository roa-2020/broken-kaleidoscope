import React from "react";

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, 0)}`;

class Pixel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {
        height: "3px",
        width: "3px",
        backgroundColor: randomHexColor(),
      },
    };
  }

  render() {
    return <div style={this.state.style} onDragEnter={this.onDragEnter} onDoubleClick={this.onDoubleClick} onMouseEnter={this.onMouseEnter} onClick={this.clickHandler} onContextMenu={this.onContextMenu}></div>;
  }
  clickHandler = (evt) => {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: randomHexColor(),
      },
    });
  };
  onMouseEnter = evt => {
    this.setState({
      style:{
        ...this.state.style,
        backgroundColor: 'green',
      }
    })
  }
  onContextMenu = (evt) => {
    evt.preventDefault()
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: 'black',
      },
    });
  };
  onDoubleClick = (evt) => {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: 'white',
      },
    });
  };
  onDragEnter = (evt) => {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: 'yellow',
      },
    });
  };



}

export default Pixel;
