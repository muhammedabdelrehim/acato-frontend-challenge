import React from 'react'
import { storiesOf } from '@storybook/react'

import { H1Header } from '../Header'
import { Line } from '../../styles/Line_styles'
import { ToDo } from '../ToDo'

const toDoItems = require('../../data/toDoItems.json')

const Story = () => {
  return (
    <>
      <H1Header>To-Do list</H1Header>
      <Line />
      <ToDo items={toDoItems.data} />
    </>
  )
}

storiesOf('To-do List', module).add('To-do list', () => <Story />)
