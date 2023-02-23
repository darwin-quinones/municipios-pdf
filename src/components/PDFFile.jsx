import React from "react";
import {
  Page,
  Image,
  Text,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";

// const styles = StyleSheet.create({
//   body: {
//     paddingTop: 35,
//     paddingBottom: 65,
//     paddingHorizontal: 35,
//     border: "1px solid black",
//   },
//   title: {
//     fontSize: 24,
//     textAlign: "center",
//   },
//   text: {
//     margin: 12,
//     fontSize: 14,
//     textAlign: "justify",
//     fontFamily: "Times-Roman",
//   },
//   header: {
//     fontSize: 12,
//     marginBottom: 20,
//     textAlign: "center",
//     color: "grey",
//   },
//   pageNumber: {
//     position: "absolute",
//     fontSize: 12,
//     bottom: 30,
//     left: 0,
//     right: 0,
//     textAlign: "center",
//     color: "grey",
//   },
//   view: {
//     border: "1px solid black",
//     width: "816px",
//   },
//   border: {
//     border: "1px solid black",
//   },
// });

const PDFFile = () => {
  return (
    // <Document>
    <div  className="border">
      <div  className="view container text-center">
        <div className="row">
          <div className="col-lg-3 border" >
            <p>img 1</p>
          </div>
          <div className="col-lg-6 border" >
            <div className="row border" >
              <h6>REPÚBLICA DE COLOMBIA</h6>
            </div>
            <div className="row border" >
              <h6>DEPARTAMENTO DE BOLÍVAR</h6>
            </div>
            <div className="row border" >
              <h6 className="fw-bold">ALCALDIA MUNICIPAL DE SANTA ROSA</h6>
              <h6 className="fw-bold">NIT 8904813433</h6>
            </div>
          </div>

          <div className="col-lg-3 border" >
            <p>img 2</p>
          </div>
        </div>
        <div className="row">
          <div className="row">
            <div className="col-lg-6 text-start">
              <strong>Fecha Emisión: 21/07/2022</strong>
            </div>
            <div className="col-lg-6 text-end">
              <strong>Fecha Impresión: 22/02/2023</strong>
            </div>
          </div>
          <div>
            <h6 className="text-dark">
              <strong>LIQUIDACIÓN OFICIAL NO. 13112022-28</strong>
            </h6>
            <h6>
              <strong>IMPUESTO ALUMBRADO PÚBLICO</strong>
            </h6>
          </div>
        </div>
        <div className="row">
          <hr />
          <div className="col-12">
            <p className="justify-text ">
              La Secretaría de Hacienda del Municipio de SANTA ROSA, en uso de
              las atribuciones conferidas por los artículos 684, 686, 688 del
              Estatuto Tributario Nacional y El <p className="italic-text">ACUERDO MUNICIPAL 015 DE 2007
              por medio del cual se actualiza el Estatuto Tributario Municipal</p>,
              expide la presente Liquidación Oficial del impuesto de Alumbrado
              Público:
            </p>
          </div>

          <table>
            <tr>
              <th className="text-grey">CONTRIBUYENTE:</th>
              <th className="text-grey">INTERCONEXION ELECTRICA S.A. E.S.P. - ISA SANTA ROSA</th>
            </tr>
            <tr>
              <td className="fw-bold initial">NIT:</td>
              <td className="fw-bold">8600166103</td>
            </tr>
            <tr>
              <td className="fw-bold initial">DIRECCIÓN</td>
              <td className="fw-bold">CALLE 12 SUR # 8 - 168 MEDELLIN - ANTIOQUIA</td>
            </tr> <br />
            <tr>
              <td className="initial">PERIODO CORRIENTE:</td>
              <td>NOVIEMBRE de 2022</td>
            </tr>
            <tr>
              <td className="initial">NO. LIQUIDACIONES VENCIDAS: </td>
              <td>0</td>
            </tr>
            <tr>
              <td className="initial">VALOR TOTAL LIQUIDACIONES VENCIDAS:</td>
              <td>$0</td>
            </tr>
            <tr>
              <td className="initial">SECTOR: </td>
              <td>DISTRIBUCION Y COMERCIALIZACION DE ENERGIA</td>
            </tr>
            <tr>
              <td className="initial">TARIFA:</td>
              <td className="fw-bold">15 SMMLV</td>
            </tr>
            <tr>
              <td className="initial">BASE GRAVABLE / UVT / S.M.L.V.:</td>
              <td>$ 1.000.000</td>
            </tr>
            <tr>
              <td className="initial">VALOR IMPUESTO: </td>
              <td>$ 15.000.000</td>
            </tr>
            <tr>
              <td className="initial text-grey">VALOR TOTAL PERIODO: </td>
              <td className="text-grey">$ 15.000.000</td>
            </tr>
            <tr>
              <td className="initial text-grey">FECHA VENCIMIENTO:</td>
              <td className="text-grey">30/11/2022</td>
            </tr>
          </table>
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
