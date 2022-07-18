import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './components/loginForm'
import Navigation from "./components/Navigation"
import SignUpForm from "./components/SignUpForm"


function App() {

  return (
    <>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/login' element={<LoginForm />}/>
        <Route path='/signup' element={<SignUpForm />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
