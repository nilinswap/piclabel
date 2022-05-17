import * as React from "react"
import { HeaderProps } from "./Header.types"
import {
  ScParent,
  ScHeading,
  ScTopRightOptions,
  ScWhiteLink,
} from "./header.styles"

const Header: React.FC<HeaderProps> = ({
}) => {
  return (
    <ScParent>
      <ScHeading>
        <ScWhiteLink to="/">react boilerplate</ScWhiteLink>
      </ScHeading>
      <ScTopRightOptions>
          Header
      </ScTopRightOptions>
    </ScParent>
  )
}

export default Header
