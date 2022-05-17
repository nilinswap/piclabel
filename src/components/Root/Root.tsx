import * as React from "react"

import Game from "../Game"
import { Route } from "react-router-dom"
import { ScParent } from "./Root.styles"
import { RootProps } from "./Root.types"

const Root: React.FC<RootProps> = ({}) => {
  return (
    <ScParent data-testid="Root" className="root">
      <div>
        <Route
          exact
          path="/game"
          component={() => <Game />}
        />
        Hello World
      </div>
    </ScParent>
  )
}

export default Root
