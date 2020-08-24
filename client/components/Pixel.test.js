import React from 'react'
import { shallow } from 'enzyme'

import Pixel from './Pixel'

describe("<Pixel />", () => {
  it("changes color on click", () => {
    let wrapper = shallow(<Pixel />)
    let div = wrapper.find('div')
    let oldColor = div.prop('style').backgroundColor
    div.simulate('click')
    div = wrapper.find('div')
    expect(div.prop('style').backgroundColor).not.toEqual(oldColor)
  })
})