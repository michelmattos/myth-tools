// @flow
import React from 'react'
import Content from './styled/Content'
import List from './styled/List'
import ListItemButton from './styled/ListItemButton'
import ElementListItem from './ElementListItem'
import ElementEditor from './ElementEditor'
import type { Element } from '../types'

export type Props = {
  elements: Array<Element>,
  onSave: (element: Element) => any,
}

type State = {
  showElementForm: boolean,
  selectedElement?: Element,
}

class ElementList extends React.Component<Props, State> {
  state = {
    showElementForm: false,
    selectedElement: undefined
  }

  toggleElementForm = () => {
    this.setState({
      showElementForm: !this.state.showElementForm,
      selectedElement: undefined,
    })
  }

  selectElement = (selectedElement: Element) => {
    if (selectedElement.type !== 'CUSTOM') return
    this.setState({
      selectedElement,
      showElementForm: true,
    })
  }

  render () {
    const { elements, onSave } = this.props
    const { showElementForm, selectedElement } = this.state
    return (
      <Content>
        <List>
          {elements.map(element =>
            <ElementListItem
              key={element.id}
              element={element}
              onClick={() => this.selectElement(element)}
            />
          )}
        </List>
        <ListItemButton data-test='add-element' onClick={this.toggleElementForm}>
          + element
        </ListItemButton>
        {showElementForm && (
          <ElementEditor
            element={selectedElement}
            onCancel={this.toggleElementForm}
            onSave={element => {
              this.toggleElementForm()
              onSave(element)
            }}
          />
        )}
      </Content>
    )
  }
}

export default ElementList
