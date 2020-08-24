import React from 'react'

const randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`



class Pixel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: randomHexColor()
            }
        }


    }
    clickHandler = evt => {
        this.setState({
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: randomHexColor()

            }
        })
    }

    turnGreen = evt => {
        this.setState({
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: 'green'
            }
        })
    }

    turnBlack = evt => {
        evt.preventDefault()
        this.setState({
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: 'black'
            }
        })
    }

    turnWhite = evt => {
        this.setState({
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: 'white'
            }
        })
    }

    turnYellow = evt => {
        this.setState({
            style: {
                height: '50px',
                width: '50px',
                backgroundColor: 'yellow'
            }
        })
    }

    render() {
        return (
            <div style={this.state.style} 
                onClick={this.clickHandler} 
                onMouseEnter={this.turnGreen} 
                onContextMenu={this.turnBlack}
                onDoubleClick={this.turnWhite}
                onDragEnter={this.turnYellow}>

            </div>
        )
    }
}



// const Pixel = () => {
//     return (
//         <div style={{
//             height: '50px',
//             width: '50px',
//             backgroundColor: 'cornflowerblue'}}>

//         </div>
//     )
// }

export default Pixel
