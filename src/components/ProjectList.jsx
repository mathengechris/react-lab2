import React from 'react'

const ProjectList = ({filteredProjects}) => {
  return (
    <div className='list-container'>
     <ul className='flex-conatiner'>
         {filteredProjects.map((project)=>(
          <li key={project.id} className='boarder-container'>
            <h3 className='font-container '>{project.title} </h3>
            <p className='text-container'>{project.description}</p>
        </li>
      ))}
     </ul>
    </div>
  )
}

export default ProjectList