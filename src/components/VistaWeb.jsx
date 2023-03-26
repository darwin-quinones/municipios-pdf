import React from "react";
import {
  Page,
  Image,
  Text,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import escudoColombia from "../Images/Santa Rosa/Escudo Colombia.png";
import escudoSantaRosa from "../Images/Santa Rosa/Escudo Santa Rosa.png";

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

const VistaWeb = () => {
  return (
    // <Document>
    <div className="border">
      <div className="view container text-center">
        <div className="row">
          <div className="col-lg-3 border">
            <img
              className="pt-2"
              src={escudoColombia}
              alt="img escudo de colombia"
            ></img>
          </div>
          <div className="col-lg-6 border">
            <div className="row border">
              <h6 className="text-danger">REPÚBLICA DE COLOMBIA</h6>
            </div>
            <div className="row border">
              <h6 className="text-danger">DEPARTAMENTO DE BOLÍVAR</h6>
            </div>
            <div className="row border">
              <h6 className="fw-bold">ALCALDIA MUNICIPAL DE SANTA ROSA</h6>
              <h6 className="fw-bold">NIT 8904813433</h6>
            </div>
          </div>

          <div className="col-lg-3 border">
            <img
              className="pt-3"
              src={escudoSantaRosa}
              alt="img escudo de colombia"
            ></img>
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
            <p className="justify-text pb-2">
              La Secretaría de Hacienda del Municipio de SANTA ROSA, en uso de
              las atribuciones conferidas por los artículos 684, 686, 688 del
              Estatuto Tributario Nacional y El{" "}
              <p className="italic-text">
                ACUERDO MUNICIPAL 015 DE 2007 por medio del cual se actualiza el
                Estatuto Tributario Municipal
              </p>
              , expide la presente Liquidación Oficial del impuesto de Alumbrado
              Público:
            </p>
          </div>

          <table>
            <tr>
              <td className="text-grey initial">CONTRIBUYENTE:</td>
              <th className="text-grey">
                INTERCONEXION ELECTRICA S.A. E.S.P. - ISA SANTA ROSA
              </th>
            </tr>
            <tr>
              <td className="fw-bold initial">NIT:</td>
              <td className="fw-bold">8600166103</td>
            </tr>
            <tr>
              <td className="fw-bold initial">DIRECCIÓN</td>
              <td className="fw-bold">
                CALLE 12 SUR # 8 - 168 MEDELLIN - ANTIOQUIA
              </td>
            </tr>{" "}
            <br />
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
          <p className="fw-bold initial pb-2">
            Adjunto relación de valores liquidados.
          </p>
          <p className="justify-text">
            El Contribuyente es sujeto pasivo del impuesto de Alumbrado Público
            por cuanto: i) Se analizó y determinó que es usuario potencial del
            servicio ii) Está clasificado de acuerdo a los principios de
            progresividad y equidad en materia tributaria. iii) Opera o posee
            cualquier tipo de infraestructura en el Municipio y/o tiene
            establecimiento físico en la jurisdicción del Municipio y iv) en
            virtud de lo anterior, cumple el hecho generador del impuesto de
            alumbrado público que es el beneficio por la prestación del mismo.
            <p>
              Los contribuyentes del Impuesto de Alumbrado Público están en la
              obligación de aplicar las tarifas correspondientes a cada sector y
              de realizar el pago mensual, según lo establecido en el ACUERDO
              MUNICIPAL 015 DE 2007. Las facturas vencidas generan intereses
              moratorios por cada día de retraso.
            </p>
            <p className="text-center text-grey">
              CONSIGNAR EN LA SIGUIENTE CUENTA
            </p>
          </p>
          <table>
            <tr>
              <th className="th-width fw-bold initial">
                CUENTA DE AHORROS DEL BANCO DE OCCIDENTE:
              </th>
              <th className="fw-bold">800-96222-7</th>
            </tr>
            <tr>
              <td className="fw-bold initial">A NOMBRE DE:</td>
              <td className="fw-bold">
                ACCION FIDUCIARIA PATRIMONIOS AUTONOMOS FA 4675 FIDEICOMISO
                ALUMBRADO PUBLICO SANTA ROSA
              </td>
            </tr>
            <tr>
              <td className="fw-bold initial">NIT: </td>
              <td className="fw-bold">8050129210</td>
            </tr>
          </table>
          <p className="justify-text pb-2">
            Enviar soporte de pago al correo electrónico:
           <p className="p-inline text-decoration-underline"> alumbradopublicosantarosa@gmail.com</p>
          </p>
          <p className="justify-text">
            Contra la presente Liquidación Oficial del Impuesto de Alumbrado
            Público, procede el recurso de reconsideración de que trata el
            artículo 720 del Estatuto Tributario Nacional, el cual deberá
            interponerse dentro de los dos (2) meses siguientes a su
            notificación, cumpliendo los requisitos señalados en el artículo 722
            del mismo ordenamiento jurídico, y presentarla en la oficina de la
            Secretaria de Hacienda del Municipio.
          </p>
        </div><br/>
        <div className="row">
          <p className="text-center">EDGAR GUERRERO</p>
          <p className="text-center">SECRETARIO DE HACIENDA</p>
          <hr className="hr-green border-3"/>
          <hr className="hr-red border-5" />
          {/* text-align: center; margin: 0px; font-weight: bold; font-style: italic; */}
          <p className="tex-center fw-bold fst-italic">“Unidos Hacemos Más por Santa Rosa”</p>
          {/* text-align: center; margin: 0px; font-weight: normal; */}
          <p className="text-center">CALLE 16 Nº 27-71.     TEL 6297108.     Página web: <u>www.santarosadelnorte-bolivar.gov.co</u></p>

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

export default VistaWeb;
