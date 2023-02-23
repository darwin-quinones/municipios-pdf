import React from "react";
import {
  Page,
  Image,
  Text,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import escudoColombia from "../img/EscudoColombia.png";
import escudoSantaRosa from "../img/EscudoSantaRosa.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontSize: 14,
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    width: "816px"
  },
  row:{
    display: "flex",
    // -ms-flex-wrap: wrap,
    flexWrap: "wrap",
    marginRight: "-15px",
    marginLeft: "-15px",
    flexDirection: 'row',
    borderTop: '1px solid #EEE',
    paddingTop: 8,
    paddingBottom: 8,
  },
  col_lg_3:{
    width: "25%"
  },
  col_lg_6:{
    width: "50%"
  },
  img:{
    width: "100px",
  }
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body} size="A4" className="border">
        <View style={styles.view} className="view container text-center">
          <View style={styles.row} className="row">
            <View style={styles.col_lg_3} className="col-lg-3 border">
              <Image style={styles.img}
                className="pt-2"
                src={escudoColombia}
                alt="img escudo de colombia"
              />
            </View>
            <View style={styles.col_lg_3} className="col-lg-6 border">
              <View style={styles.row} className="row border">
                <Text className="text-danger">REPÚBLICA DE COLOMBIA</Text>
              </View>
              <View style={styles.row} className="row border">
                <Text className="text-danger">DEPARTAMENTO DE BOLÍVAR</Text>
              </View>
              <View style={styles.row} className="row border">
                <Text className="fw-bold">ALCALDIA MUNICIPAL DE SANTA ROSA</Text>
                <Text className="fw-bold">NIT 8904813433</Text>
              </View>
            </View>

            <View style={styles.col_lg_3} className="col-lg-3 border">
              <Image
                style={styles.img}
                className="pt-3"
                src={escudoSantaRosa}
                alt="img escudo de colombia"
              />
            </View>
          </View>
          <View className="row">
            <View className="row">
              <View className="col-lg-6 text-start">
                <Text>Fecha Emisión: 21/07/2022</Text>
              </View>
              <View className="col-lg-6 text-end">
                <Text>Fecha Impresión: 22/02/2023</Text>
              </View>
            </View>
            <View>
              <Text className="text-dark">
                LIQUIDACIÓN OFICIAL NO. 13112022-28
              </Text>
              <Text>
                IMPUESTO ALUMBRADO PÚBLICO
              </Text>
            </View>
          </View>
          <View className="row">
            <hr />
            <View className="col-12">
              <Text className="justify-text pb-2">
                La Secretaría de Hacienda del Municipio de SANTA ROSA, en uso de
                las atribuciones conferidas por los artículos 684, 686, 688 del
                Estatuto Tributario Nacional y El{" "}
                <Text className="italic-text">
                  ACUERDO MUNICIPAL 015 DE 2007 por medio del cual se actualiza
                  el Estatuto Tributario Municipal
               </Text>
                , expide la presente Liquidación Oficial del impuesto de
                Alumbrado Público:
             </Text>
            </View>

            <Text className="fw-bold initial pb-2">
              Adjunto relación de valores liquidados.
           </Text>
            <Text className="justify-text">
              El Contribuyente es sujeto pasivo del impuesto de Alumbrado
              Público por cuanto: i) Se analizó y determinó que es usuario
              potencial del servicio ii) Está clasificado de acuerdo a los
              principios de progresividad y equidad en materia tributaria. iii)
              Opera o posee cualquier tipo de infraestructura en el Municipio
              y/o tiene establecimiento físico en la jurisdicción del Municipio
              y iv) en virtud de lo anterior, cumple el hecho generador del
              impuesto de alumbrado público que es el beneficio por la
              prestación del mismo.
              <Text>
                Los contribuyentes del Impuesto de Alumbrado Público están en la
                obligación de aplicar las tarifas correspondientes a cada sector
                y de realizar el pago mensual, según lo establecido en el
                ACUERDO MUNICIPAL 015 DE 2007. Las facturas vencidas generan
                intereses moratorios por cada día de retraso.
             </Text>
              <Text className="text-center text-grey">
                CONSIGNAR EN LA SIGUIENTE CUENTA
             </Text>
           </Text>
            
            <Text className="justify-text pb-2">
              Enviar soporte de pago al correo electrónico:
              <Text className="p-inline text-decoration-underline">
                {" "}
                alumbradopublicosantarosa@gmail.com
             </Text>
           </Text>
            <Text className="justify-text">
              Contra la presente Liquidación Oficial del Impuesto de Alumbrado
              Público, procede el recurso de reconsideración de que trata el
              artículo 720 del Estatuto Tributario Nacional, el cual deberá
              interponerse dentro de los dos (2) meses siguientes a su
              notificación, cumpliendo los requisitos señalados en el artículo
              722 del mismo ordenamiento jurídico, y presentarla en la oficina
              de la Secretaria de Hacienda del Municipio.
           </Text>
          </View>
          <br />
          <View className="row">
            <Text className="text-center">EDGAR GUERRERO</Text>
            <Text className="text-center">SECRETARIO DE HACIENDA</Text>
            <hr className="hr-green border-3" />
            <hr className="hr-red border-5" />
            {/* text-align: center; margin: 0px; font-weight: bold; font-style: italic; */}
            <Text className="tex-center fw-bold fst-italic">
              “Unidos Hacemos Más por Santa Rosa”
            </Text>
            {/* text-align: center; margin: 0px; font-weight: normal; */}
            <Text className="text-center">
              CALLE 16 Nº 27-71. TEL 6297108. Página web:
              www.santarosadelnorte-bolivar.gov.co
           </Text>
          </View>
        </View>
        <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
      </Page>

     
    </Document>
  );
};

export default PDFFile;
