import React from 'react';
import {Link} from "react-router-dom";

function ErrorFound() {
  return (
    <>
      <div  className="error">
        <h1>Error 404 Not Found </h1>
        <Link className="btn btn-success" to="/">Home Page </Link>
      </div>
    </>
  )
}

export default ErrorFound

