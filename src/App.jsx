import { useEffect, useState } from 'react'
import './App.css'
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import SearchForm from './components/SearchForm'



function App() {

  const [projects, setProjects]= useState([
    {id:1,title:'Smart Washing Machine', description:'Use a modernized machine for better results.'},])
    

  const [searchTerm, setSearchTerm]=useState('')


 const filteredProjects= projects.filter((project)=>{
    if(searchTerm === ''){
      return true
    }else{
      return project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    }

})
  const Projectform=(newProject)=>{
     setProjects((prevItems)=>{
       const latestId = prevItems.length > 0 ? Math.max(...prevItems.map(proj => proj.id)) : 0;

      return [...prevItems, {id: latestId + 1,...newProject}]
  })}
  
  
  return (
    <>
  <div className='app-container'>
   <div className="main-container">
      <h1 className="app-form">Personal Project Showcase App</h1>
   </div>

   <ProjectForm Project={Projectform} />
   <div className="flex flex-col items-center justify-center">
    <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    <ProjectList filteredProjects={filteredProjects} />
   </div>
   </div>

   
  </>
  )
}

export default App