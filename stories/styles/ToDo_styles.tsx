import styled from 'styled-components'
import { theme } from './ThemeProvider'

export const Section = styled.div`
  margin: ${theme.gutters.large} 0;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.gutters.small};
  border: 1px solid ${theme.identityColors.four};

  :nth-child(even) {
    background: ${theme.identityColors.five};
  }
`

export const CompletedTask = styled.div``
