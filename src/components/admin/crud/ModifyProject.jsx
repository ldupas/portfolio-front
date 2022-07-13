import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ModifyProject = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [picture, setPicture] = useState('');
    const [date, setDate] = useState();
    const [repo_front, setRepoFront] = useState('');
    const [repo_back, setRepoBack] = useState('');
    const [deploy_url, setDeploy] = useState('');
    const [categoryId, setCategoryId] = useState();

    const navigator = useNavigate();
    const param = useParams();
    let projectId = parseInt(param.id)

    console.log(projectId)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("name", name);
        formData.append("description", description);
        formData.append("picture", picture);
        // formData.append('date', date);
        formData.append("repo_front", repo_front);
        formData.append("repo_back", repo_back);
        formData.append("deploy_url", deploy_url);
        formData.append("category_id",  categoryId);

        await axios.put(`${process.env.REACT_APP_API_URL}/projects/${projectId}`, formData)
        navigator("/admin");
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
                <input type="text" id='categoryId' onChange={(event) => setCategoryId(parseInt(event.target.value))} />

                <button type='submit'>Envoyer</button>
            </form>
        </div>
    )
}

export default ModifyProject;