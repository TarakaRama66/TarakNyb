import React, { StrictMode } from 'react'
import B from './B'

function A() {
    let A=10
    let a={age:10}
    console.log(a)
  return (
    <StrictMode>
      <h1>This is A component</h1>
      <h1>{a.age}</h1>
      <B/>
    </StrictMode>
  )
}

export default A
