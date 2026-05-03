import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import API from '../api/axios'

const Register = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({

    name: '',
    email: '',
    password: '',
    role: 'MEMBER'
  })

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      await API.post(
        '/auth/signup',
        formData
      )

      alert('Registration Successful')

      navigate('/')

    } catch (error) {

      alert('Registration Failed')
    }
  }

  return (

    <div className='flex justify-center items-center h-screen bg-gray-100'>

      <form
        onSubmit={handleSubmit}
        className='bg-white p-6 rounded-xl shadow-lg w-96'
      >

        <h1 className='text-3xl font-bold mb-5 text-center'>
          Register
        </h1>

        <input
          type='text'
          name='name'
          placeholder='Name'
          className='border p-2 w-full mb-3'
          onChange={handleChange}
        />

        <input
          type='email'
          name='email'
          placeholder='Email'
          className='border p-2 w-full mb-3'
          onChange={handleChange}
        />

        <input
          type='password'
          name='password'
          placeholder='Password'
          className='border p-2 w-full mb-3'
          onChange={handleChange}
        />

        <select
          name='role'
          className='border p-2 w-full mb-4'
          onChange={handleChange}
        >

          <option value='MEMBER'>
            Member
          </option>

          <option value='ADMIN'>
            Admin
          </option>

        </select>

        <button
          type='submit'
          className='bg-green-500 text-white w-full p-2 rounded'
        >
          Register
        </button>

        <p className='mt-4 text-center'>

          Already have an account?

          <Link
            to='/'
            className='text-blue-500 ml-2'
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  )
}

export default Register