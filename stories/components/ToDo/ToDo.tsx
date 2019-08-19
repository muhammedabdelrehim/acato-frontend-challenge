import React, { useState } from 'react'
import { TextInput, Button, Icon, toaster, Tooltip } from 'evergreen-ui'

import { Section, Row, CompletedTask } from '../../styles/ToDo_styles'

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

const ToDo = ({
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
  const [toDos, setToDos] = useState(items)

  const handleSubmit = e => {
    e.preventDefault()
    addToDo(value)
    setValue('')
  }

  const addToDo = (text: string) => {
    const newToDos: ToDoItem[] = [...toDos, { text, completed: false }]
    setToDos(newToDos)
    toaster.success(newTaskAdded, {
      duration: 2
    })
  }

  const completedToDo = (index: number) => {
    const newToDos = [...toDos]
    newToDos[index].completed = !newToDos[index].completed
    setToDos(newToDos)
  }

  const removeToDo = (index: number) => {
    const newToDos = [...toDos]
    newToDos.splice(index, 1)
    setToDos(newToDos)
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
        {toDos.map((toDo: Props, index: number) => (
          <Row key={index}>
            <CompletedTask
              style={{ textDecoration: toDo.completed ? 'line-through' : '' }}
            >
              {toDo.text}
            </CompletedTask>

            <Button
              appearance="minimum"
              intent={toDo.completed ? 'warning' : 'success'}
              height={40}
              type="button"
              onClick={() => completedToDo(index)}
            >
              {toDo.completed ? 'Task Completed' : <Icon icon="tick" />}
            </Button>
            <Tooltip content={tooltipDelete}>
              <Button
                appearance="primary"
                intent="danger"
                iconBefore="cross"
                height={40}
                onClick={() => removeToDo(index)}
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

ToDo.defaultProps = {
  submitButton: 'ADD',
  deleteButton: 'DELETE',
  addTask: 'Add a task...',
  newTaskAdded: 'New task added!',
  taskDeleted: 'A task was deleted!',
  tooltipDelete: 'Careful now...',
  completed: false
}

export { ToDo }
