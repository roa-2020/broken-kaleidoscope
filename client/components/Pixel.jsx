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
        width: "10px",
        height: "10px",
        backgroundColor: randomHexColor(),
      },
    };
  }

  changeColor = () => {
    this.setState({
      style: { ...this.state.style, backgroundColor: randomHexColor() },
    });
  };

  onContextMenu = (evt) => {
    console.log(evt.buttons);
    evt.preventDefault();
    this.setState({
      style: { ...this.state.style, backgroundColor: "black" },
    });
  };

  onDoubleClick = (evt) => {
    evt.preventDefault();
    this.setState({
      style: { ...this.state.style, backgroundColor: "White" },
    });
  };

  onDragEnter = () => {
    // evt.preventDefault();
    this.setState({
      style: { ...this.state.style, backgroundColor: "yellow" },
    });
  };

  render() {
    return (
      <div
        onClick={this.changeColor}
        onMouseEnter={this.changeColor}
        onContextMenu={this.onContextMenu}
        onDoubleClick={this.onDoubleClick}
        onDragEnter={this.onDragEnter}
        style={this.state.style}
      ></div>
    );
  }
}
export default Pixel;
