import React from 'react'
import Pixel from './Pixel'

function App () {
  // Original
  // let arr = []
  //   for ( let i = 0; i < 10000; i++) {
  //     arr.push(<Pixel key={i}/>)
  //   }
  // return (
  //     arr
  // )
  
  // improved
  return Array.from( {length: 1000 }, (item, i) => <Pixel key={i} />)
}

export default App
