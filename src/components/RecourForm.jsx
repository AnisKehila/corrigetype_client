import { useState } from "react";
import { ReactComponent as ExitIcon } from "../assets/icons/exit.svg";
import { ReactComponent as ResizeIcon } from "../assets/icons/textarea.svg";
import { ReactComponent as UploadIcon } from "../assets/icons/upload.svg";
import { ReactComponent as NoteIcon } from "../assets/icons/note.svg";
import waitIcon from "../assets/animations/Rocket.gif";
export default function RecourForm({refe, setFormToggle}) {  
    const [formData, setFormData] = useState({
        raison: '',
        justificatif: ''
    }); 
    const [submitting, setSubmitting] = useState(false);
    const [isDragOver, setIsDragOver] = useState(false);

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };
    const handleDragLeave = (e) => {
        setIsDragOver(false);
    };
    
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        const file = e.dataTransfer.files[0];
        if(file.type === "application/pdf") {
            setFormData({
                ...formData,
                justificatif: file
            });   
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        //send the data to backend here 
        /* 
        
        */
        if(formData.raison !== "") {
            setSubmitting(true);
            setTimeout(() => {
                setSubmitting(false);
                closeForm();
                setFormData({
                    raison: '',
                    justificatif: ''
                })
            }, 1000); // wait for 3 seconds before submitting the form 
            console.log(formData);
        }
    }
    const closeForm = () => setFormToggle(false)
    const handleChange = (event) => {
        if (event.target.name === "justificatif") {
            const file = event.target.files[0];
            if(file.type === "application/pdf") {
                setFormData({
                    ...formData,
                    justificatif: file
                });   
            }
        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            });
        }
    }
    return (
        <form onSubmit={handleSubmit} ref={refe} className={submitting ? "submitting": ""}>
            <img src={waitIcon} className={submitting ? "active": ""}/>
            <div className="form-header">
                <h2>Formulaire de recours</h2>
                <ExitIcon onClick={closeForm}/>
            </div>
            <div className="form-body">
                <label htmlFor="raison" className="raison">
                    Raison
                </label>
                <ResizeIcon id='textresize' />
                <textarea name="raison" onChange={handleChange} value={formData.raison} required>
                </textarea>
                <label htmlFor="justificatif" className="file-label">
                    <div className="justficaif">
                        Justificatif(optionnel)
                    </div>
                    <div className={`file-input${isDragOver ? ' drag' : ''}`}  
                        onDragEnter={handleDragEnter}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        {   
                            formData.justificatif === '' ? 
                                <>
                                    <UploadIcon />
                                    <div className="txt">
                                        <h4>Déposez vos fichiers ici</h4>
                                        <p>Ou cliquez pour sélectionner manuellement</p>
                                    </div>
                                </> : 
                                <>
                                    <NoteIcon id='note'/>
                                    <div className="txt">
                                        <h4>{formData.justificatif.name}</h4>
                                        <p>Cliquez pour changer le fichier</p>
                                    </div>
                                </>          
                        }
                        <input type="file" name="justificatif" id="justificatif" onChange={handleChange} accept='application/pdf'/>
                    </div>
                </label>
            </div>
            <div className="form-footer">
                <button onClick={closeForm} type='button'>Annuler</button>
                <button type="submit" className="submit">Envoyer</button>
            </div>
        </form>
    )
}

