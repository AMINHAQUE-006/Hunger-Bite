import React from 'react'
import { useRouteError } from "react-router-dom"
 
function Error() {
    const error = useRouteError();
    console.log(error)
  return (
    <>
        <h1>Oops! something went wrong</h1>
        <h2>{error.status} {error.statusText}</h2>
        <h3>{error.data}</h3>
    </>
  )
}

export default Error