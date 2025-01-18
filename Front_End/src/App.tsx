import './App.css'
import Login from "./pages/login/login.tsx"
import Signup from "./pages/signup/signup.tsx"
import Home from "./pages/home/home.tsx"
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/authContext.tsx'

function App() {
  //use to navigate to correct page based on if user is logged in 
  const { authUser } = useAuthContext();
  return (
    <>
      <div className = "p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={authUser ? <Home /> : <Navigate to= {"/login"} />}/>
          <Route path="/login" element={authUser ? <Navigate to= "/" /> :<Login />}/>
          <Route path="/signup" element={authUser ? <Navigate to= "/" /> : <Signup/> } />
        </Routes>
        <Toaster />
      </div>;
    </>
  )
}

export default App
