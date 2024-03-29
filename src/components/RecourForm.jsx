import { useState, useEffect, useRef } from "react";
import { ReactComponent as ExitIcon } from "../assets/icons/exit.svg";
import { ReactComponent as ResizeIcon } from "../assets/icons/textarea.svg";
import { ReactComponent as UploadIcon } from "../assets/icons/upload.svg";
import { ReactComponent as NoteIcon } from "../assets/icons/note.svg";
import waitIcon from "../assets/animations/Rocket.gif";

export default function RecourForm({setFormToggle, currentModule}) {  
    const [formData, setFormData] = useState({
        module: '',
        raison: '',
        justificatif: ''
    }); 
    const [submitting, setSubmitting] = useState(false);
    const [isDragOver, setIsDragOver] = useState(false);
    const formRef = useRef(null);

    // Drag files Into Form Functions 
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
       //this is just temp work until backend arrives
        if(formData.raison !== "") {
            setSubmitting(true);
            console.log(formData);
            setTimeout(() => {
                setSubmitting(false);
                closeForm();
            }, 1000); // wait for 3 seconds before submitting the form 
        }
    }
    const handleChange = (event) => {
        if (event.target.name === "justificatif") {
            let file = event.target.files[0];
            if(file.type === "application/pdf") {
                setFormData({
                    ...formData,
                    justificatif: file
                });   
                file = null;
            }
        } else {
            setFormData({
                ...formData,
                module: currentModule,
                [event.target.name]: event.target.value
            });
        }
    }
    const closeForm = () => {
        setFormData({
            module: '',
            raison: '',
            justificatif: ''
        })
        setFormToggle(false);
    }
    useEffect(() => {
        const removeForm = (event) => {
            if(formRef.current && !formRef.current.contains(event.target)) {
                closeForm()
            }
        }
        document.addEventListener('mousedown', removeForm);
        return () => {
            document.removeEventListener('mousedown', removeForm);
        };
    }, []);
    return (
        <form onSubmit={handleSubmit} ref={formRef} className={submitting ? "submitting": ""}>
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
                <textarea name="raison" onChange={handleChange} value={formData.raison} placeholder="Entré ta raison..." required>
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

