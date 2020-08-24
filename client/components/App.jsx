import React from 'react'
import Pixel from './Pixel'

class App extends React.Component {
  render() {
    return (
      <div id="app">
        {Array(350).fill(<Pixel/>)}
      </div>
    );
  }
}

export default App
