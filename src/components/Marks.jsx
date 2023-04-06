import { useState } from 'react'
import { USER_TYPES } from "../data/Consts"
import { ReactComponent as UploadIcon } from "../assets/icons/upload.svg"
import { ReactComponent as DownloadIcon } from "../assets/icons/download.svg"
import { ReactComponent as AlertIcon } from "../assets/icons/info.svg"
import notesExample from "../assets/notes-example.csv"
import MarksTable from './MarksTable'
export default function Marks({userType}) {
  const [formData, setFormData] = useState({
    marks: ''
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
    if(file.type === "text/csv") {
        setFormData({
            ...formData,
            marks: file
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
  if(file.type === "text/csv") {
    setFormData({
        ...formData,
        marks: file
    });   
    file = null;
  }
}
  return (
    <>
      {
        userType === USER_TYPES.TEACHER && (
          <> 
            <div className="card upload-ctype">
              <div className="card-header">
                <span className="property">
                  Dossier :
                </span>
                <span className="value">
                  Veuillez vous déposer votre Fichier de notes  ici
                </span>
              </div>
              <div className="card-body">
                <ul>
                  <li>Le dossier doit être en format csv!</li>
                  <li>Le fichier doit être téléchargé à partir de notre site.(Le lien est en bas de la page.)!</li>
                  <li>La taille du fichier doit être inférieure à 512 Ko !</li>
                </ul>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="marks" className="file-label">
                    <div className={`file-input${isDragOver ? ' drag' : ''}`}  
                        onDragEnter={handleDragEnter}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                      {   
                          formData.marks === '' ? 
                              <>
                                  <UploadIcon />
                                  <div className="txt">
                                      <h4>Déposez vos fichiers ici</h4>
                                      <p>Ou cliquez pour sélectionner manuellement</p>
                                  </div>
                              </> : 
                              <>
                                  <span className="icon">
                                    CSV
                                  </span>
                                  <div className="txt">
                                      <h4>{formData.marks.name}</h4>
                                      <p>{(formData.marks.size  / 1024).toFixed(2)} Ko</p>
                                  </div>
                              </>          
                      }
                      <input type="file" name="marks" id="marks" onChange={handleChange} accept='text/csv'/>
                    </div>
                  </label>
                  <button type="submit" className='submit'>Sauvegarder</button>
                </form>
              </div>
            </div>
            <div className="file-card">
              <div className="card-header">
                <AlertIcon />
                Note
              </div>
              <div className="card-body">
                Vous pouvez télécharger le fichier «CSV» à partir de notre site Web rempli de noms d'étudiants, et prêt à remplir les marques et à le télécharger plus tard
              </div>
              <a className="download-link" href='/notes.csv' download>
                Télécharger 
                <DownloadIcon />
              </a>
            </div>
          </>
        )
      }
      <div className="card ctype">
        <p>
          List d’étudiants
        </p>
        <MarksTable file={notesExample} userType={userType}/>
      </div>
    </>
  )
}
