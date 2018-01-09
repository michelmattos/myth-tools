// @flow
import * as React from 'react'

type Props = {
  cmd: () => any,
}

class Run extends React.Component<Props> {
  componentDidMount () {
    this.props.cmd()
  }

  render () {
    return null
  }
}

export default Run
