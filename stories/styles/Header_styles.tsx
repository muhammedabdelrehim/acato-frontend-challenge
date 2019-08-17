import styled from 'styled-components'
import { theme } from './ThemeProvider'
import { tabletUp } from './Breakpoints'

export const HeaderOne = styled.h1`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSizes.headerMobile.headerOne};
  color: ${theme.fontColor.one};
  ${tabletUp} {
    font-size: ${theme.fontSizes.headerOne};
  }
`

export const HeaderTwo = styled.h2`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSizes.headerMobile.headerTwo};
  color: ${theme.fontColor.one};
  ${tabletUp} {
    font-size: ${theme.fontSizes.headerTwo};
  }
`

export const HeaderThree = styled.h3`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSizes.headerMobile.headerThree};
  color: ${theme.fontColor.three};
  ${tabletUp} {
    font-size: ${theme.fontSizes.headerThree};
  }
`

export const HeaderFour = styled.h4`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSizes.headerMobile.headerFour};
  color: ${theme.fontColor.four};
  ${tabletUp} {
    font-size: ${theme.fontSizes.headerFour};
  }
`