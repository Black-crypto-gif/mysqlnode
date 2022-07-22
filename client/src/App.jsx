import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from './components/Content'
import LoginPage from './components/LoginPage'
import Navigation from "./components/Navigation"
import SignUp from './components/SignUp'



function App() {

  return (
    <>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
