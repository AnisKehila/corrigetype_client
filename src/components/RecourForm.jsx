import { useState } from "react";
import { ReactComponent as ExitIcon } from "../assets/icons/exit.svg";
import { ReactComponent as ResizeIcon } from "../assets/icons/textarea.svg";
import { ReactComponent as UploadIcon } from "../assets/icons/upload.svg";
export default function RecourForm({refe, setFormToggle}) {   
    const [formData, setFormData] = useState({
        raison: '',
        justificatif: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(formData);
    }

    const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value
        });
    }
    return (
        <form onSubmit={handleSubmit} ref={refe}>
            <div className="form-header">
                <h2>Formulaire de recours</h2>
                <ExitIcon onClick={() => setFormToggle(false)}/>
            </div>
            <div className="form-body">
                <label htmlFor="raison" className="raison">
                    Raison
                </label>
                <ResizeIcon id='textresize' />
                <textarea name="raison" onChange={handleChange} value={formData.raison}>
                </textarea>
                <label htmlFor="justificatif" className="file-label">
                    <div className="justficaif">
                        Justificatif(optionnel)
                    </div>
                    <div className="file-input">
                        <UploadIcon />
                        <div className="txt">
                            <h4>Déposez vos fichiers ici</h4>
                            <p>Ou cliquez pour sélectionner manuellement</p>
                        </div>
                        <input type="file" name="justificatif" id="justificatif"/>
                    </div>
                </label>
            </div>
            <div className="form-footer">
                <button>Annuler</button>
                <button type="submit" className="submit">Evoyer</button>
            </div>
        </form>
    )
}

