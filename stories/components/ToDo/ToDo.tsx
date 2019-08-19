import React, { useState } from 'react'

// Evergreen added for simple styling.
import { TextInput, Button, Icon, toaster, Tooltip } from 'evergreen-ui'

// This is a possible addition to the to-do list. This does not work, but for the sake of cool idea's, this is added...
import SpeechRecognition from 'react-speech-recognition'

import { Section, Row, ElementWrap, ButtonWrap } from '../../styles/ToDo_styles'

// The To do items which are mapped, are added to a type, which are then introduced into type Props under the prop items? : ToDoItems[] to collect the props.
type ToDoItem = {
  text: string
  completed: boolean
}

// All Props.
type Props = {
  text?: string
  newValue?: string
  submitButton?: string
  deleteButton?: string
  items?: ToDoItem[] // the combined collection of ToDoItems.
  completed: boolean
  addTask?: string
  newTaskAdded?: string
  taskDeleted?: string
  tooltipDelete?: string
  browserSupportsSpeechRecognition?: boolean // SpeachRecognition prop
}

const ToDo = ({
  submitButton,
  deleteButton,
  newValue,
  addTask,
  newTaskAdded,
  taskDeleted,
  tooltipDelete,
  items,
  browserSupportsSpeechRecognition // for more documentation on how this works: https://www.npmjs.com/package/react-speech-recognition
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
    // This whole assignment was going pretty well... until I got to this part. I just have lost about 4 hours of my life at this little basic function. My code was as follow:
    // toDos[index].completed = !toDos[index].completed
    // setToDos(toDos)

    // What I had overlooked was the fact that toDos needed to be a copy of the version before, hence why I changed the above code to what you see now, which solved the problem like a charm.
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
            <ElementWrap
              style={{ textDecoration: toDo.completed ? 'line-through' : '' }}
            >
              {toDo.text}
            </ElementWrap>
            <ButtonWrap>
              <Button
                appearance="minimum"
                intent={toDo.completed ? 'warning' : 'success'}
                height={40}
                type="button"
                onClick={() => completedToDo(index)}
              >
                {toDo.completed ? 'Task Completed' : <Icon icon="tick" />}
              </Button>
            </ButtonWrap>
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

// These are the default Props as a fallback if no props are added to the Story.
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
