import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import { Grid } from '../../src/components/Grid.jsx'

describe('<Grid/>', () => {
  it('renders with correct props', () => {
    const wrapper = shallow(<Grid grid={new Array(900).fill('')} snake={[0, 1]} food={1}/>)

    expect(wrapper).to.be.ok
  })
  it('renders the correct amount of snake cells', () => {
    const wrapper = mount(<Grid grid={new Array(900).fill('')} snake={[0, 1]} food={1}/>)
    expect(wrapper.find('.snake').length).to.equal(2)
  })
  it('renders 900 cells', () => {
    const wrapper = shallow(<Grid grid={new Array(900).fill('')} snake={[0, 1]} food={1}/>)
    expect(wrapper.find('Cell').length).to.equal(900)
  })
  it('is opaque when game is being player', () => {
    const wrapper = shallow(<Grid grid={new Array(900).fill('')} snake={[0, 1]} food={1} gameover={false}/>)
    expect(wrapper).to.have.style('opacity', '1')
  })
  it('fades when game is over', () => {
    const wrapper = shallow(<Grid grid={new Array(900).fill('')} snake={[0, 1]} food={1} gameover={true}/>)
    expect(wrapper).to.have.style('opacity', '0.5')
  })
})
