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
        width: props.width || "50px",
        height: props.height || "50px",
        color: props.color || randomHexColor(),
      },
    };
  }

  componentDidMount() {
    setInterval(this.changeColor, 10000);
  }

  changeColor = () => {
    this.setState({
      style: { ...this.state.style, color: randomHexColor() },
    });
  };
  clickHandler = (evt) => {
    this.setState({
      style: { ...this.state.style, color: randomHexColor() },
    });
  };

  overHandler = (evt) => {
    this.setState({
      style: { ...this.state.style, color: "#AAFFAA" },
    });
  };

  contextHandler = (evt) => {
    evt.preventDefault();
    this.setState({
      style: { ...this.state.style, color: "black" },
    });
  };

  dblHandler = (evt) => {
    this.setState({
      style: { ...this.state.style, color: "white" },
    });
  };

  dragHandler = (evt) => {
    this.setState({
      style: { ...this.state.style, color: "yellow" },
    });
  };

  render() {
    return (
      <div
        style={{
          width: this.state.style.width,
          height: this.state.style.height,
          backgroundColor: this.state.style.color,
        }}
        onClick={this.clickHandler}
        onMouseOver={this.overHandler}
        onContextMenu={this.contextHandler}
        onDoubleClick={this.dblHandler}
        onDragEnter={this.dragHandler}
      ></div>
    );
  }
}

export default Pixel;
