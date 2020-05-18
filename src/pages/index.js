import React from "react"
import Layout from "../components/layout"

//components
import HomeBanner from "../components/homePage/HomeBanner"

//context
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/GlobalContext'

const IndexPage = props => {
  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
  }

  return (
    <Layout>
      <HomeBanner />
    </Layout>
  )
}

export default IndexPage
