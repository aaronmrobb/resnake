import React from 'react'

import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())

import { mount, render, shallow } from 'enzyme'
import { App } from '../../src/components/App.jsx'
