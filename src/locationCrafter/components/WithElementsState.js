// @flow
import * as React from 'react'
import capitalize from 'lodash-es/capitalize'
import upperFirst from 'lodash-es/upperFirst'
import type {Element} from '../types'

class WithElementsState extends React.Component<Props, State> {
  state = {
    locations: [],
    encounters: [],
    objects: [],
  }

  saveElementIn = (category: $Keys<State>) => (element: Element) => {
    const elements = this.state[category]
    this.setState({
      [category]: element.id !== undefined
        ? elements.map(updateElement(element))
        : elements.concat(createElement(element, elements.length))
    })
  }

  render () {
    return this.props.children({
      ...this.state,
      saveElementIn: this.saveElementIn,
    })
  }
}

function updateElement (updatedElement: Element) {
  return (element: Element) =>
    updatedElement.id === element.id ? updatedElement : element
}

function createElement (newElement: Element, id: number) {
  return {
    ...newElement,
    id,
    name: newElement.type === 'CUSTOM'
      ? upperFirst(newElement.name)
      : capitalize(newElement.type)
  }
}

type Props = {
  children: (props: RenderProps) => React.Node,
}

type RenderProps = State & {
  saveElementIn: $PropertyType<WithElementsState, 'saveElementIn'>,
}

type State = {
  locations: Array<Element>,
  encounters: Array<Element>,
  objects: Array<Element>,
}

export default WithElementsState