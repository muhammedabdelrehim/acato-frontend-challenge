import styled from 'styled-components'
import { theme } from './ThemeProvider'

export const Line = styled.hr`
  border-top: 1px solid ${theme.identityColors.four};
  margin-bottom: ${theme.gutters.medium};
`
