// import React, { Component } from 'react';
function Card({children, reverse}) {
  return (
    <div className="container">
        <div className={`card ${reverse && "reverse"}`}>{children}</div>
    </div>
   
  )
}

export default Card