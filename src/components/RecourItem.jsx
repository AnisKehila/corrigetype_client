import { ReactComponent as MoinsIcon } from "../assets/icons/contract_arrow.svg"
import { ReactComponent as DetailsIcon } from "../assets/icons/expand_arrow.svg"
import { ReactComponent as EtatIcon } from "../assets/icons/exclamation.svg"
import { ReactComponent as NoteIcon } from "../assets/icons/note.svg"
import { ReactComponent as DownloadIcon } from "../assets/icons/download.svg"
import { useState } from "react"
export default function RecourItem({module, prof, subDate, Objection, justificatif, etat, oldNote, newNote}) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`recour-row card ${open ? "opened" : ''}`}>
            <span className="moins" onClick={() => setOpen(false)}>moins <MoinsIcon /></span>
            <div className="content">
                <div className="col">
                    <div className="module">
                        <span className="property">Module:</span>
                        <span className="value">{module}</span>
                    </div>
                    <div className="prof">
                        <span className="property">Professor:</span>
                        <span className="value">{prof}</span>
                    </div>
                    <div className="submit-date">
                        <span className="property">Submission Date:</span>
                        <span className="value">{subDate}</span>
                    </div>
                    <div className={`etat ${etat.split(' ')[0].toLowerCase()}`}>
                        <div className="icon">
                            <EtatIcon />
                        </div>
                        <div className="txt">
                            <span className="txt-bold">
                                {etat}
                            </span>
                            <span>
                                État De La Demande
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="mark">
                        <span className="property">Marque ancienne:</span>
                        <span className="value">{oldNote}</span>
                        {   newNote == '' ? null :
                            <span className="new-note">NOUVELLE MARQUE: <span>{newNote}</span></span>
                        }
                    </div>

                    <div className="objection">
                        <span className="property">Objection Text:</span>
                        <span className="value">{Objection}</span>
                    </div>
                    <div className="justificatif">
                        <span className="property">Justificatif: </span>
                        <a className="download-container" href={justificatif} download>
                            <div className="txt">
                                <NoteIcon />
                                <span>Justificatif.pdf</span>
                            </div>
                            <span className="download-icon"><DownloadIcon /></span>
                        </a>
                    </div>
                </div>
            </div>
            <span className="details" onClick={() => setOpen(true)}>Détails <DetailsIcon /></span>
        </div>
    )
}
