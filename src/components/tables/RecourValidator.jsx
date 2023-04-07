import React from 'react'
import { ReactComponent as NoteIcon } from "../../assets/icons/note.svg"
import { ReactComponent as DownloadIcon } from "../../assets/icons/download.svg"
export default function RecourValidator({student, open, setOpen}) {
    return (
        <div className={`recours-validator${open ? " active": ""}`}>
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
        </div>
    )
}
