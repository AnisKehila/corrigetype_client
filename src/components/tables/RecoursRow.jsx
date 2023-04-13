import { useState } from 'react'
import { ReactComponent as NoteIcon } from "../../assets/icons/note.svg"
import { ReactComponent as ExitIcon } from "../../assets/icons/exit.svg"
import { ReactComponent as EtatIcon } from "../../assets/icons/exclamation.svg"
import { ReactComponent as DownloadIcon } from "../../assets/icons/download.svg"
import { ReactComponent as ArrowIcon } from "../../assets/icons/left_to_right_arrow.svg"

export default function RecoursRow({student}) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState(student);
    function handleAcceptBtn() {
        setFormData({
            ...formData,
            Respond: "favorable"
        });
    }
    function handleRefusBtn() {
        setFormData({
            ...formData,
            Respond: "defavorable"
        });
    }
    function handleNoteInput(event) {
        setFormData({
            ...formData,
            NewNote: event.target.value
        });
    }
    function handleRefusInput(event) {
        setFormData({
            ...formData,
            RefusRaison: event.target.value
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        setFormData({
            ...formData,
            HasResponde: true
        });
        //send data into server here
        console.log(formData)
    }

    return (
        <>
            <tr className={`row`}>
                <td className="name">
                    <span>
                        {formData.Nom}
                    </span>
                    <span>
                        {formData.Email}
                    </span>
                </td>
                <td>{formData.Matricule}</td>
                <td>{formData.Section}</td>
                <td>{formData.Groupe}</td>
                <td>{formData.Note}</td>
                <td className="consult" onClick={() => setOpen(true)}>
                    <span>
                        Consulter
                        <ArrowIcon />
                    </span>
                </td>
            </tr>
            <tr className={`recours-validator${open ? " active": ""}`}>
                <td colSpan="100%" align='center'>
                    <div className='consulte'>
                        <ExitIcon id="exit" onClick={() => {setOpen(false)}}/>
                        <div className='raison-container'>
                            <div className="raison">
                                <span>Raison</span>
                                <p>
                                    {formData.Raison}
                                </p>
                            </div>
                            <div className="justificatif">
                                <span className="property">JUSTIFICATIF: </span>
                                <a className="download-container" href={formData.Justificatif} download>
                                    <div className="txt">
                                        <NoteIcon />
                                        <span>Justificatif.pdf</span>
                                    </div>
                                    <span className="download-icon"><DownloadIcon /></span>
                                </a>
                            </div>
                        </div>
                        <div className="decisoin">
                            { !formData.HasResponde && !formData.Respond && 
                                <div className='pre-decision btns'>
                                    <button className="accept" onClick={handleAcceptBtn}>
                                        Accepter
                                    </button>
                                    <button className="refus" onClick={handleRefusBtn}>
                                        Refuser
                                    </button>
                                </div>                         
                            }
                            { !formData.HasResponde && formData.Respond === 'favorable' && 
                                <form className='accept-form' onSubmit={handleSubmit}>
                                    <div className="input">
                                        <label htmlFor="new-note">Nouvelle note</label>
                                        <input type="number" id="new-note" max={20} step="any" onChange={handleNoteInput} placeholder="Entrez la nouvelle note .." required/>
                                    </div>
                                    <div className='btns'>
                                        <button type='submit' className="save">
                                            Sauvegarder 
                                        </button>
                                        <button type='button' className="return" onClick={() => setFormData({...formData, HasResponde: false, Respond: ""})}>
                                            Retourner
                                        </button>
                                    </div>
                                </form>
                            }
                            {  !formData.HasResponde && formData.Respond === 'defavorable' && 
                                <form className='refus-form' onSubmit={handleSubmit}>
                                    <div className="input">
                                        <label htmlFor="raison du refus">Raison de refus</label>
                                        <textarea type="number" id="raison du refus" onChange={handleRefusInput} placeholder="Entrez le raison du refus  .." required/>
                                    </div>
                                    <div className='btns'>
                                        <button type='submit' className="save">
                                            Sauvegarder 
                                        </button>
                                        <button type='button' className="return" onClick={() => setFormData({...formData, HasResponde: false, Respond: ""})}>
                                            Retourner
                                        </button>
                                    </div>
                                </form>
                            }
                            {
                                formData.HasResponde &&
                                <>
                                    {
                                        formData.Respond === "favorable" && 
                                        <div className='marks'>
                                            <div className='mark'>                                        
                                                Note ancienne : <span>{formData.Note}</span>
                                            </div>
                                            <div className='new-mark'>
                                                Nouvelle Note : {formData.NewNote}
                                            </div>
                                        </div>
                                    }
                                    {
                                        formData.Respond === "defavorable" && 
                                        <div>
                                            <div className="raison">
                                                <span>Refus Raison</span>
                                                <p>
                                                    {formData.RefusRaison}
                                                </p>
                                            </div>
                                        </div>
                                    }
                                    <div className= {`etat ${formData.Respond}`}>
                                        <div className="icon">
                                            <EtatIcon />
                                        </div>
                                        <div className="txt">
                                            <span className="txt-bold">
                                                {formData.Respond}
                                            </span>
                                            <span>
                                                État De La Demande
                                            </span>
                                        </div>
                                    </div>
                                    <span className="change-decision" onClick={() => setFormData({...formData, HasResponde: false, newNote: "", RefusRaison: ""})}>
                                        Changer La decision
                                    </span>
                                </>
                            }
                        </div>
                    </div>
                </td>
            </tr>
        </>
    )
}
