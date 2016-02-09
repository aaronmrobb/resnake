import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import Cell from '../../src/components/Cell.jsx'

describe('<Cell/>', () => {
  it('renders without any props', () => {
    const wrapper = shallow(<Cell />)
    expect(wrapper).to.be.ok
  })
  it('has class of empty when occupant is empty', () => {
    const wrapper = shallow(<Cell occupant='empty'/>)
    expect(wrapper).to.have.className('empty')
  })
  it('has class of food when occupant is food', () => {
    const wrapper = shallow(<Cell occupant='food'/>)
    expect(wrapper).to.have.className('food')
  })
  it('has class of snake when occupant is snake', () => {
    const wrapper = shallow(<Cell occupant='snake'/>)
    expect(wrapper).to.have.className('snake')
  })
})
