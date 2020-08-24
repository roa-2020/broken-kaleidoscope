import React from 'react'

const randomHexColor = () =>
`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {     // Define as a class component rather than functional component. Allows us to call class

  constructor(props) {                    // Define a constructor, initialises the constructor to create props for this component
    super(props);                         // Calls the constructor of the parent class which is React.Component and applies it to props
      this.state = {                      // this state is an object we can call later on to set our state
                style: {                  // style is an object within this state we can call
                height: '50px',
                width: '50px',
                backgroundColor: randomHexColor(), // calls the randomHexColor function, we call a function normally by having the parenthesis () afte the function name
                }
      }
    }

  render() {
    return (
        <div style={this.state.style}></div> // We have defined the div style as the state we have defined earlier
    )
  }

}



export default Pixel