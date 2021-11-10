import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProjectPage() {

  const [book, setBook] = useState({})
  const [isLoaded, setIsload] = useState(false);

  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`http://localhost:80/wp-projekt/wp-json/wp/v2/projects/${params.id}`)
      const done = await res.data;
      setBook(done)
      setIsload(true)
    }

    fetchData()
  }, [params] )

  return (
    <div>
      {
        isLoaded ? <h1>{book.title.rendered}</h1>
        : <p>Not found</p>
      }
    </div>
  )
}

export default ProjectPage