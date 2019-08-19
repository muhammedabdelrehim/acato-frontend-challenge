import React from 'react'
import { storiesOf } from '@storybook/react'

import { ToDo } from './ToDo'

const toDoItems = require('../../data/toDoItems.json')

const Story = () => {
  return <ToDo items={toDoItems.data} />
}

storiesOf('Components', module).add('To-do submitform', () => <Story />)
