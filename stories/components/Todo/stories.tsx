import React from 'react'
import { storiesOf } from '@storybook/react'

import { Todo } from '../Todo'

const todoItems = require('../../data/todoItems.json')

const Story = () => {
  return <Todo items={todoItems.data} />
}

storiesOf('Components', module).add('Todo submitform', () => <Story />)
