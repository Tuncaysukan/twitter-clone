import React from 'react'
import Container from './Layouts/Container'
import Content from './Layouts/Content'
import Sidebar from './Layouts/Sidebar'
import Widget from './Layouts/Widget'

function App() {
  return (
    <Container>
      <Sidebar/>
      <Content/>
      
    <Widget/>

    </Container>
  )
}

export default App
