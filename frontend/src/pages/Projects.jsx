import { useEffect, useState } from 'react'

import API from '../api/axios'

import Navbar from '../components/Navbar'

const Projects = () => {

  const [projects, setProjects] = useState([])

  const [formData, setFormData] = useState({

    name: '',
    description: ''
  })

  // FETCH PROJECTS

  const fetchProjects = async () => {

    try {

      const response = await API.get('/projects')

      setProjects(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {

    fetchProjects()

  }, [])

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    })
  }

  // CREATE PROJECT

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await API.post(
        '/projects',
        formData
      )

      alert('Project Created')

      fetchProjects()

      setFormData({

        name: '',
        description: ''
      })

    } catch (error) {

      console.log(error)

      alert('Failed to create project')
    }
  }

  return (

    <div>

      <Navbar />

      <div className='p-10'>

        <h1 className='text-4xl font-bold mb-6'>
          Projects
        </h1>

        {/* CREATE PROJECT FORM */}

        <form
          onSubmit={handleSubmit}
          className='bg-white p-5 rounded-xl shadow mb-10'
        >

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

            <input
              type='text'
              name='name'
              placeholder='Project Name'
              value={formData.name}
              onChange={handleChange}
              className='border p-3 rounded'
              required
            />

            <input
              type='text'
              name='description'
              placeholder='Description'
              value={formData.description}
              onChange={handleChange}
              className='border p-3 rounded'
              required
            />

            <button
              className='bg-blue-500 text-white rounded p-3'
            >
              Add Project
            </button>

          </div>

        </form>

        {/* PROJECT LIST */}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

          {projects.map((project) => (

            <div
              key={project.id}
              className='bg-white p-5 rounded-xl shadow'
            >

              <h2 className='text-2xl font-bold mb-2'>
                {project.name}
              </h2>

              <p className='text-gray-600'>
                {project.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Projects