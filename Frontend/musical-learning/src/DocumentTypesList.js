import React from "react";

const DocumentTypesList = ({documentTypes}) => {
    return (
        <>
            {
                documentTypes.map(documentType=>
                    <div className="mb-3 border rounded p-3" key={documentType.url}>
                        {documentType.name}
                    </div>
                )
            }
        </>
    );
}

export default DocumentTypesList;