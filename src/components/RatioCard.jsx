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
            <Circle ratio={ratio}/>
            <div className="keys">
                {keys.map(key => <span className="key" key={key}>{key}</span>)}
            </div>
        </div>
    )
}
