// Even though I could have used the evergreen-ui component for this,
// I decided to just created a small Header component for the sake of Atomic design.

import React from 'react'
import {
  HeaderOne,
  HeaderTwo,
  HeaderThree,
  HeaderFour
} from '../../styles/Header_styles'

type Props = {
  children: React.ReactNode
}

const H1Header = ({ children }: Props) => {
  return <HeaderOne>{children}</HeaderOne>
}

const H2Header = ({ children }: Props) => {
  return <HeaderTwo>{children}</HeaderTwo>
}

const H3Header = ({ children }: Props) => {
  return <HeaderThree>{children}</HeaderThree>
}

const H4Header = ({ children }: Props) => {
  return <HeaderFour>{children}</HeaderFour>
}

export { H1Header, H2Header, H3Header, H4Header }
