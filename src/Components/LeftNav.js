import React from 'react'

const LeftNav = ({ leftNav, toggleLeftNav }) => {

  return (
    <div className={leftNav ? 'left-nav is-visible' : 'left-nav'}>
      <img onClick={toggleLeftNav} src="images/icon-close.svg" alt="" />
      <a href="!#">Collections</a>
      <a href="!#">Men</a>
      <a href="!#">Women</a>
      <a href="!#">About</a>
      <a href="!#">Contact</a>
    </div>
  )
}

export default LeftNav