import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProject = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [picture, setPicture] = useState('');
    const [date, setDate] = useState();
    const [repoFront, setRepoFront] = useState('');
    const [repoBack, setRepoBack] = useState('');
    const [deploy, setDeploy] = useState('');
    const [categoryId, setCategoryId] = useState('');

    const navigator = useNavigate();

    const handleSubmit = async () => {
        const formData = new FormData();

        formData.append('name', name);
        formData.append('description', description);
        formData.append('picture', picture);
        // formData.append('date', date);
        formData.append('repoFront', repoFront);
        formData.append('repoBack', repoBack);
        formData.append('deploy', deploy);
        formData.append('categoryId',  categoryId);

        await axios.post(`${process.env.REACT_APP_API_URL}/projects`, formData)
        navigator('/');
    }


    return (
        <div className='AddProjectForm'>
            <form encType='multipart/form-data' onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' onChange={(event) => setName(event.target.value)} />

                <label htmlFor="description">Description</label>
                <input type="text" id='description' onChange={(event) => setDescription(event.target.value)} />

                <label htmlFor="picture">Picture</label>
                <input type="file" id='picture' onChange={(event) => setPicture(event.target.files[0])} />

                {/* <label htmlFor="date">Date</label>
                <input type="date" id='date' onChange={(event) => setDate(event.target.value)} /> */}

                <label htmlFor="repoFront">Repo Front</label>
                <input type="text" id='repoFront' onChange={(event) => setRepoFront(event.target.value)} />

                <label htmlFor="repoBack">Repo Back</label>
                <input type="text" id='repoBack' onChange={(event) => setRepoBack(event.target.value)} />

                <label htmlFor="deploy">Deploy Link</label>
                <input type="text" id='deploy' onChange={(event) => setDeploy(event.target.value)} />

                <label htmlFor="categoryId">Category Id</label>
                <input type="text" id='categoryId' onChange={(event) => setCategoryId(event.target.value)} />

                <button type='submit'>Envoyer</button>
            </form>
        </div>
    )
}

export default AddProject