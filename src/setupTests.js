/* eslint-disable */

import '@testing-library/jest-dom'
import {configure} from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    }
  }

configure({adapter: new Adapter()})

configure({testIdAttribute: 'testid'})