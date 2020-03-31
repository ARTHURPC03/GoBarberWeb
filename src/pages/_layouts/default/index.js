import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './styles'

export default function DefaulrLayout({ children }) {
  return <Wrapper>{children}</Wrapper>
}

DefaulrLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
