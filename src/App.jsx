import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router'
import { USER_TYPES } from './data/Consts'
import SideBar from './components/sidebar/SideBar'
import Home from './pages/Home.jsx'
import { sideBarHandler } from './utils/sideBarHandler'
import { useState } from 'react'
function App() {
  const User = USER_TYPES.TEACHER;
  const isLogged = true;
  const [smallScreenSideBarToggler, SetSmallScreenSideBarToggler] = useState(false);

  return (
    <Routes>
      <Route element={<SideBar links= {sideBarHandler(User)} smallScreenSideBarToggler = {smallScreenSideBarToggler} SetSmallScreenSideBarToggler={SetSmallScreenSideBarToggler} />}>
        <Route exact path='/' element={<Home user={User} isLogged={isLogged} smallScreenSideBarToggler= {smallScreenSideBarToggler} SetSmallScreenSideBarToggler= {SetSmallScreenSideBarToggler}/>}>
          <Route path='consulter/:module' element={<Home user={User} isLogged={isLogged} smallScreenSideBarToggler= {smallScreenSideBarToggler} SetSmallScreenSideBarToggler= {SetSmallScreenSideBarToggler}/>} />
          <Route path='recours' element={<Home user={User} isLogged={isLogged} smallScreenSideBarToggler= {smallScreenSideBarToggler} SetSmallScreenSideBarToggler= {SetSmallScreenSideBarToggler}/>}/>
          <Route path='classes' element={<Home user={User} isLogged={isLogged} smallScreenSideBarToggler= {smallScreenSideBarToggler} SetSmallScreenSideBarToggler= {SetSmallScreenSideBarToggler}/>}/>
          <Route path='classes/:classe' element={<Home user={User} isLogged={isLogged} smallScreenSideBarToggler= {smallScreenSideBarToggler} SetSmallScreenSideBarToggler= {SetSmallScreenSideBarToggler}/>}/>
        </Route>
      </Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )

}

export default App
