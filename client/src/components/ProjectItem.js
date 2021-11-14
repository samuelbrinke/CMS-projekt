import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

function ProjectItem({project}) {
    const [image, setImage] = useState('');
    const featured_media = project.featured_media;
    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`wp-projekt/wp-json/wp/v2/media/${featured_media}`)
          setImage(res.data.media_details.sizes.full.source_url)
        }

        fetchData()
    },[ featured_media])
    return (
        <div className="project">
            <h2>{project.title.rendered}</h2>
            <img className="img-fluid" src={ image } alt={project.title.rendered} />
            <div>
              <Link to={`/project/${project.id}`} className="project-link"></Link>

            </div>
        </div>
    )
}

export default ProjectItem