import React from 'react'
import Menu from './components/Menu/Menu'
import Work from './components/Work/Work'
import Packages from './components/Packages/Packages'
import Contact from './components/Contact/contact'
import YourComponent from './components/Card/card'

const App = () => {
  return (
    <div>
      <Menu />
      <Work />
      <Packages/>
      {/* <YourComponent/> */}
      <Contact/>
    </div>
  )
}

export default App