// @flow
import React from 'react'
import Content from './styled/Content'
import List from './styled/List'
import ListItemButton from './styled/ListItemButton'
import ElementListItem from './ElementListItem'
import EditElement from './EditElement'
import type { Element, UnsavedElement } from '../types'

type Props = {
  elements: Array<Element>,
  onElementCreate: (element: UnsavedElement) => any,
}

type State = {
  showElementForm: boolean,
}

class ElementList extends React.Component<Props, State> {
  state = {
    showElementForm: false,
  }

  toggleElementForm = () => {
    this.setState({ showElementForm: !this.state.showElementForm })
  }

  render () {
    const { elements, onElementCreate } = this.props
    return (
      <Content>
        <List>
          {elements.map(element =>
            <ElementListItem key={element.id} element={element} />
          )}
        </List>
        <ListItemButton onClick={this.toggleElementForm}>
          + element
        </ListItemButton>
        {this.state.showElementForm && (
          <EditElement
            onCancel={this.toggleElementForm}
            onSave={element => {
              this.toggleElementForm()
              onElementCreate(element)
            }}
          />
        )}
      </Content>
    )
  }
}

export default ElementList
