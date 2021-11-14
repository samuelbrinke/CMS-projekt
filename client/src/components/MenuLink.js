import React from 'react'

function MenuLink({menuLink}) {
  const link = menuLink
  return (
    <a href={link.url} className="mb-3" style={{'display': 'block'}}>{link.title}</a>
  )
}

export default MenuLink
