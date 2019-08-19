import styled from 'styled-components'
import { theme } from './ThemeProvider'

const Button = styled.button`
  border: none;
  border-radius: 3px;
  padding: ${theme.gutters.small} ${theme.gutters.medium};
  font-size: ${theme.fontSizes.paragraph};
  letter-spacing: 2px;
  color: ${theme.fontColor.two};
  box-shadow: 0 -2px rgba(0, 0, 0, 0.1) inset;
  opacity: 0.75;
  font-family: ${theme.fontFamily};
  text-transform: uppercase;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`

export const ButtonOne = styled(Button)`
  background-color: ${theme.identityColors.one};
`

export const ButtonTwo = styled(Button)`
  background-color: ${theme.identityColors.two};
`

export const ButtonThree = styled(Button)`
  background-color: ${theme.identityColors.three};
  font-weight: ${theme.fontWeights.bold};
  padding: ${theme.gutters.small};
`
