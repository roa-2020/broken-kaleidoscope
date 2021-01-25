import React, { useState } from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

const Pixel = () => {
  
  const [style, setStyle] = useState({ height: '20px', 
                                      width: '20px', 
                                      backgroundColor: randomHexColor() 
                                    })

   const clickHandler = evt => {
      setStyle( {
      ...style,
      backgroundColor: randomHexColor()
    })
  }

  const mouseHandler = evt => {
    setStyle({
      ...style,
      backgroundColor: 'green'}
    )
  }
  
  const contextHandler = evt => {
    evt.preventDefault()
    setStyle( {
      ...style,
      backgroundColor: 'black'}
    )
  }

  const doubleClickHandler = evt => {
    setStyle({ 
      ...style,
      backgroundColor: 'white'}
    )
  }
  
  const dragEnterHandler = evt => {
    setStyle( {
      ...style,
      backgroundColor: 'yellow'}
    )
  }
  
  return <div onClick= {clickHandler} 
    onMouseEnter = {mouseHandler}
    onContextMenu = {contextHandler}
    onDoubleClick = {doubleClickHandler}
    onDragEnter = {dragEnterHandler}
    style ={style}></div>
}

export default Pixel