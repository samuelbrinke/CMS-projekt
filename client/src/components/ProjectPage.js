import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProjectPage() {

  const [project, setProject] = useState({})
  const [isLoaded, setIsload] = useState(false);

  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://localhost:80/wp-projekt/wp-json/wp/v2/projects/${params.id}`)
      const done = await res.data;

      setProject(done)
      setIsload(true)
    }

    fetchData()
  }, [params] )

  return (
    <div className="container mt-5">
        {isLoaded ? (
          <div>
            <h1>{project.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{__html: project.content.rendered}} />
            <a href={project.acf.github_link} className="d-block">Go to page</a>
            <Link to={'/projects'}>Go back</Link>
          </div>
        ) : (
          <p>Not found</p>
        )}
    </div>
  )
}

export default ProjectPage