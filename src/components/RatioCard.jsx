import Circle from "./Circle"
export default function RatioCard({titleProp, titleValue, ratio, keys}) {
    return (
        <div className="card">
            <div className="card-header">
                <span className="property">
                    {titleProp}
                </span>
                <span className="value">
                    {titleValue}
                </span>
            </div>            
            <Circle ratio={ratio} activeColor={keys.active.color}  nonActiveColor={keys.nonActive.color}/>
            <div className="card-footer">
                <span className="key">
                    <span style={{backgroundColor: keys.active.color}} className="color"></span>
                    <span className="txt">{keys.active.text}</span>
                </span>
                <span className="key">
                    <span style={{backgroundColor: keys.nonActive.color}} className="color"></span>
                    <span className="txt">{keys.nonActive.text}</span>
                </span>
            </div>
        </div>
    )
}
