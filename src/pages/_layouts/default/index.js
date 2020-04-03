import React from 'react'
import PropTypes from 'prop-types'

import Header from '~/components/Header'

import { Wrapper } from './styles'

export default function DefaulrLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  )
}

DefaulrLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
