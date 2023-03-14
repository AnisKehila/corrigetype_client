import NotFound from "./NotFound"
import Admin from "./Admin"
import Student from "./Student"
import Teacher from "./Teacher"

function Home({user, isLogged}) {
    if(!isLogged) return <NotFound />
    switch (user) {
    case USER_TYPES.ADMIN:
        return <Admin />
    case USER_TYPES.STUDENT:
        return <Student />
    case USER_TYPES.TEACHER:
        return <Teacher />
    default:
        return <NotFound />
    }
}
export default Home