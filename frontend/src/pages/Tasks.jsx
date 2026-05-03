import { useEffect, useState } from 'react'

import API from '../api/axios'

import Navbar from '../components/Navbar'

const Tasks = () => {

  const [tasks, setTasks] = useState([])

  const [formData, setFormData] = useState({

    title: '',
    description: '',
    status: 'TODO',
    dueDate: ''
  })

  // FETCH TASKS

  const fetchTasks = async () => {

    try {

      const response = await API.get('/tasks')

      setTasks(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {

    fetchTasks()

  }, [])

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    })
  }

  // CREATE TASK

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await API.post(
        '/tasks',
        formData
      )

      alert('Task Created')

      fetchTasks()

      setFormData({

        title: '',
        description: '',
        status: 'TODO',
        dueDate: ''
      })

    } catch (error) {

      console.log(error)

      alert('Failed to create task')
    }
  }

  // DELETE TASK

  const deleteTask = async (id) => {

    try {

      await API.delete(`/tasks/${id}`)

      fetchTasks()

    } catch (error) {

      console.log(error)
    }
  }

  return (

    <div>

      <Navbar />

      <div className='p-10'>

        <h1 className='text-4xl font-bold mb-6'>
          Tasks
        </h1>

        {/* CREATE TASK FORM */}

        <form
          onSubmit={handleSubmit}
          className='bg-white p-5 rounded-xl shadow mb-10'
        >

          <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>

            <input
              type='text'
              name='title'
              placeholder='Task Title'
              value={formData.title}
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

            <input
              type='date'
              name='dueDate'
              value={formData.dueDate}
              onChange={handleChange}
              className='border p-3 rounded'
              required
            />

            <select
              name='status'
              value={formData.status}
              onChange={handleChange}
              className='border p-3 rounded'
            >

              <option value='TODO'>
                TODO
              </option>

              <option value='IN_PROGRESS'>
                IN_PROGRESS
              </option>

              <option value='DONE'>
                DONE
              </option>

            </select>

            <button
              className='bg-green-500 text-white rounded p-3'
            >
              Add Task
            </button>

          </div>

        </form>

        {/* TASK LIST */}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

          {tasks.map((task) => (

            <div
              key={task.id}
              className='bg-white p-5 rounded-xl shadow'
            >

              <h2 className='text-2xl font-bold mb-2'>
                {task.title}
              </h2>

              <p className='text-gray-600 mb-3'>
                {task.description}
              </p>

              <p className='mb-2'>
                <span className='font-bold'>
                  Status:
                </span>

                {' '}

                {task.status}
              </p>

              <p className='mb-4'>
                <span className='font-bold'>
                  Due Date:
                </span>

                {' '}

                {task.dueDate}
              </p>

              <button
                onClick={() => deleteTask(task.id)}
                className='bg-red-500 text-white px-4 py-2 rounded'
              >
                Delete
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Tasks