import React, { useState } from "react";

import { Button } from "react-bootstrap";
import PDFFile from "./PDFFile";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";


const SelectFile = () => {
    const getInitialState = () => {
        const value = 'ALCALDIA MUNICIPAL DE MAGANGUE'
        return value
    }

    const [value, setValue] = useState(getInitialState)

    const handleSelectChanched = (e) => {
        setValue(e.target.value)
    }
  return (
    <div>
      <select onChange={ handleSelectChanched }>
        <option>ALCALDIA MUNICIPAL DE MAGANGUE</option>
        <option>ALCALDIA MUNICIPAL DE SAN JUAN DEL CESAR</option>
        <option>ALCALDIA MUNICIPAL DE ARJONA</option>
        <option>ALCALDIA MUNICIPAL DE SAN JACINTO</option>
        <option>ALCALDIA MUNICIPAL DE EL PASO</option>
        <option>ALCALDIA MUNICIPAL DE SANTA ROSA</option>
        <option>ALCALDIA MUNICIPAL DE VILLANUEVA-BOLIVAR</option>
        <option>ALCALDIA MUNICIPAL DE AGUSTIN CODAZZI</option>
        <option>ALCALDIA MUNICIPAL DE EL COPEY</option>
        <option>ALCALDIA MUNICIPAL DE LA PAZ</option>
        <option>ALCALDIA MUNICIPAL DE RIOHACHA</option>
        <option>LCALDIA MUNICIPAL DE TURBACO</option>
        <option>ALCALDIA MUNICIPAL DE FACATATIVA</option>
      </select>
      {/* PDF */}
      <div style={{ minHeight: "100vh" }}>
        {/* <PDFViewer width="1000" height="600">

    //   <PdfEjemplo></PdfEjemplo>
    // </PDFViewer> */}

        <PDFViewer style={{ width: "100%", height: "90vh" }}>
          <PDFFile alcaldia={value} />
        </PDFViewer>

        {/* <VistaWeb></VistaWeb> */}
      </div>
    </div>
  );
};

export default SelectFile;
