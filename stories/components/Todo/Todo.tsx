import React from 'react'

import { InputTypeText } from '../../styles/Todo_styles'
import { ButtonOne } from '../../styles/Buttons_styles'

type Props = {
  submitButton?: string
}

const Todo = ({ submitButton }: Props) => {
  return (
    <>
      <form onSubmit="">
        <InputTypeText type="text" value="" onChange="" required />
        <ButtonOne type="submit">{submitButton}</ButtonOne>
      </form>
    </>
  )
}

Todo.defaultProps = {
  submitButton: 'Add'
}

export { Todo }
