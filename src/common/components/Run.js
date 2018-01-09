// @flow
import * as React from 'react'

type Props = {
  cmd: () => void,
}

class Run extends React.Component<Props> {
  componentDidMount () {
    this.props.cmd()
  }
}
