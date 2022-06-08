import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../../contexts/UserProvider';

const Register = () => {
  const [error, setError] = useState(null);
  const navigator = useNavigate();
  const { setUser } = useUser();

  const formik = useFormik({
    initialValues: {
        // les valeurs initiales sont vides car les inputs de connexion
        // doivent être vides à l'origine
      email: '',
      password: '',
    },
    validateOnChange: false,
    // ici nous préparons un schéma de validation
    validate: (values) => {
      const errors = {};
      // première étape, ne pas formuler d'email doit générer une erreur de validation
      if (!values.email) {
        errors.email = 'Required';
        // ne pas écrire correction son email aussi
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      // ne pas renseigner un mdp est synonyme d'erreur
      if (!values.password) {
        errors.password = 'Required';
      }

      return errors;
    },
    // lors de la soumission du formulaire, on passe les values en paramètre
    onSubmit: (values) => {
        // attention de bien écrire son env REACT sous le format REACT_APP_xxxx
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/`, values)
        // à ce moment, j'ai envie d'attacher aux infos users (côté context)
        // la valeur du token lors du login (préparé sur la route back)
        .then(({ data: { credentials } }) => {
          setUser({
            token: credentials,
          });
          // je prépare ici une potentielle naviation post soumission
          navigator('/');
        })
        .catch(({ response: { data: { message } } }) => {
          setError(message);
        });
    },
  });

  return (
    <div className='Login'>
        <h1>Formulaire d'inscription</h1>
        <p>{error}</p>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">
                Veuillez renseigner votre email
                {formik.errors.email ? <p>{formik.errors.email}</p> : null}
                <input 
                    id="email"
                    type="email"
                    name="email"
                    onChange={formik.handleChange} 
                    value={formik.values.email}
                />
            </label>
            <label htmlFor="password">
                Veuillez renseigner votre mot de passe
                {formik.errors.password ? <p>{formik.errors.password}</p> : null}
                <input 
                    id="password"
                    type="password"
                    name="password"
                    onChange={formik.handleChange} 
                    value={formik.values.password}
                />
            </label>
            <button type="submit">Inscription</button>
        </form>
    </div>
  );
};

export default Register;
