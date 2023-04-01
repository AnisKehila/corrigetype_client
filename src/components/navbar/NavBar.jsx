import { useRef, useState } from 'react'
import { ReactComponent as BurgerIcon } from "../../assets/icons/burger_menu.svg"
import { ReactComponent as NotificationIcon } from "../../assets/icons/notification.svg"
import { ReactComponent as UserDetails } from "../../assets/icons/arrow.svg"
import UserParams from "./UserParams"
import Notifications from './Notifications'
export default function NavBar({user, module , notifications}) {
    const [notifToggle, setNotifToggle] = useState(false);
    const [userParamsToggle, setUserParamsToggle] = useState(false);
    const billRef = useRef(null);
    const userRef = useRef(null);
    const numOfNotif = () => {
        let count = notifications.length;
        return count
    }
    return (
        <nav>
            <div>
                <BurgerIcon />
                <span className="location">{module}</span>
            </div>
            <div className="btns">
                <span className="notifications" onClick={() => setNotifToggle(true)} ref={billRef}>
                    <NotificationIcon />
                    <span className="num">
                        {numOfNotif()}
                    </span>
                </span>
                <span className="user" ref={userRef} onClick={() => setUserParamsToggle(true)}>
                    <span className='user-name'>{user}</span>
                    <UserDetails />
                    <UserParams 
                        userRef={userRef}
                        paramsToggle={userParamsToggle}
                        setParamsToggle={setUserParamsToggle}
                    />
                </span>
            </div>
            <Notifications 
                billRef={billRef}
                notifications={notifications}
                notifToggle={notifToggle}
                setNotifToggle={setNotifToggle}
            />
        </nav>
    )
}
