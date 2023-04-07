import { USER_TYPES } from "../data/Consts"
import RecoursTable from "./tables/RecoursTable"
export default function Recours({userType}) {
    if(userType === USER_TYPES.TEACHER) {
        return (
            <>  
                <div className="card ctype">
                    <p>
                        List de Recours
                    </p>
                    <RecoursTable />
                </div>
            </>
        )
    }
}
