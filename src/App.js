import React, {useState} from "react";

import "./App.css";
import { Button } from "react-bootstrap";
import PDFFile from "./components/PDFFile";
import VistaWeb from "./components/VistaWeb";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PdfEjemplo from "./components/pdfEjemplo";




function App() {

  return (
    <div style={{minHeight: "100vh"}}>
    <PDFViewer width="1000" height="600">

      <PdfEjemplo></PdfEjemplo>
    </PDFViewer>

      {/* <PDFViewer style={{width: "100%", height: "90vh"}}>
        <PDFFile></PDFFile>
      </PDFViewer>  */}

      {/* <VistaWeb></VistaWeb> */}
    </div>
  );
}

export default App;
