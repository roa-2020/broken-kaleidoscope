import React from "react";

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
// const Pixel = props =>{
//     return (
//         <div style={{
//             height: '50px',
//             width: '50px',
//             backgroundColor: 'blue',
//             }}>
//         </div>
//     )
// }

class Pixel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        height: "50px",
        width: "50px",
        backgroundColor: randomHexColor(),
      },
    };
  }
  changeStyle = () => {
      this.setState({
          style: {
              ...this.state.style,
              backgroundColor: randomHexColor(),
          }
      }) 
  }
  render() {
    return (
      <div style={this.state.style} onClick={this.changeStyle}></div>
      //class='this.state.style'
    );
  }
}

export default Pixel;


// onClick={this.changeCount}
    // changeCount = () => {       //babel class-properties
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }