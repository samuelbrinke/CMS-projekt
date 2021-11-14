import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Home() {

  const [homeLink, setHomeLink] = useState([])

  useEffect(() => {
    async function fetchData() {
      const getMenuId = await axios.get(`wp-projekt/wp-json/wp-api-menus/v2/menus/`)
      const done = await getMenuId.data[0].ID;
      axios.get(`wp-projekt/wp-json/wp-api-menus/v2/menus/${done}`)
      .then(res => {
        console.log(res.data.items)
        setHomeLink(res.data.items)
      })
    }
  
    fetchData()
  }, [] )


  return (
    <div style={{'position': 'relative'}}>

      <div className="lines-bg">
        <img src="img/lines.gif" alt="" />
        <div className="bg-layer"></div>
      </div>
      <div className="links">
        <div className="content">
          {homeLink.map(homeLink => {
            return (
              <div key={homeLink.id}>
                <a href={homeLink.url}>{homeLink.title}</a>
                <span>|</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
