import React from 'react'

function Bio(props) {
  return (
    <>
    <div>Mission: {props.Mission}</div>
    <img src={props.children}></img>
</>
  )
}

export default Bio
