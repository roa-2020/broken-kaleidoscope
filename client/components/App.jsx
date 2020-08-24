import React from 'react'

import Pixel from './Pixel.jsx'

class App extends React.Component {
  render() {
    const pixels = []

    for (let i = 0; i < 420; i++) {
      pixels.push(<Pixel />)
    }

    return (
      <React.Fragment>
        {pixels}
      </React.Fragment>
    )
  }
}

export default App
