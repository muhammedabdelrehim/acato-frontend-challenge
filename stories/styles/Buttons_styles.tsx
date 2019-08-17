import styled from 'styled-components'

const Button = styled.button`
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  margin-right: 15px;
  display: flex;
  font-size: 16px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`

export const ButtonOne = styled(Button)`
  background-color: #4caf50;
`

export const ButtonTwo = styled(Button)`
  background-color: orange;
`

export const ButtonThree = styled(Button)`
  background-color: red;
  font-weight: bold;
  padding: 10px;
`
