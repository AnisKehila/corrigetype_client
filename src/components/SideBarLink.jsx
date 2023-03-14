import { NavLink } from "react-router-dom"
import { ReactComponent as NoteIcon } from "../assets/icons/note.svg"

function Icon({iconName}) {
    switch (iconName) {
        case 'NoteIcon':
            return <NoteIcon />
    
    }
    
}
export default function SideBarLink({link}) {
    return (
        <li >
            <NavLink to= {link.link}>
                <Icon iconName={link.icon}/>
                <span >{link.content}</span>  
            </NavLink>
        </li>
    )
}
