// @flow
import React from 'react'
import { shallow, mount } from 'enzyme'
import ElementList, { testUtils as elementListTestUtils } from '../ElementList'
import { testUtils as elementDetailsFormTestUtils } from '../ElementDetailsForm'

const {
  elementSelector,
  addElementSelector,
  editorSelector
} = elementListTestUtils
const { formSelector } = elementDetailsFormTestUtils

test('should render a list of elements', () => {
  const props = createProps()
  const wrapper = shallow(<ElementList {...props} />)
  expect(wrapper.find(elementSelector).length).toBe(6)
})

test('should render an editor when add-element is clicked', () => {
  const props = createProps()
  const wrapper = shallow(<ElementList {...props} />)
  expect(wrapper.find(editorSelector)).not.toExist()
  wrapper.find(addElementSelector).simulate('click')
  expect(wrapper.find(editorSelector)).toExist()
})

test('should render an editor when a custom element is selected', () => {
  const customElement = { id: 0, type: 'CUSTOM', name: 'House', unique: true }
  const props = createProps({ elements: [customElement] })
  const wrapper = shallow(<ElementList {...props} />)
  expect(wrapper.find(editorSelector)).not.toExist()
  wrapper.find(elementSelector).simulate('click')
  expect(wrapper.find(editorSelector)).toExist()
  expect(wrapper.find(editorSelector)).toHaveProp('element', customElement)
})

test('should not render an editor when a non custom element is selected', () => {
  const nonCustomElement = { id: 0, type: 'NONE', name: 'None', unique: false }
  const props = createProps({ elements: [nonCustomElement] })
  const wrapper = shallow(<ElementList {...props} />)
  expect(wrapper.find(editorSelector)).not.toExist()
  wrapper.find(elementSelector).simulate('click')
  expect(wrapper.find(editorSelector)).not.toExist()
})

test('should call props.onSave when an element is saved', () => {
  const element = { id: 0, type: 'CUSTOM', name: 'House', unique: true }
  const props = createProps({ elements: [element] })
  const wrapper = mount(<ElementList {...props} />)
  wrapper.find(elementSelector).simulate('click')
  wrapper.find(formSelector).simulate('submit')
  expect(props.onSave).toHaveBeenCalledWith(element)
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
