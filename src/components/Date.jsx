import { ReactComponent as DateIcon } from "../assets/icons/date.svg"
export default function Date({date, content}) {
    return (
        <div className="date">
            <div className="icon">
                <DateIcon />
            </div>
            <div className="txt">
                <span>
                    {date}  
                </span>
                <span>
                    {content}
                </span>
            </div>
        </div>
    )
}
