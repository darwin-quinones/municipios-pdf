import React, {useState} from "react";

import "./App.css";
import { Button } from "react-bootstrap";
import PDFFile from "./components/PDFFile";
import VistaWeb from "./components/VistaWeb";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PdfEjemplo from "./components/pdfEjemplo";
import SelectFile from "./components/selectFile";
import PDFActasInterventorias from "./components/PDFActasInterventorias";
import WordActasInterventorias from "./components/wordFile/WordActasInterventorias";






function App() {

  return (


     <WordActasInterventorias/>
    // <div style={{minHeight: "100vh"}}>
  

    //   <PDFViewer style={{width: "100%", height: "90vh"}}>
    //     <PDFActasInterventorias/>
    //   </PDFViewer>
    //   <SelectFile/>
    // </div>

    



    // <div style={{minHeight: "100vh"}}>
    // {/* <PDFViewer width="1000" height="600">

    //   <PdfEjemplo></PdfEjemplo>
    // </PDFViewer> */}

    //   <PDFViewer style={{width: "100%", height: "90vh"}}>
    //     <PDFFile></PDFFile>
    //   </PDFViewer>

    //   {/* <VistaWeb></VistaWeb> */}
    // </div>
  );
}

export default App;
