import React from 'react'

import Asma12 from './Compent/Asma12'
import img from'./logo.svg';

function App() {
  const Show=(a)=>{
    alert(a)
  }
  return (
    <div>
   <Asma12 FullName="Asma" Bio="Software Engenieur" Profession="Ing" fct={Show}>{img}</Asma12>
   
    </div>
  )
}

export default App
