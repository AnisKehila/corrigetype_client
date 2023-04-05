import React from 'react'
import { USER_TYPES } from "../data/Consts"
import pdfExample from "../../public/example.pdf"
export default function CType({userType}) {
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
