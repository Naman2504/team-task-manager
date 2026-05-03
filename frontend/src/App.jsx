import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'

import Login from './pages/login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Tasks from './pages/Tasks'

import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (

    <AuthProvider>

      <BrowserRouter>

        <Routes>

          {/* LOGIN */}

          <Route
            path='/'
            element={<Login />}
          />

          {/* REGISTER */}

          <Route
            path='/register'
            element={<Register />}
          />

          {/* DASHBOARD */}

          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* PROJECTS */}

          <Route
            path='/projects'
            element={
              <ProtectedRoute>
                <Projects />
              </ProtectedRoute>
            }
          />

          {/* TASKS */}

          <Route
            path='/tasks'
            element={
              <ProtectedRoute>
                <Tasks />
              </ProtectedRoute>
            }
          />

        </Routes>

      </BrowserRouter>

    </AuthProvider>
  )
}

export default App
