import Project from './Project'
import React from 'react';
export default function ProjectList(props) {
    return (
        <div className="projects-container">
            <h1 className='project-title'>Past Projects</h1>
            <div className='project-list'>
                {props.projectList.map(project => (
                    <Project key={project.name} project={project}></Project>
                ))}
            </div>
        </div>
    )

}