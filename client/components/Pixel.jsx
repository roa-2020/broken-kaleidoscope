import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  class Pixel extends React.Component {
      
  state = {style: {
      height: '20px',
      width: '20px',
      backgroundColor: randomHexColor() 
    }  
   }

   clickHandler = evt => {
    this.setState({style: {
      ...this.state.style,
      backgroundColor: randomHexColor()}}
    )
  }

  mouseHandler = evt => {
    this.setState({style: {
      ...this.state.style,
      backgroundColor: 'green'}}
    )
  }
  
  contextHandler = evt => {
    evt.preventDefault()
    console.log('hi')
    this.setState({style: {
      ...this.state.style,
      backgroundColor: 'black'}}
    )
  }

  doubleClickHandler = evt => {
    this.setState({style: {
      ...this.state.style,
      backgroundColor: 'white'}}
    )
  }
  
  dragEnterHandler = evt => {
    this.setState({style: {
      ...this.state.style,
      backgroundColor: 'yellow'}}
    )
  }
  
  render () {
    return <div onClick= {this.clickHandler} 
    onMouseEnter = {this.mouseHandler}
    onContextMenu = {this.contextHandler}
    onDoubleClick = {this.doubleClickHandler}
    onDragEnter = {this.dragEnterHandler}
    style ={this.state.style}></div>
  }
}


export default Pixel