import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

function ProjectItem({project}) {

    const [image, setImage] = useState('');
    const githublink = project.acf.github_link
    const featured_media = project.featured_media;
    useEffect(() => {
      console.log(githublink)
        const fetchData = async () => {
          const res = await axios.get(`http://localhost:80/wp-projekt/wp-json/wp/v2/media/${featured_media}`)
          //console.log(res)
          setImage(res.data.media_details.sizes.full.source_url)
        }

        fetchData()
    },[githublink, featured_media])
    return (
        <div>
            <h2>{project.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{__html: project.excerpt.rendered}}/>
            <img style={{width: '50%'}}src={ image } alt={project.title.rendered} />
            <a href={githublink} className="button">Go to github</a>
            <Link to={`/project/${project.id}`}>Go to page</Link>
            
        </div>
    )
}

export default ProjectItem