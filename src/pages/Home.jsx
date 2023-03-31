import NotFound from "./NotFound"
import { index as StudentIndex } from "./Student/index"
import { index as TeacherIndex } from "./Teacher/index"
import { USER_TYPES } from '../data/Consts'

function Home({user, isLogged}) {
    if(!isLogged) return <NotFound />
    switch (user) {
    case USER_TYPES.ADMIN:
        return 
    case USER_TYPES.STUDENT:
        return <StudentIndex />
    case USER_TYPES.TEACHER:
        return <TeacherIndex />
    default:
        return <NotFound />
    }
}
export default Home