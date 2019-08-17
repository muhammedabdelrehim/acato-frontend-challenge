import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button1, Button2, Button3 } from '../Buttons'

const Story = () => {
  return (
    <>
      <Button1>Button One</Button1>
      <Button2>Button Two</Button2>
      <Button3>Button Three</Button3>
    </>
  )
}

storiesOf('Components', module).add('Buttons', () => <Story />)
