import { useState } from 'react'
import { ReactComponent as NoteIcon } from "../../assets/icons/note.svg"
import { ReactComponent as DownloadIcon } from "../../assets/icons/download.svg"
import { ReactComponent as ArrowIcon } from "../../assets/icons/left_to_right_arrow.svg"

export default function RecoursRow({student}) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <tr className={`row`}>
                <td className="name">
                    <span>
                        {student.Nom}
                    </span>
                    <span>
                        {student.Email}
                    </span>
                </td>
                <td>{student.Matricule}</td>
                <td>{student.Section}</td>
                <td>{student.Groupe}</td>
                <td>{student.Note}</td>
                <td className="consult" onClick={() => {setOpen(true)}}>
                    <span>
                        Consulter
                        <ArrowIcon />
                    </span>
                </td>
            </tr>
            <tr className={`recours-validator${open ? " active": ""}`}>
                <td colSpan="100%" align='center'>
                    <div className='form'>
                        <div>
                            <div className="raison">
                                <span>Raison</span>
                                <p>
                                    {student.Raison}
                                </p>
                            </div>
                            <div className="justificatif">
                                <span className="property">JUSTIFICATIF: </span>
                                <a className="download-container" href={student.Justificatif} download>
                                    <div className="txt">
                                        <NoteIcon />
                                        <span>Justificatif.pdf</span>
                                    </div>
                                    <span className="download-icon"><DownloadIcon /></span>
                                </a>
                            </div>
                        </div>
                        <div className='decisoin'>
                            <button className='accept'>
                                Accepter
                            </button>
                            <button className='refus'>
                                Refuser
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    )
}
