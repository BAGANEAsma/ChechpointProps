import React from 'react'

function Asma12({FullName,Bio,Profession,children,fct}) {
  return (
    <div>
      Hello {FullName} {Bio} {Profession}
      <img src={children}></img>
      <button onClick={()=>fct(FullName)}>Click Me</button>
    </div>
  )
}

export default Asma12
