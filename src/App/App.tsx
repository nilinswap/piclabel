import * as React from "react"
import Root from "../components/Root"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {  useState } from "react"
import { ArtifactType } from "./App.types"
import { ScFlexColumn, ScSideHolder, ScMainHolder } from "./App.styles"




const App = () => {
  const [artifacts] = useState<Array<ArtifactType>>([])

  return (
    <div className="App">
      <ScFlexColumn>
        <ScSideHolder>
          <Header
          />
        </ScSideHolder>
        <ScMainHolder>
          <Root
            artifacts={artifacts}
          />
        </ScMainHolder>
        <ScSideHolder>
          <Footer />
        </ScSideHolder>
      </ScFlexColumn>
    </div>
  )
}
export default App
