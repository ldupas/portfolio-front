import React from 'react';
import AddProject from '../admin-projects/AddProject';
import AdminProjectList from '../admin-projects/AdminProjectList';

const AdminPanel = () => {
  return (
    <div>
        <h1>Bienvenue sur votre espace admin.</h1>
        <AddProject />
        <AdminProjectList />
    </div>
  )
}

export default AdminPanel