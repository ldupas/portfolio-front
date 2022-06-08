import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../contexts/UserProvider';

const Navbar = () => {
    const { user } = useUser();

    return (
        <nav>
            <div>
                {!user && (
                    <>
                        <Link to="/login">Connexion</Link>
                        <Link to="/register">Créer un compte</Link>
                    </>
                )}
                {user && (
                    <>
                        <Link to="/login">Mon espace admin</Link>
                        <Link to="/register">Déconnexion</Link>
                    </>
                )
                }
            </div>
        </nav>
    )
}

export default Navbar