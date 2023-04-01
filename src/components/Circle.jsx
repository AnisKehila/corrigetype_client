export default function Circle({ratio}) {
    const ratioInDeg = ratio * 360 / 100
    return (
        <div className="circle" style={{"--ratio": ratioInDeg + "deg"}}>
            <div className="value">{ratio}%</div>
        </div>
    )
}
