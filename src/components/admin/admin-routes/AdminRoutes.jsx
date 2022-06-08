import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../../contexts/UserProvider';

const AdminRoutes = () => {
  // ici j'ai besoin d'invoquer l'état du user
  const { user } = useUser();

  // Ici on prépare un outlet qui permet d'emmenener arpès vérif du user vers le  
  // composant/route enfant : panel admin
  return user ? <Outlet /> : <Navigate to="/" />
}

export default AdminRoutes