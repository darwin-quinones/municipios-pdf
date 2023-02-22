import React from "react";
import { Page, Image, Text, Document, StyleSheet, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    border:'1px solid black'
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  view:{
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    // border:'1px solid black',
    width: '816px'
  },
  row:{
    // border:'1px solid black',
  },
  border:{
    border:'1px solid black',
  }
});

const PDFFile = () => {
  return (
    // <Document>
      <div style={styles.border} className="">
        <div style={styles.view} className="container container-sm text-center">

          <div className="row align-items-start" style={styles.row}>
                <div className="col-12 col-lg-3 " style={styles.border}>
                  <p>Hola1</p>
                </div>
                <div className="col-12 col-lg-6" style={styles.border}>
                  <div className="row">
                    <div className="row" style={styles.border}>
                      <h6>REPÚBLICA DE COLOMBIA</h6>
                    </div>
                    <div className="row" style={styles.border}>
                      <h6>DEPARTAMENTO DE BOLÍVAR</h6>
                    </div>
                    <div className="row" style={styles.border}>
                      <h6>ALCALDIA MUNICIPAL DE SANTA ROSA</h6>
                      <h6>NIT 8904813433</h6>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-3" style={styles.border}>
                  <p>Hola3</p>
                </div>


          </div>

            {/* <Text style={styles.header}>Lorem Ipsum pdf</Text>
            <Image
            style={{ maxWidth: "600px", maxHeight: "400" }}
            src="https://picsum.photos/600/400"
            alt="img for poem"
            ></Image>
            <Text style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            </Text>
            <Text style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            </Text> */}

           
        </div>
        {/* <Text style={styles.pageNumber} 
            render={({pageNumber, totalPages}) => `${ pageNumber } / ${ totalPages }`}
            fixed
            /> */}
      </div>
    // </Document>
  );
};

export default PDFFile;
