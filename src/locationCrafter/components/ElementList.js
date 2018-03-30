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

  closeEditor = () => {
    this.setState({
      showElementForm: false,
      selectedElement: undefined,
    })
  }

  openEditor = (element?: Element) => {
    if (element && element.type !== 'CUSTOM') return
    this.setState({
      showElementForm: true,
      selectedElement: element,
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
              data-test='element'
              element={element}
              onClick={() => this.openEditor(element)}
            />
          )}
        </List>
        <ListItemButton data-test='add-element' onClick={this.openEditor}>
          + element
        </ListItemButton>
        {showElementForm && (
          <ElementEditor
            data-test='editor'
            element={selectedElement}
            onCancel={this.closeEditor}
            onSave={element => {
              this.closeEditor()
              onSave(element)
            }}
          />
        )}
      </Content>
    )
  }
}

export const testUtils = {
  elementSelector: '[data-test="element"]',
  addElementSelector: '[data-test="add-element"]',
  editorSelector: '[data-test="editor"]',
}

export default ElementList
