import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router'
import { USER_TYPES } from './data/Consts'
import SideBar from './components/sidebar/SideBar'
import Home from './pages/Home.jsx'
import { sideBarHandler } from './utils/sideBarHandler'
function App() {
  const User = USER_TYPES.TEACHER;
  const isLogged = true;
  return (
    <Routes>
      <Route element={<SideBar links= {sideBarHandler(User)}/>}>
        <Route exact path='/' element={<Home user={User} isLogged={isLogged}/>}>
          <Route path='consulter/:module' element={<Home user={User} isLogged={isLogged}/>} />
          <Route path='recours' element={<Home user={User} isLogged={isLogged}/>}/>
          <Route path='classes' element={<Home user={User} isLogged={isLogged}/>}/>
          <Route path='classes/:classe' element={<Home user={User} isLogged={isLogged}/>}/>
        </Route>
      </Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )

}

export default App
