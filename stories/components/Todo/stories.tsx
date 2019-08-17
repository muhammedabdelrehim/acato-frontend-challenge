import React from 'react'
import { storiesOf } from '@storybook/react'

import { Todo } from '../Todo'

const Story = () => {
  return <Todo />
}

storiesOf('Components', module).add('Todo submitform', () => <Story />)
