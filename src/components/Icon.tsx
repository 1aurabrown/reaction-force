import React, { Component, Props, HTMLAttributes } from 'react'

import icons, { IconName } from '../assets/icons'
import styled from 'styled-components'
import colors from '../assets/colors'

export type FontName = string

interface IconProps extends Props<Icon>, HTMLAttributes<Icon> {
  font?: FontName
  name: IconName
  color?: string
}

class Icon extends Component<IconProps, null> {
  render() {
    return (
      <div className={this.props.className}>{icons[this.props.name]}</div>
    )
  }
}

export default styled(Icon)`
  font: ${props => props.font || 'artsy-icons'};
  color: ${props => props.color || 'purple'}
`;

<Icon name={"close"} color={colors.gray} />