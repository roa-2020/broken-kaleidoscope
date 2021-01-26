import React from 'react'
import Pixel from './../components/Pixel'
import { screen, render, fireEvent } from '@testing-library/react'

// const style = { height: '20px', width: '20px', backgroundColor: 'red' } 
const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

describe('Mouse events change styles', () => {
  // beforeEach(() => {
  //   render(<Pixel />)
  //   let pixel = screen.getByTestId('pixel')
  // })

  test(`clicking a tile changes it's color`, () => {
    render(<Pixel />)
    let pixel = screen.getByTestId('pixel')
    const expected = randomHexColor()
    fireEvent.click(pixel)
    expect(pixel.style.backgroundColor).not.toBe(expected)
  })
  
  test(`double clicking a tile changes it's color to be white`, () => {
    render(<Pixel />)
    let pixel = screen.getByTestId('pixel')
    fireEvent.doubleClick(pixel)
    expect(pixel.style.backgroundColor).toBe('white')
  })

})