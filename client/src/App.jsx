import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from "./components/Navigation"
import SignUpForm from "./components/SignUpForm"
import loginForm from "./components/loginForm"

function App() {

  return (
    <>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<loginForm />}/>
        <Route path='/SignUp' element={<SignUpForm />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
