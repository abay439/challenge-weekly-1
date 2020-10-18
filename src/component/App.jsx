import React, { Fragment } from 'react'
import MouseEnterLeaveChalenge from './MouseEnterLeaveChalenge'
import InputTextChalenge from './InputTextChalenge'
import InputPasswordChalenge from './InputPasswordChalenge'
// import ComponentBackgroundColor from './ComponentBackgroundColor'

function App() {
  return (
    <Fragment>
      {/* <ComponentBackgroundColor /> */}
      <MouseEnterLeaveChalenge />
      <InputTextChalenge />
      <InputPasswordChalenge />
    </Fragment>
  )
}

export default App
