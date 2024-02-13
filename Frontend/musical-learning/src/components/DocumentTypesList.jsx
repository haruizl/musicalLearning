import React from "react";
import {  useState, useEffect } from "react";
import axios from "axios";

const DocumentTypesList = () => {
    const [documentTypes, setDocumentTypes] = useState([]);
    const listDocumentTypes = () => {
      axios.get('http://localhost:8085/listApi/v1/documentTypes')
        .then(({ data }) => {
          setDocumentTypes(data);
        })
    }
    useEffect(listDocumentTypes, [])

    return (
        <>
            {
                documentTypes.map(documentType=>
                    <option value={documentType.name}>{documentType.description}</option>
                )
            }
        </>
    );
}

export default DocumentTypesList;