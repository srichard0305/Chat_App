import './App.css'
import Login from "./pages/login/login.tsx"
import Signup from "./pages/signup/signup.tsx"
import Home from "./pages/home/home.tsx"
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <div className = "p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
        <Toaster />
      </div>;
    </>
  )
}

export default App
