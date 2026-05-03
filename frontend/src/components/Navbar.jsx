import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const logout = () => {

    localStorage.removeItem('token')

    navigate('/')
  }

  return (
    <div className='bg-black text-white p-4 flex justify-between'>

      <h1 className='text-xl font-bold'>
        Team Task Manager
      </h1>

      <div className='space-x-5'>

        <Link to='/dashboard'>Dashboard</Link>

        <Link to='/projects'>Projects</Link>

        <Link to='/tasks'>Tasks</Link>

        <button onClick={logout}>
          Logout
        </button>

      </div>

    </div>
  )
}

export default Navbar