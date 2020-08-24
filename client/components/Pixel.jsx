import React from 'react'

const randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

//array.from() create a new array isntance from a given array
//array.from(object, mapFunction, thisValue)
//object = holds the object that will convert into an array
//mapFunction = optional, used to call on each item of the array
//thisValue = optional, holds the context to be used while executing mapFunction

const length = 50
const init = <Pixel />
const result = Array.from({ length }, () => init)
console.log(result)



class Pixel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: {
                height: '5px',
                width: '5px',
                backgroundColor: randomHexColor()
            }
        }
    }

    // state = {
    //     style: {
    //         height: '50px',
    //         width: '50px',
    //         backgroundColor: randomHexColor()
    //     }
    // }

    clickHandler = evt => {
        this.setState({
            style: {
                height: '5px',
                width: '5px',
                backgroundColor: randomHexColor()

            }
        })
    }

    turnGreen = evt => {
        this.setState({
            style: {
                height: '5px',
                width: '5px',
                backgroundColor: 'green'
            }
        })
    }

    turnBlack = evt => {
        evt.preventDefault()
        this.setState({
            style: {
                height: '5px',
                width: '5px',
                backgroundColor: 'black'
            }
        })
    }

    turnWhite = evt => {
        this.setState({
            style: {
                height: '5px',
                width: '5px',
                backgroundColor: 'white'
            }
        })
    }

    turnYellow = evt => {
        this.setState({
            style: {
                height: '5px',
                width: '5px',
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
