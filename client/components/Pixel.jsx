import React from 'react'

class Pixel extends React.Component {
  render () {
    return <div style={{
      height: '50px',
      width: '50px',
      backgroundColor: '#ff7700' }}>
      {this.props.name}
    </div>
  }
}

// const Pixel = props => {
//   return (
//     <div style={{
//       height: '50px',
//       width: '50px',
//       backgroundColor: '#ff7700' }}>
//     </div>
//   )
// }

export default Pixel

constructor(props) {
  super(props);
  
}