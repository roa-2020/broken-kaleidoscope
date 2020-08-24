import React from 'react'

class Pixel extends React.Component {
      
  state = {style: {
      height: '50px',
      width: '50px',
      backgroundColor: "cornflowerblue"  
    }  
   }
  
  render () {
    return <div style ={this.state.style}></div>
  }
}

export default Pixel