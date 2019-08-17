import styled from 'styled-components'

export const InputTypeText = styled.input`
  border: none;
  border: 3px solid #3cbc8d;
  color: white;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;

  &:focus {
    outline: none;
    background: #3cbc8d;
    border: 3px solid #555;
  }
`

export const Section = styled.div`
  margin: 20px 0;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #dddddd;

  :nth-child(even) {
    background: #eeeeee;
  }
`
