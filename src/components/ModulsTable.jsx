import { ReactComponent as ArrowIcon } from "../assets/icons/left_to_right_arrow.svg"
export default function ModulsTable({modules}) {
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <td>Module</td>
                        <td>Professor</td>
                        <td>Ma Note</td>
                        <td>Corrigé type</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        modules.map(item => 
                            <tr key={item.module}>
                                <td>{item.module}</td>
                                <td>{item.prof}</td>
                                <td>{item.note}</td>
                                <td className="consult">
                                    <span>
                                        Consulter
                                    </span>
                                </td>
                                <td className={`recourBtn ${item.hasRecour ? '' : 'active'}`}>
                                    <span>
                                        {item.hasRecour ? `Envoyé` : `Recours`} <ArrowIcon />
                                    </span>
                                </td>
                            </tr>  
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
