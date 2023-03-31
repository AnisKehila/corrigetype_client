import { USER_TYPES } from "../data/Consts"

const studentLinks = [
    {content: 'Corrigé type & Notes', icon: 'NoteIcon', link: '/'},
    {content: 'Recours', icon: 'NoteIcon' , link: '/recours'}
];
const teacherLinks = [
    {content: 'Tableau de bord', icon: 'Home', link: '/'},
    {content: 'Classes', icon: 'Persones' , link: '/classes'}
];
export function sideBarHandler(userType) {
    switch (userType) {
    case USER_TYPES.ADMIN:
        return 
    case USER_TYPES.STUDENT:
        return studentLinks;
    case USER_TYPES.TEACHER:
        return teacherLinks
    default:
        return ''
    }
    
}