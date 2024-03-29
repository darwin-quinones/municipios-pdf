import React, { useState } from "react";

import "./App.css";
import { Button } from "react-bootstrap";
import PDFFile from "./components/PDFFile";
import VistaWeb from "./components/VistaWeb";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PdfEjemplo from "./components/pdfEjemplo";
import SelectFile from "./components/selectFile";
import PDFActasInterventorias from "./components/PDFActasInterventorias";
import { WordCartaCobroPersuasivoAPI } from "./components/wordFile/WordCartaCobroPersuasivoAPI.tsx";
import { WordCartaCobroPersuasivo } from "./components/wordFile/WordCartaCobroPersuasivo.tsx";
import { WordActasInterventorias } from "./components/wordFile/WordActasInterventorias.tsx";
import ExcelActasInterventorias from "./components/excelFile/ExcelActasInterventorias";
import ExcelReporteOperadoresRedPeriodo from "./components/excelFile/ExcelReporteOperadoresRedPeriodo";
import ExcelReporteComercializadores from "./components/excelFile/ExcelReporteComercializadores";
import ExcelReporteClientesEspeciales from "./components/excelFile/ExcelReporteClientesEspeciales";
import ExcelReporteMunicipales from "./components/excelFile/ExcelReporteMunicipales";







function App() {

  return (



    <div style={{ minHeight: "100vh" }}>
      {/* <ExcelReporteMunicipales/>
    <ExcelReporteClientesEspeciales/>
    <ExcelReporteComercializadores/>
    <ExcelReporteOperadoresRedPeriodo/>
    <ExcelActasInterventorias /> */}
      <WordCartaCobroPersuasivoAPI
        municipality="Example Municipality"
        date="June 1, 2023"
        contributor="John Doe"
        nit="123456789"
        address="123 Main Street"
      />
      <WordCartaCobroPersuasivo />
      {/* <WordActasInterventorias/>
  

      <PDFViewer style={{width: "100%", height: "90vh"}}>
        <PDFActasInterventorias/>
      </PDFViewer>
      <SelectFile/> */}
    </div>





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
