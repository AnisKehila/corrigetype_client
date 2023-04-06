import { useState } from 'react'
import { USER_TYPES } from "../data/Consts"
import pdfExample from "../assets/example.pdf"
import { ReactComponent as UploadIcon } from "../assets/icons/upload.svg";
import { ReactComponent as NoteIcon } from "../assets/icons/pdf-icon.svg";
export default function CType({userType}) {

  const [formData, setFormData] = useState({
    cType: ''
}); 
const [isDragOver, setIsDragOver] = useState(false);

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
            cType: file
        });   
    }
};

const handleSubmit = (event) => {
    event.preventDefault();
    //send the data to backend here 
    /* 
    
    */
}
const handleChange = (event) => {
  let file = event.target.files[0];
  if(file.type === "application/pdf") {
    setFormData({
        ...formData,
        cType: file
    });   
    file = null;
  }
}
  return (
    <>
      {
        userType === USER_TYPES.TEACHER && (
          <div className="card upload-ctype">
            <div className="card-header">
              <span className="property">
                Dossier :
              </span>
              <span className="value">
                Veuillez vous déposer le corrigé type ici
              </span>
            </div>
            <div className="card-body">
              <ul>
                <li>Le dossier doit être en format pdf !</li>
                <li>La taille du fichier doit être inférieure à 512 Ko !</li>
              </ul>
              <form onSubmit={handleSubmit}>
                <label htmlFor="cType" className="file-label">
                  <div className={`file-input${isDragOver ? ' drag' : ''}`}  
                      onDragEnter={handleDragEnter}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                  >
                    {   
                        formData.cType === '' ? 
                            <>
                                <UploadIcon />
                                <div className="txt">
                                    <h4>Déposez vos fichiers ici</h4>
                                    <p>Ou cliquez pour sélectionner manuellement</p>
                                </div>
                            </> : 
                            <>
                                <NoteIcon id='pdf-icon'/>
                                <div className="txt">
                                    <h4>{formData.cType.name}</h4>
                                    <p>{(formData.cType.size  / 1024).toFixed(2)} Ko</p>
                                </div>
                            </>          
                    }
                    <input type="file" name="cType" id="cType" onChange={handleChange} accept='application/pdf'/>
                  </div>
                </label>
                <button type="submit" className='submit'>Sauvegarder</button>
              </form>
            </div>
          </div>
        )
      }
    
      <div className='card ctype'>
        <p>
          Corrigé type
        </p>
        <embed src={pdfExample} />
      </div>
    </>
  )
}
