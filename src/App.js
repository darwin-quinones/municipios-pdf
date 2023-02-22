import React, {useState} from "react";

import "./App.css";
import { Button } from "react-bootstrap";
import PDFFile from "./components/PDFFile";
// import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";




function App() {

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* <PDFViewer style={{ width: "100%", height: "90vh" }}>
        <PDFFile></PDFFile>
      </PDFViewer>  */}
      <PDFFile></PDFFile>
    </div>
  );
}

export default App;
