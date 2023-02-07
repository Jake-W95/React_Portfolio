// import React from 'react'
import ProjectItem from './ProjectItem'
import projectArray from '../projectClasser'

function ProjectSection() {
    
    return (
        <>
        {projectArray.map(
            (project, i) => {
                
                return (
                    
                    <ProjectItem key={i} data={project} />
                )
            }
            )
        }
        </>
    );

}

export default ProjectSection

// console.log(ProjectArray[0])