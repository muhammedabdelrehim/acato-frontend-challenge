import React from 'react'
import { storiesOf } from '@storybook/react'

import { H1Header, H2Header, H3Header, H4Header } from '../Header'

const Story = () => {
  return (
    <>
      <H1Header>Header One</H1Header>
      <H2Header>Header Two</H2Header>
      <H3Header>Header Three</H3Header>
      <H4Header>Header Four</H4Header>
    </>
  )
}

storiesOf('Components', module).add('Header', () => <Story />)
