import React from 'react'

const Project = ({ project }) => {
    console.log(project);

    console.log(project.picture)
  return (
    <div>
        <h2>{project.name}</h2>
        <img src={`${process.env.REACT_APP_IMG}/${project.picture}`} alt={project.name} />
    </div>
  )
}

export default Project