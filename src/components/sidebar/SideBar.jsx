import { Outlet } from "react-router"
import Logo from "./Logo"
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg"
import SideBarLink from "./SideBarLink"
import { useState } from "react"
export default function SideBar({links}) {
    const [smallScreenSideBarToggler, SetSmallScreenSideBarToggler] = useState(false);
    return (
        <>
            <span id="menu-togler" onClick={() => SetSmallScreenSideBarToggler(!smallScreenSideBarToggler)}>
                <MenuIcon />
            </span>
            <div className={`sidebar${smallScreenSideBarToggler ? ' active' : ''}`}>
                <div className="content">
                    <Logo />
                    <ul className="links">
                        {
                            links.map(link => 
                                <SideBarLink key={link.content} link={link} SetSmallScreenSideBarToggler={SetSmallScreenSideBarToggler}/>
                            )
                        }
                    </ul>
                </div>
            </div>
            <Outlet />
        </>

    )
}
