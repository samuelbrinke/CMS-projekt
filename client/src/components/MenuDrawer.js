import React, { useState, useEffect } from 'react'
import axios from 'axios';

import MenuLink from './MenuLink';

function MenuDrawer() {

  const [menuLink, setMenuLink] = useState([])

  useEffect(() => {
    async function fetchData() {
      const getMenuId = await axios.get(`wp-projekt/wp-json/wp-api-menus/v2/menus/`)
      const done = await getMenuId.data[1].ID;
      axios.get(`wp-projekt/wp-json/wp-api-menus/v2/menus/${done}`)
      .then(res => {
        setMenuLink(res.data.items)
      })
      console.log(getMenuId)
    }
  
    fetchData()
  }, [] )
  

  return (
    <div>

      <div className="offcanvas offcanvas-end" style={{'backgroundColor': '#191231'}} tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {menuLink.map(menuLink => {
            return <MenuLink key={menuLink.id} menuLink={menuLink} />
          })}
        </div>
      </div>
    </div>
  )
}

export default MenuDrawer
