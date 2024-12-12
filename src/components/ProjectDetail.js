import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function ProjectList({ projectList }) {
    let { name } = useParams();
    console.log(name);

    const project = projectList.find(p => p.name === name);
    console.log(project);

    const [projectData, setProjectData] = useState(
        {
            name: name,
            display_name: "",
            date_start: "",
            date_end: "",
            description: "",
            link: "",
            image: ""
        }
    );

    useEffect(() => {
        if (project) {
            setProjectData(project);
        }
    }, [project]);

    if (project) {
        return (
            <div className='project-container'>
                <h1 className='project-name'>{projectData.display_name} </h1>
                <div className='project-details'>
                    <img src={'../images/'+projectData.image} alt="project-image" className='project-image'></img>
                    <p>{projectData.description}</p>
                    <Link className="github-link" to={projectData.link}>Github Code</Link>
                    <div className='project-button'>
                        <Link to="/projects">Back to Projects</Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <h1>Sorry! This page doesn't exist.</h1>
    )
}