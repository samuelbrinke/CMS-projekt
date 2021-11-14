import React, { useState, useEffect } from 'react'
import axios from 'axios'

function About() {

  const [content, setContent] = useState({});
  const [isLoaded, setIsLoad] = useState(false)

  useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`http://localhost:80/wp-projekt/wp-json/wp/v2/pages/28`)
        console.log(res.data)
        setContent(res.data)
        setIsLoad(true)
      }

      fetchData()
  },[])
  return (
    <div className="container mt-5">
    {isLoaded ? (
      <div>
        <div dangerouslySetInnerHTML={{__html: content.content.rendered}} />
      </div>
    ) : (
      <p>Not found</p>
    )}
    </div>
  )
}

export default About
