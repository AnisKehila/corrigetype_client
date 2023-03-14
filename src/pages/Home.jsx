import NotFound from "./NotFound"
import Admin from "./Admin"
import { index as StudentIndex } from "./Student/index"
import Teacher from "./Teacher"
import { USER_TYPES } from '../data/Consts'

function Home({user, isLogged}) {
    if(!isLogged) return <NotFound />
    switch (user) {
    case USER_TYPES.ADMIN:
        return <Admin />
    case USER_TYPES.STUDENT:
        return <StudentIndex />
    case USER_TYPES.TEACHER:
        return <Teacher />
    default:
        return <NotFound />
    }
}
export default Home