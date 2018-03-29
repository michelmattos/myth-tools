// @flow
import React from 'react'
import { shallow } from 'enzyme'
import ElementList from '../ElementList'

const addElementSelector = '[data-test="add-element"]'

test('should render a list of elements', () => {
  const props = createProps()

  const wrapper = shallow(<ElementList {...props} />)

  expect(wrapper.find('ElementListItem').length).toEqual(props.elements.length)
})

test('should not render an editor', () => {
  const props = createProps()

  const wrapper = shallow(<ElementList {...props} />)

  expect(wrapper.find('ElementEditor').length).toEqual(0)
})

test('should render an editor when add-element is clicked', () => {
  const props = createProps()
  const wrapper = shallow(<ElementList {...props} />)

  wrapper.find(addElementSelector).simulate('click')

  expect(wrapper.find('ElementEditor').length).toEqual(1)
})

function createProps (overrides = {}) {
  return {
    elements: [
      { id: 0, type: 'CUSTOM', name: 'House', unique: true },
      { id: 1, type: 'NONE', name: 'None', unique: false },
      { id: 2, type: 'EXPECTED', name: 'Expected', unique: false },
      { id: 3, type: 'SPECIAL', name: 'Special', unique: false },
      { id: 4, type: 'RANDOM', name: 'Random', unique: false },
      { id: 5, type: 'COMPLETE', name: 'Complete', unique: false },
    ],
    onSave: jest.fn(),
    ...overrides,
  }
}
