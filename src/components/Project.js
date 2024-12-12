import React from 'react';
import { Link } from "react-router-dom";

function Project(props) {
    return (
        <div className='project-element'>
            <Link to={'/projects/' + props.project.name} className='detail-link'>
            <h2>{props.project.display_name}</h2>
                <div className='detail-body'>
                    <img src={"/images/" + props.project.image} alt="project-image" className='project-image'></img>
                    <p>{props.project.description}</p>
                </div>

            </Link>



        </div>
    )
}

export default Project;