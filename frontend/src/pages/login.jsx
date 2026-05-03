import { useState, useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import API from '../api/axios'

import { AuthContext } from '../context/AuthContext'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const { login } = useContext(AuthContext)

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const response = await API.post(
        '/auth/login',
        {
          email,
          password
        }
      )

      login(response.data.token)

      navigate('/dashboard')

    } catch (error) {

      alert('Invalid credentials')
    }
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>

      <form
        onSubmit={handleSubmit}
        className='bg-white p-6 rounded-xl shadow-lg w-96'
      >

        <h1 className='text-3xl font-bold mb-5 text-center'>
          Login
        </h1>

        <input
          type='email'
          placeholder='Email'
          className='border p-2 w-full mb-3'
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='password'
          placeholder='Password'
          className='border p-2 w-full mb-4'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button 
        type='submit' 
        className='bg-blue-500 text-white w-full p-2 rounded'
        >
          Login
        </button>

        <p className='mt-4 text-center'>
          No account?

          <Link
            to='/register'
            className='text-blue-500 ml-2'
          >
            Register
          </Link>
        
        </p>

      </form>

    </div>
  )
}

export default Login