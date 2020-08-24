import React from 'react'
import { shallow } from 'enzyme'

import App from './App'
import Pixel from './Pixel'

describe('<App />', () => {
  test('Renders 100 pixels', () => {
    const wrapper = shallow(<App />)
    let pixels = wrapper.find(Pixel)
    const expected = 100
    const actual = pixels.length
    expect(actual).toEqual(expected)
  })
})