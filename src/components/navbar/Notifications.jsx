import { useEffect, useRef } from 'react';

export default function Notifications({ billRef, notifications, notifToggle, setNotifToggle }) {
    const notifRef = useRef(null);
    useEffect(() => {
        function handleClick(event) {
            if(notifRef.current && billRef.current && !billRef.current.contains(event.target) && !notifRef.current.contains(event.target)) {
                setNotifToggle(false)
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => {document.removeEventListener('mousedown', handleClick)};
    },[billRef]);

    return (
        <ul className={`notif-container ${notifToggle ? 'active' : ''}`} ref={notifRef}>
            {
                notifications.map(item => 
                    <li key={item.id}>{item.content}</li>    
                )
            }
        </ul>
    )
}
