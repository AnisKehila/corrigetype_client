import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { ReactComponent as NoteIcon } from "../assets/icons/note.svg"

function Icon({iconName}) {
    switch (iconName) {
        case 'NoteIcon':
            return <NoteIcon />
    
    }
    
}
export default function SideBarLink({link}) {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);
    
    useEffect(() => {
        setIsActive(link.link === '/' && location.pathname.includes('/consulter') ? true : false)
    }, [location, link.link])
    
    return (
        <li >
            <NavLink to={link.link} className={isActive ? 'active' : ''}>
                <Icon iconName={link.icon}/>
                <span>{link.content}</span>  
            </NavLink>
        </li>
    )
}
