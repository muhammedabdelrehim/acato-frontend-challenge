import React from 'react'
import { ButtonOne, ButtonTwo, ButtonThree } from '../../styles/Buttons_styles'

type Props = {
  children: React.ReactNode
}

const Button1 = ({ children }: Props) => {
  return <ButtonOne>{children}</ButtonOne>
}

const Button2 = ({ children }: Props) => {
  return <ButtonTwo>{children}</ButtonTwo>
}

const Button3 = ({ children }: Props) => {
  return <ButtonThree>{children}</ButtonThree>
}

export { Button1, Button2, Button3 }
