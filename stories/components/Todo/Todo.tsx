import React, { useState } from 'react'

import {
  InputTypeText,
  Section,
  Row,
  CompletedTask
} from '../../styles/Todo_styles'
import { ButtonOne, ButtonTwo, ButtonThree } from '../../styles/Buttons_styles'

type ToDoItem = {
  text: string
  completed: boolean
}

type Props = {
  text?: string
  newValue?: string
  submitButton?: string
  deleteButton?: string
  items?: ToDoItem[]
  completed: boolean
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
    const newTodos: ToDoItem[] = [...todos, { text, completed: false }]
    setTodos(newTodos)
  }

  const completedTodo = (index: number) => {
    todos[index].completed = !todos[index].completed
    setTodos([...todos])
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
            <CompletedTask
              style={{ textDecoration: todo.completed ? 'line-through' : '' }}
            >
              {todo.text}
            </CompletedTask>

            {todo.completed ? (
              <ButtonOne type="button" onClick={() => completedTodo(index)}>
                V
              </ButtonOne>
            ) : (
              <ButtonTwo type="button" onClick={() => completedTodo(index)}>
                Task Completed
              </ButtonTwo>
            )}
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
