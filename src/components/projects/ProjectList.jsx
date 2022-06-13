import { useState, useEffect } from 'react';
import axios from 'axios';
import Project from './Project';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      axios
      .get(`${process.env.REACT_APP_API_URL}/projects`)
      .then((res) => res.data)
      .then((data) => setProjects(data))
    }, [])
    
    return (
        <div>
            { projects &&
            projects.map((project) => (
                <div key={project.id}>
                    <Project project={project} />
                </div>
            ))}
        </div>
    )
}

export default ProjectList