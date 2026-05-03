import Navbar from '../components/Navbar'

const Dashboard = () => {

  return (

    <div>

      <Navbar />

      <div className='p-10'>

        <h1 className='text-4xl font-bold mb-6'>
          Dashboard
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

          <div className='bg-blue-200 p-6 rounded-xl shadow'>

            <h2 className='text-2xl font-bold'>
              Total Projects
            </h2>

            <p className='text-3xl mt-3'>
              5
            </p>

          </div>

          <div className='bg-green-200 p-6 rounded-xl shadow'>

            <h2 className='text-2xl font-bold'>
              Total Tasks
            </h2>

            <p className='text-3xl mt-3'>
              12
            </p>

          </div>

          <div className='bg-red-200 p-6 rounded-xl shadow'>

            <h2 className='text-2xl font-bold'>
              Overdue Tasks
            </h2>

            <p className='text-3xl mt-3'>
              2
            </p>

          </div>

        </div>

        <div className='mt-10'>

          <h2 className='text-2xl font-bold mb-4'>
            Recent Activity
          </h2>

          <div className='bg-white shadow rounded-xl p-5'>

            <ul className='space-y-3'>

              <li>
                ✅ Project created successfully
              </li>

              <li>
                ✅ Task assigned to member
              </li>

              <li>
                ⏳ Pending tasks remaining
              </li>

              <li>
                ⚠️ 2 tasks are overdue
              </li>

            </ul>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard