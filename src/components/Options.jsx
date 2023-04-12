import { useState } from "react"
import { USER_TYPES } from "../data/Consts"
import CType from "./CType"
import Marks from "./Marks"
import Recours from "./Recours"
export default function Options({userType}) {
    const [activeOption, setActiveOption] = useState("type");
    return (
        <>
            <div className="options">
                <div className={ `card type${activeOption === "type" ? " active" : ""}` } onClick={() => setActiveOption('type')} >Corrigé type</div>
                <div className={ `card note${activeOption === "note" ? " active" : ""}` } onClick={() => setActiveOption('note')} >Les Notes</div>
                <div className={ `card recour${activeOption === "recour" ? " active" : ""}` } onClick={() => setActiveOption('recour')} >
                    {
                        userType === USER_TYPES.STUDENT ? <>Recours</> : <>Les Recoures</>
                    }
                </div>
            </div>
            {
                activeOption === 'type' ? 
                    <CType userType={userType}/> 
                : activeOption === 'note' ?
                    <Marks userType={userType}/>
                :
                    <Recours userType={userType} />
            }
        </>  
    )
}
