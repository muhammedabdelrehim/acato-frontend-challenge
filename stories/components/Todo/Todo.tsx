import React, { useState } from 'react'

import { InputTypeText, Section, Row } from '../../styles/Todo_styles'
import { ButtonOne } from '../../styles/Buttons_styles'

type ToDoItem = {
  text: string
}

type Props = {
  text?: string
  newValue?: string
  submitButton?: string
  items?: ToDoItem[]
}

const Todo = ({ submitButton, newValue, items }: Props) => {
  const [value, setValue] = useState(newValue)
  const [todos, setTodos] = useState(items)

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text: string) => {
    const newTodos: ToDoItem[] = [...todos, { text }]
    setTodos(newTodos)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputTypeText
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <ButtonOne type="submit">{submitButton}</ButtonOne>
      </form>

      <Section>
        {todos.map((todo: Props, index: number) => (
          <Row key={index}>{todo.text}</Row>
        ))}
      </Section>
    </>
  )
}

Todo.defaultProps = {
  submitButton: 'Add'
}

export { Todo }
