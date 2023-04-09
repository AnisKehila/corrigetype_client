import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { ReactComponent as NoteIcon } from "../../assets/icons/note.svg"
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg"
import { ReactComponent as ClassesIcon } from "../../assets/icons/users.svg"

function Icon({iconName}) {
    switch (iconName) {
        case 'NoteIcon':
            return <NoteIcon />
        case 'Home':
            return <HomeIcon />
        case 'Persones':
            return <ClassesIcon />
    }
}
export default function SideBarLink({link, SetSmallScreenSideBarToggler}) {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);
    
    useEffect(() => {
        setIsActive(link.link === '/' && location.pathname.includes('/consulter') ? true : false)
    }, [location, link.link])
    
    return (
        <li >
            <NavLink to={link.link} className={isActive ? 'active' : ''} onClick={() => SetSmallScreenSideBarToggler(false)}>
                <Icon iconName={link.icon}/>
                <span>{link.content}</span>  
            </NavLink>
        </li>
    )
}
