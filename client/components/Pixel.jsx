import React from 'react'

const randomHexColor = () =>
`#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {     // Define as a class component rather than functional component. Allows us to call class

    componentDidMount(){                  // React specific - functions called within componentDidMount will run upon the page mounting / starting. Mount is part of the life cycle of React
        setInterval(() => {               // Use this to set a time interval

          this.setState({                 // We are setting the state every time the interval time is run/reached

            style: {                         
              height: '50px',
              width: '50px',
              backgroundColor: randomHexColor(), 
            }
          })

          }, 3000)                        //2000 = 2 seconds
    }

    constructor(props) {                    // Define a constructor, initialises the constructor to create props for this component
    super(props);                         // Calls the constructor of the parent class which is React.Component and applies it to props
      this.state = {                      // this state is an object we can call later on to set our state
          style: {                         // style is an object within this state we can call
                  height: '50px',
                  width: '50px',
                  backgroundColor: randomHexColor(), // calls the randomHexColor function, we call a function normally by having the parenthesis () afte the function name
                  }
      }
    }
  
    clickHandler = evt => {       
      this.setState({

        style: {                         
          height: '50px',
          width: '50px',
          backgroundColor: randomHexColor(), 
        }
      })
    }

    greenMouseover = evt => {
      this.setState({

        style: {                         
          height: '50px',
          width: '50px',
          backgroundColor: 'green', 
        }

      })

    }

    blackRightclick = evt => {

      evt.preventDefault(); //prevents the default function of right click, ie bringing up the context menu

      this.setState({

        style: {
          height: '50px',
          width: '50px',
          backgroundColor: 'black',
        }
      })
    }

    whiteDoubleclick = evt => {

      this.setState({

        style: {
          height: '50px',
          width: '50px',
          backgroundColor: 'white',
        }
      })
    }

    yellowClickdrag = evt => {

      this.setState({

        style: {
          height: '50px',
          width: '50px',
          backgroundColor: 'yellow',
        }
      })
    }
  
    render() {
      return (
          <div 
            style={this.state.style} // We have defined the div style as the state we have set in our constructor earlier
            onClick={this.clickHandler}  // all subsequent actions will be included in this opening div tag
            onMouseEnter={this.greenMouseover}
            onContextMenu={this.blackRightclick}
            onDoubleClick={this.whiteDoubleclick}
            onDragEnter={this.yellowClickdrag}
          >
          </div> 
          )
    }

}



export default Pixel