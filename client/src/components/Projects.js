import React, {useState, useEffect} from 'react'
import axios from 'axios';

import ProjectItem from './ProjectItem'

function Projects() {

    const  [project, setProject] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    axios.get('http://localhost:80/wp-projekt/wp-json/wp/v2/projects')
    .then(res => {
        setProject(res.data)
        setIsLoaded(true)
    })

  }, [])

    return (
        <div>
            asd
            {project.map(project => {
                return <ProjectItem key={project.id} project={project} />
            })}
        </div>
    )
}

export default Projects
