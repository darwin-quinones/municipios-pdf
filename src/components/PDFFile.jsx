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
    paddingHorizontal: 45,
    fontSize: 9,
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
  view: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    width: "505px",
  },
  row: {
    display: "flex",
    // -ms-flex-wrap: wrap,
    flexWrap: "wrap",
    marginRight: "-15px",
    marginLeft: "-15px",
    flexDirection: "row",
    paddingTop: 2,
    // paddingBottom: 8,
    width: "505px",
  },
  col_lg_6: {
    textAlign: "center",
    width: "285px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  col_row_3: {
    width: "285px",
    border: "1px solid black",
    flexWrap: "wrap",
  },
  color_text_row: {
    color: "red",
  },
  col_lg_3: {
    width: "110px",
    height: "70px",
    border: "1px solid black",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  p: {
    paddingLeft: "25px",
  },
  row_align: {
    display: "flex",
    justifyContent: "space-between",
  },
  p_end: {
    float: "right",
    display: "inline-block",
  },
  p_center: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  fontWeight: {
    fontWeight: "bold !important",
  },

  img: {
    width: "70px",
    // height: "80px"
  },
  line: {
    width: "505px",
    height: 0,
    border: "1px solid #C4C4C4",
    margin: "3px",
    display: "inline-block",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body} size="A4" className="border">
        <View style={styles.view} className="view container text-center">
          <View style={styles.row} className="row">
            <View style={styles.col_lg_3} className="col-lg-3 border">
              <Image
                style={styles.img}
                className="pt-2"
                src={escudoColombia}
                alt="img escudo de colombia"
              />
            </View>
            <View style={[styles.col_lg_6]} className="col-lg-6 border">
              <View style={[styles.col_row_3]} className="row border">
                <Text style={[styles.color_text_row]} className="text-danger">
                  REPÚBLICA DE COLOMBIA
                </Text>
              </View>
              <View style={[styles.color_text_row]} className="row border">
                <Text className="text-danger">DEPARTAMENTO DE BOLÍVAR</Text>
              </View>
              <View style={[styles.col_row_3]} className="row border">
                <Text className="fw-bold">
                  ALCALDIA MUNICIPAL DE SANTA ROSA
                </Text>
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

          <View style={[styles.row]}>
            <View style={[styles.row, styles.row_align]}>
              <View style={[styles.p]} className="col-lg-6 text-start">
                <Text>Fecha Emisión: 21/07/2022</Text>
              </View>
              <View style={[styles.p_end]} className="col-lg-6 text-end">
                <Text>Fecha Impresión: 22/02/2023</Text>
              </View>
            </View>

            <View style={[styles.row, styles.p_center, styles.p]}>
              <View style={[styles.fontWeight]}>
                <Text
                  style={[]}
                  className="text-dark"
                  fontWeight="bold"
                  color="black"
                >
                  LIQUIDACIÓN OFICIAL NO. 13112022-28
                </Text>
                <Text>IMPUESTO ALUMBRADO PÚBLICO</Text>
              </View>
            </View>
            <View style={[styles.row]}>
              <View style={[styles.view, styles.line, styles.p]}></View>
              <View className="col-12">
                <Text className="justify-text pb-2">
                  La Secretaría de Hacienda del Municipio de SANTA ROSA, en uso
                  de las atribuciones conferidas por los artículos 684, 686, 688
                  del Estatuto Tributario Nacional y El{" "}
                  <Text className="italic-text">
                    ACUERDO MUNICIPAL 015 DE 2007 por medio del cual se
                    actualiza el Estatuto Tributario Municipal
                  </Text>
                  , expide la presente Liquidación Oficial del impuesto de
                  Alumbrado Público:
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default PDFFile;
