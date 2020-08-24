import React from 'react'

import Pixel from './Pixel.jsx'

import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* {Array(100).fill(<Pixel key={uuidv4()}/>)} */}
        {Array(100).fill(0).map(p => <Pixel key={uuidv4()} />)}
      </React.Fragment>
    )
  }
}

export default App
