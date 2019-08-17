import React, { useState } from 'react'

import { InputTypeText, Section, Row } from '../../styles/Todo_styles'
import { ButtonOne, ButtonThree } from '../../styles/Buttons_styles'

type ToDoItem = {
  text: string
}

type Props = {
  text?: string
  newValue?: string
  submitButton?: string
  deleteButton?: string
  items?: ToDoItem[]
}

const Todo = ({ submitButton, deleteButton, newValue, items }: Props) => {
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

  const removeTodo = (index: number) => {
    todos.splice(index, 1)
    setTodos([...todos])
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
          <Row key={index}>
            {todo.text}
            <ButtonThree onClick={() => removeTodo(index)}>
              {deleteButton}
            </ButtonThree>
          </Row>
        ))}
      </Section>
    </>
  )
}

Todo.defaultProps = {
  submitButton: 'Add',
  deleteButton: 'DELETE'
}

export { Todo }
