import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import { App } from '../../src/components/App.jsx'

describe('<App />', () => {
  it('status message is hidden while playing', () => {
    const wrapper = shallow(<App gameover={false} playing={true}/>)
    expect(wrapper.find('#status-message')).to.have.style('display', 'none')
  })
  it('correct status message is displayed when game is not over or being played', () => {
    const wrapper = shallow(<App gameover={false} playing={false}/>)
    expect(wrapper.find('#status-message')).to.have.style('display', 'block')
    expect(wrapper.find('#status-message')).to.have.text('New Game Hit space to start')

  })
  it('correct status message is displayed when game is over', () => {
    const wrapper = shallow(<App gameover={true} playing={false}/>)
    expect(wrapper.find('#status-message')).to.have.style('display', 'block')
    expect(wrapper.find('#status-message')).to.have.text('Gameover Hit space to restart')
  })
})
