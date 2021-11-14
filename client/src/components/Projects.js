import React, {useState, useEffect} from 'react'
import axios from 'axios';

import ProjectItem from './ProjectItem'

function Projects() {

  const [project, setProject] = useState([])
  useEffect(() => {
    axios.get('wp-projekt/wp-json/wp/v2/projects')
    .then(res => {
      setProject(res.data)
      console.log(res.data)
    })

  }, [])

  return (
    <div className="container">
      {project.map(project => {
        return <ProjectItem key={project.id} project={project} />
      })}
    </div>
  )
}

export default Projects
