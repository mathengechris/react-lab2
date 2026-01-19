
import React, { useState } from 'react'


const Projectform = ({Project}) => {
    const [title, setTitle]= useState('')
    const [description, setDescription]= useState('')
    const [errors, setErrors]=useState('')

    const handleSubmit=(e)=>{
      e.preventDefault()

      const form= e.target
      const formData= new FormData(form)

      const title= formData.get('title')
      const description = formData.get('description')
     
      if(title.trim()=== '' || title.length < 3){
        setErrors('Please enter a valid title!')
        return;
      }

      if(typeof(description) !== 'string' || description.trim() === '' || !isNaN(description)){
        setErrors('please enter a valid description!')
        return;
      }

      setErrors('')

      const obj={
        title: title,
        description: description
      }

    
    Project(obj)

   

      setDescription('')
      setTitle('')
      return obj
    }
  return (
    <>
      <div className='container'>
        <form className='form-container' onSubmit={handleSubmit}>
        <h1 className='text-container'>Add Project</h1>
        
        <label for='title'>Title</label>
        <input 
         id='title'
         type='text'
         name='title'
         className='input'
         placeholder='enter title'
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         required
        />
        {/* description */}
        <label for='description'>Description</label>
        <textarea
          id='description'
          name='description'
          className='input'
          placeholder='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        {errors &&(<p className='text-red-600'>{errors}</p>)}

        <button type='submit' className='btn'>Add</button>
      </form>
      </div>
    </>
  )
}

export default Projectform