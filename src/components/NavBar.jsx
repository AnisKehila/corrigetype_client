import { useRef, useEffect, useState } from 'react';
import { ReactComponent as BurgerIcon } from "../assets/icons/burger_menu.svg"
import { ReactComponent as NotificationIcon } from "../assets/icons/notification.svg"
import { ReactComponent as UserIcon } from "../assets/icons/user.svg"

export default function NavBar({user, module , notifications}) {
    const notifRef = useRef(null)
    const billRef = useRef(null)
    const [notifToggle, setNotifToggle] = useState(false);

    useEffect(() => {
        function handleClick(event) {
            if(notifRef.current && billRef.current && !billRef.current.contains(event.target) && !notifRef.current.contains(event.target)) {
                setNotifToggle(false)
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => {document.removeEventListener('mousedown', handleClick)};
    },[notifRef]);

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
                <span className="notifications" onClick={() => setNotifToggle(!notifToggle)} ref={billRef}>
                    <NotificationIcon />
                    <span className="num">
                        {numOfNotif()}
                    </span>
                </span>
                <span className="user">
                    <UserIcon />
                    {user}
                </span>
            </div>
            <ul className={`notif-container ${notifToggle ? 'active' : ''}`} ref={notifRef}>
                {
                    notifications.map(item => 
                        <li key={item.id}>{item.content}</li>    
                    )
                }
            </ul>
        </nav>
    )
}
