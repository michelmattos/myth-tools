// @flow
import React from 'react'
import { shallow, mount } from 'enzyme'
import ElementList from '../ElementList'

const addElementSelector = '[data-test="add-element"]'

test('should render a list of elements', () => {
  const props = createProps()
  const wrapper = shallow(<ElementList {...props} />)
  expect(wrapper.find('ElementListItem').length).toBe(6)
})

test('should render an editor when add-element is clicked', () => {
  const props = createProps()
  const wrapper = shallow(<ElementList {...props} />)
  expect(wrapper.find('ElementEditor')).not.toExist()
  wrapper.find(addElementSelector).simulate('click')
  expect(wrapper.find('ElementEditor')).toExist()
})

test('should render an editor when a custom element is selected', () => {
  const customElement = { id: 0, type: 'CUSTOM', name: 'House', unique: true }
  const props = createProps({ elements: [customElement] })
  const wrapper = shallow(<ElementList {...props} />)
  expect(wrapper.find('ElementEditor')).not.toExist()
  wrapper.find('ElementListItem').simulate('click')
  expect(wrapper.find('ElementEditor')).toExist()
  expect(wrapper.find('ElementEditor')).toHaveProp('element', customElement)
})

test('should not render an editor when a non custom element is selected', () => {
  const nonCustomElement = { id: 0, type: 'NONE', name: 'None', unique: false }
  const props = createProps({ elements: [nonCustomElement] })
  const wrapper = shallow(<ElementList {...props} />)
  expect(wrapper.find('ElementEditor')).not.toExist()
  wrapper.find('ElementListItem').simulate('click')
  expect(wrapper.find('ElementEditor')).not.toExist()
})

describe('when an element (type != CUSTOM) is selected', () => {
  let props, wrapper

  beforeEach(() => {
    props = createProps({
      elements: [{ id: 1, type: 'NONE', name: 'None', unique: false }]
    })
    wrapper = shallow(<ElementList {...props} />)
    wrapper.find('ElementListItem').props().onClick()
    wrapper.update()
  })

  test('should not render an editor', () => {
    expect(wrapper.find('ElementEditor').length).toEqual(0)
  })
})

test('should call onSave when an element is saved', () => {
  const props = createProps()
  const wrapper = shallow(<ElementList {...props} />)
  wrapper.find('ElementListItem').at(0).props().onClick()
  wrapper.update()
  wrapper.find('ElementEditor').props().onSave(props.elements[0])
  expect(props.onSave).toHaveBeenCalledWith(props.elements[0])
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
