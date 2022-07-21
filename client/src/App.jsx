import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from './components/Content'
import Navigation from "./components/Navigation"



function App() {

  return (
    <>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Content />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
