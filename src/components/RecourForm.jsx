import { useState } from "react";

export default function RecourForm({refe}) {   
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
                <label htmlFor="raison">
                    Raison:
                </label>
                <textarea name="raison" onChange={handleChange} value={formData.raison}></textarea>
                <label htmlFor="justificatif">
                    Justificatif:
                </label>
                <input type="file" name="justificatif" />
                <button type="submit">Evoyer</button>
                <button>Annuler</button>
            </form>
    )
}

