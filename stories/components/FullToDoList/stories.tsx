import React from 'react'
import { storiesOf } from '@storybook/react'

import { H1Header } from '../Header'
import { Line } from '../../styles/Line_styles'
import { Todo } from '../Todo'

const todoItems = require('../../data/todoItems.json')

const Story = () => {
  return (
    <>
      <H1Header>Todo list</H1Header>
      <Line />
      <Todo items={todoItems.data} />
    </>
  )
}

storiesOf('Todo List', module).add('Todo list', () => <Story />)
