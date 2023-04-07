import { USER_TYPES } from "../../data/Consts"
import { ReactComponent as ArrowIcon } from "../../assets/icons/left_to_right_arrow.svg"
export default function MarksTable({file, userType}) {
    return (
    <div className="table classes marks">
        <table>
            <thead>
                <tr>
                    <td>Nom</td>
                    <td>Matricule</td>
                    <td>Section</td>
                    <td>Groupe</td>
                    <td>Note</td>
                    {
                        userType !== USER_TYPES.STUDENT && (
                            <td></td>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    file.map(row => 
                        <tr key={row.Matricule}>
                            <td className="name">
                                <span>
                                    {row.Nom}
                                </span>
                                <span>
                                    {row.Email}
                                </span>
                            </td>
                            <td>{row.Matricule}</td>
                            <td>{row.Section}</td>
                            <td>{row.Groupe}</td>
                            <td>{row.Note}</td>
                            {
                                userType !== USER_TYPES.STUDENT && (
                                <td className="consult">
                                    <span>
                                        Voir Profile
                                        <ArrowIcon />
                                    </span>
                                </td>
                            )
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
    )
}
