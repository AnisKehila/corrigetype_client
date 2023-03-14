import { USER_TYPES } from "../data/Consts"

const studentLinks = [
    {content: 'Corrigé type & Notes', icon: 'NoteIcon', link: '/'},
    {content: 'Recours', icon: 'NoteIcon' , link: '/recours'}
]
export function sideBarHandler(userType) {
    switch (userType) {
    case USER_TYPES.ADMIN:
        return 
    case USER_TYPES.STUDENT:
        return studentLinks;
    case USER_TYPES.TEACHER:
        return 
    default:
        return ''
    }
    
}