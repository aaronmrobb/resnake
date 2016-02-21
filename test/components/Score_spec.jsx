import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import { Score } from '../../src/components/Score.jsx'

describe('<Score/>', () => {
  it('rendes with correct props', () => {
    const wrapper = shallow(<Score />)

    expect(wrapper).to.be.ok
  })
  it('renders the correct score', () => {
    const wrapper = shallow(<Score score={5} />)
    expect(wrapper).to.have.text('5')
  })
})
