import NotFound from "./NotFound"
import { index as StudentIndex } from "./Student/index"
import { index as TeacherIndex } from "./Teacher/index"
import { index as AdminIndex } from "./Admin/index"
import { USER_TYPES } from '../data/Consts'

function Home({user, isLogged, smallScreenSideBarToggler, SetSmallScreenSideBarToggler}) {
    if(!isLogged) return <NotFound />
    switch (user) {
    case USER_TYPES.ADMIN:
        return <AdminIndex smallScreenSideBarToggler = {smallScreenSideBarToggler} SetSmallScreenSideBarToggler={ SetSmallScreenSideBarToggler}/>
    case USER_TYPES.STUDENT:
        return <StudentIndex smallScreenSideBarToggler = {smallScreenSideBarToggler} SetSmallScreenSideBarToggler= {SetSmallScreenSideBarToggler}/>
    case USER_TYPES.TEACHER:
        return <TeacherIndex smallScreenSideBarToggler = {smallScreenSideBarToggler} SetSmallScreenSideBarToggler= {SetSmallScreenSideBarToggler}/>
    default:
        return <NotFound />
    }
}
export default Home