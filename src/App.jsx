import './App.css'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import NewNone from './components/NewNone'
function App() {

  return (
    <>
      
    <Routes>
      <Route path='/' element={<Navbar />}/>
      <Route path="/neww" element={<NewNone/>}/>
    </Routes>
    </>
  )
}

export default App
