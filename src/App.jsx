import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router'
import { USER_TYPES } from './data/Consts'
import SideBar from './components/SideBar'
import Home from './pages/Home.jsx'

function App() {
  const User = USER_TYPES.STUDENT;
  const isLogged = true
  return (
    <main className='main'>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home user={User} isLogged={isLogged}/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </main>
  )

}

export default App
