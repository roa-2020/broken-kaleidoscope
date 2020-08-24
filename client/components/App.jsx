import React from 'react'

import Pixel from './Pixel.jsx'

class App extends React.Component {
  render() {
      return (
      <React.Fragment>
        {Array(420).fill(<Pixel/>)}
      </React.Fragment>
    )
  }
}

export default App
