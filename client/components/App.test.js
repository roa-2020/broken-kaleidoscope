import React from 'react'
import {shallow} from 'enzyme'

import App from './App'
import Pixel from './Pixel'

describe('<App />', () => {
  test("renders 1000 pixels", () => {
    const wrapper = shallow(<App />)
    let pixels = wrapper.find(Pixel)
    expect(pixels.length).toBe(1000)
  })
})
