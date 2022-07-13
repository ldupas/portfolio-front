import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from '../crud/DeleteButton';

const AdminProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      axios
      .get(`${process.env.REACT_APP_API_URL}/projects`)
      .then((res) => res.data)
      .then((data) => setProjects(data))
    }, [])

    console.log(projects)
    
    return (
        <div>
            { projects &&
            projects.map((project) => (
                <div key={project.id}>
                    <h2 >{project.name}</h2>
                    <DeleteButton project={project} />
                    <Link to={`modify-project/${project.id}` }><button>Modifier</button></Link> 
                </div>
            ))}
        </div>
    )
}

export default AdminProjectList