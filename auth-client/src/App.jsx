import './App.css'
import { Route, Routes } from 'react-router'
import SignupForm from './components/signupForm'

function App() {

  return (
    <>
      <Routes>
        <Route path='/signup' element={<SignupForm/>} />
      </Routes>
    </>
  )
}

export default App
