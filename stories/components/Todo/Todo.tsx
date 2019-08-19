import React, { useState } from 'react'
import { TextInput, Button, Icon, toaster, Tooltip } from 'evergreen-ui'

import { Section, Row, CompletedTask } from '../../styles/Todo_styles'

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
  addTask?: string
  newTaskAdded?: string
  taskDeleted?: string
  tooltipDelete?: string
}

const Todo = ({
  submitButton,
  deleteButton,
  newValue,
  addTask,
  newTaskAdded,
  taskDeleted,
  tooltipDelete,
  items
}: Props) => {
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
    toaster.success(newTaskAdded, {
      duration: 2
    })
  }

  const completedTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  const removeTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
    toaster.danger(taskDeleted, {
      duration: 2
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextInput
          height={40}
          marginRight={15}
          placeholder={addTask}
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          isInvalid={false}
          required
          validationMessage="This field is required"
        />
        <Button
          type="submit"
          appearance="primary"
          intent="success"
          height={40}
          iconBefore="plus"
        >
          {submitButton}
        </Button>
      </form>

      <Section>
        {todos.map((todo: Props, index: number) => (
          <Row key={index}>
            <CompletedTask
              style={{ textDecoration: todo.completed ? 'line-through' : '' }}
            >
              {todo.text}
            </CompletedTask>

            <Button
              appearance="minimum"
              intent={todo.completed ? 'warning' : 'success'}
              height={40}
              type="button"
              onClick={() => completedTodo(index)}
            >
              {todo.completed ? 'Task Completed' : <Icon icon="tick" />}
            </Button>
            <Tooltip content={tooltipDelete}>
              <Button
                appearance="primary"
                intent="danger"
                iconBefore="cross"
                height={40}
                onClick={() => removeTodo(index)}
              >
                {deleteButton}
              </Button>
            </Tooltip>
          </Row>
        ))}
      </Section>
    </>
  )
}

Todo.defaultProps = {
  submitButton: 'ADD',
  deleteButton: 'DELETE',
  addTask: 'Add a task...',
  newTaskAdded: 'New task added!',
  taskDeleted: 'A task was deleted!',
  tooltipDelete: 'Careful now...',
  completed: false
}

export { Todo }
