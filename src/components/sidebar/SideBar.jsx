import { Outlet } from "react-router"
import Logo from "./Logo"
import SideBarLink from "./SideBarLink"
export default function SideBar({links, smallScreenSideBarToggler ,SetSmallScreenSideBarToggler}) {
    return (
        <>
            <div className={`sidebar${smallScreenSideBarToggler ? ' active' : ''}`}>
                <div className="content">
                    <Logo />
                    <ul className="links">
                        {
                            links.map(link => 
                                <SideBarLink key={link.content} link={link} SetSmallScreenSideBarToggler= {SetSmallScreenSideBarToggler}/>
                            )
                        }
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    )
}
