import React from 'react'
import axios from 'axios'

const DeleteButton = ({ project }) => {

    const handleDelete = () => {
        axios
            .delete(`${process.env.REACT_APP_API_URL}/projects/${project.id}`)
    }

  return (
    <div>
        <button onClick={handleDelete}>Supprimer</button>
    </div>
  )
}

export default DeleteButton