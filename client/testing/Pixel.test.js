import React from 'react'
import Pixel from './../components/Pixel'
import { screen, render, fireEvent } from '@testing-library/react'

// const style = { height: '20px', width: '20px', backgroundColor: 'red' } 

test('pixels are rendered', () => {
  render(<Pixel />)
})

describe('Mouse events change styles', () => {
  // beforeEach(() => {
  //   render(<Pixel />)
  //   let pixel = screen.getByTestId('pixel')
  // })

  test(`clicking a tile changes it's color`, () => {
    render(<Pixel />)
    let pixel = screen.getByTestId('pixel')
    expect(pixel.style.backgroundColor).not.toBe('red')
    fireEvent.click(pixel)
    expect(pixel.style.backgroundColor).not.toBe('green')
  })
  
  test(`double clicking a tile changes it's color to be white`, () => {
    render(<Pixel />)
    let pixel = screen.getByTestId('pixel')
    fireEvent.doubleClick(pixel)
    expect(pixel.style.backgroundColor).toBe('white')
  })

})