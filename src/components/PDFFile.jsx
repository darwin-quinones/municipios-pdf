import React from "react";
import {
  Page,
  Image,
  Text,
  Document,
  StyleSheet,
  View,
  Font,
} from "@react-pdf/renderer";
import escudoColombia from "../img/EscudoColombia.png";
import escudoSantaRosa from "../img/EscudoSantaRosa.png";
import fontCabin from "../font/Cabin.ttf";
import cabinBold from "../font/Cabin-Bold.ttf";
Font.register({
  family: "Cabin",
  fonts: [
    {
      src: cabinBold,
      fontWeight: "bold",
    },
  ],
});
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
    // border: "1px solid black",
    width: "505px",
  },
  row: {
    display: "flex",
    // -ms-flex-wrap: wrap,
    flexWrap: "wrap",
    marginRight: "-15px",
    marginLeft: "-15px",
    flexDirection: "row",
    paddingTop: 4,
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
    borderBottom: " 1px solid black",
    flexWrap: "wrap",
  },
  col_row_3_2: {
    width: "285px",
    flexWrap: "wrap",
  },

  color_text_row: {
    color: "red",
    fontSize: "13px",
  },
  main_text: {
    fontSize: "12px",

    fontStyle: "italic",
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
  text_bold: {
    fontWeight: "bold",
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

  img: {
    width: "70px",
    // height: "80px"
  },
  line: {
    width: "505px",
    border: "2px solid #C4C4C4",
    display: "inline-block",
  },
  italic_text: {
    fontStyle: "italic",
    fontWeight: "bold",
    fontFamily: "Cabin",
  },
  table_row_left: {
    flexDirection: "row",
    border: "1px solid black",
    borderBottom: 0,
  },
  table_row_right: {
    flexDirection: "row",
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    textAlign: "center",
  },
});

let alcaldia = "ALCALDIA MUNICIPAL DE MAGANGUE";

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body} size="A4" className="border">
        <View style={styles.view} className="view container text-center">
          {() => {
            switch (alcaldia) {
              case "ALCALDIA MUNICIPAL DE MAGANGUE":
                return (
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
                        <Text
                          style={[styles.color_text_row]}
                          className="text-danger"
                        >
                          REPÚBLICA DE COLOMBIA
                        </Text>
                      </View>
                      <View style={[styles.col_row_3]} className="row border">
                        <Text
                          style={[styles.color_text_row]}
                          className="text-danger"
                        >
                          DEPARTAMENTO DE BOLÍVAR
                        </Text>
                      </View>
                      <View style={[styles.col_row_3_2]} className="row border">
                        <Text style={[styles.main_text]}>
                          ALCALDIA MUNICIPAL DE SANTA ROSA
                        </Text>
                        <Text style={[styles.main_text]}>NIT 8904813433</Text>
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
                );
              default:
                return (
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
                        <Text
                          style={[styles.color_text_row]}
                          className="text-danger"
                        >
                          REPÚBLICA DE COLOMBIA
                        </Text>
                      </View>
                      <View style={[styles.col_row_3]} className="row border">
                        <Text
                          style={[styles.color_text_row]}
                          className="text-danger"
                        >
                          DEPARTAMENTO DE BOLÍVAR
                        </Text>
                      </View>
                      <View style={[styles.col_row_3_2]} className="row border">
                        <Text style={[styles.main_text]}>
                          ALCALDIA MUNICIPAL DE SANTA ROSA
                        </Text>
                        <Text style={[styles.main_text]}>NIT 8904813433</Text>
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
                );
            }
          }}

          <View style={[styles.row]}>
            <View style={[styles.row, styles.row_align]}>
              <View style={[styles.p]}>
                <Text style={[styles.text_bold]}>
                  Fecha Emisión: 21/07/2022
                </Text>
              </View>
              <View style={[styles.p_end]}>
                <Text style={[styles.text_bold]}>
                  Fecha Impresión: 22/02/2023
                </Text>
              </View>
            </View>

            <View style={[styles.row, styles.p_center, { marginTop: "10px" }]}>
              <Text style={[styles.text_bold]}>
                LIQUIDACIÓN OFICIAL NO. 13112022-28
              </Text>
            </View>

            <View
              style={[styles.row, styles.p_center, { marginBottom: "10px" }]}
            >
              <Text style={[styles.text_bold]}>IMPUESTO ALUMBRADO PÚBLICO</Text>
            </View>

            <View style={[styles.line]}></View>
            <Text
              style={{ paddingBottom: "15px", marginTop: "5px" }}
              className="justify-text pb-2"
            >
              La Secretaría de Hacienda del Municipio de SANTA ROSA, en uso de
              las atribuciones conferidas por los artículos 684, 686, 688 del
              Estatuto Tributario Nacional y El ACUERDO MUNICIPAL 015 DE 2007
              por medio del cual se actualiza el Estatuto Tributario Municipal,
              expide la presente Liquidación Oficial del impuesto de Alumbrado
              Público:
            </Text>
            <View style={[styles.table_row_left]}>
              <View style={{ width: 197 }}>
                <Text>CONTRIBUYENTE:</Text>
              </View>
            </View>
            <View style={[styles.table_row_right]}>
              <View style={{ width: 305 }}>
                <Text>
                  INTERCONEXION ELECTRICA S.A. E.S.P. - ISA SANTA ROSA:
                </Text>
              </View>
            </View>
            <View style={[styles.table_row_left]}>
              <View style={{ width: 197 }}>
                <Text>NIT:</Text>
              </View>
            </View>
            <View style={[styles.table_row_right]}>
              <View style={{ width: 305 }}>
                <Text>8600166103</Text>
              </View>
            </View>
            <View
              style={[
                styles.table_row_left,
                { marginBottom: "10px", borderBottom: "1px solid black" },
              ]}
            >
              <View style={{ width: 197 }}>
                <Text>DIRECCIÓN:</Text>
              </View>
            </View>
            <View
              style={[
                styles.table_row_right,
                { marginBottom: "10px", borderBottom: "1px solid black" },
              ]}
            >
              <View style={{ width: 305 }}>
                <Text>CALLE 12 SUR # 8 - 168 MEDELLIN - ANTIOQUIA</Text>
              </View>
            </View>
            {/* Brake */}
            <View style={[styles.table_row_left]}>
              <View style={{ width: 197 }}>
                <Text>PERIODO CORRIENTE:</Text>
              </View>
            </View>
            <View style={[styles.table_row_right]}>
              <View style={{ width: 305 }}>
                <Text>NOVIEMBRE de 2022</Text>
              </View>
            </View>
            <View style={[styles.table_row_left]}>
              <View style={{ width: 197 }}>
                <Text>NO. LIQUIDACIONES VENCIDAS:</Text>
              </View>
            </View>
            <View style={[styles.table_row_right]}>
              <View style={{ width: 305 }}>
                <Text>0</Text>
              </View>
            </View>
            <View style={[styles.table_row_left]}>
              <View style={{ width: 197 }}>
                <Text>VALOR TOTAL LIQUIDACIONES VENCIDAS: </Text>
              </View>
            </View>
            <View style={[styles.table_row_right]}>
              <View style={{ width: 305 }}>
                <Text>$0</Text>
              </View>
            </View>
            <View style={[styles.table_row_left]}>
              <View style={{ width: 197 }}>
                <Text>SECTOR:</Text>
              </View>
            </View>
            <View style={[styles.table_row_right]}>
              <View style={{ width: 305 }}>
                <Text>DISTRIBUCION Y COMERCIALIZACION DE ENERGIA</Text>
              </View>
            </View>
            <View style={[styles.table_row_left]}>
              <View style={{ width: 197 }}>
                <Text>TARIFA:</Text>
              </View>
            </View>
            <View style={[styles.table_row_right]}>
              <View style={{ width: 305 }}>
                <Text>15 SMMLV</Text>
              </View>
            </View>
            <View style={[styles.table_row_left]}>
              <View style={{ width: 197 }}>
                <Text>BASE GRAVABLE / UVT / S.M.L.V.: </Text>
              </View>
            </View>
            <View style={[styles.table_row_right]}>
              <View style={{ width: 305 }}>
                <Text>$ 1.000.000</Text>
              </View>
            </View>
            <View style={[styles.table_row_left]}>
              <View style={{ width: 197 }}>
                <Text>VALOR IMPUESTO</Text>
              </View>
            </View>
            <View style={[styles.table_row_right]}>
              <View style={{ width: 305 }}>
                <Text>$ 15.000.000</Text>
              </View>
            </View>
            <View style={[styles.table_row_left]}>
              <View style={{ width: 197 }}>
                <Text>VALOR TOTAL PERIODO:</Text>
              </View>
            </View>
            <View style={[styles.table_row_right]}>
              <View style={{ width: 305 }}>
                <Text>$ 15.000.000</Text>
              </View>
            </View>
            <View
              style={[
                styles.table_row_left,
                { borderBottom: "1px solid black" },
              ]}
            >
              <View style={{ width: 197 }}>
                <Text>FECHA VENCIMIENTO:</Text>
              </View>
            </View>
            <View
              style={[
                styles.table_row_right,
                { borderBottom: "1px solid black" },
              ]}
            >
              <View style={{ width: 305 }}>
                <Text>30/11/2022</Text>
              </View>
            </View>
            <Text style={{ marginTop: "5px" }}>
              Adjunto relación de valores liquidados.
            </Text>
            <Text style={{ marginTop: "15px", marginBottom: "15px" }}>
              El Contribuyente es sujeto pasivo del impuesto de Alumbrado
              Público por cuanto: i) Se analizó y determinó que es usuario
              potencial del servicio ii) Está clasificado de acuerdo a los
              principios de progresividad y equidad en materia tributaria. iii)
              Opera o posee cualquier tipo de infraestructura en el Municipio
              y/o tiene establecimiento físico en la jurisdicción del Municipio
              y iv) en virtud de lo anterior, cumple el hecho generador del
              impuesto de alumbrado público que es el beneficio por la
              prestación del mismo. Los contribuyentes del Impuesto de Alumbrado
              Público están en la obligación de aplicar las tarifas
              correspondientes a cada sector y de realizar el pago mensual,
              según lo establecido en el ACUERDO MUNICIPAL 015 DE 2007. Las
              facturas vencidas generan intereses moratorios por cada día de
              retraso.
            </Text>
            <View
              style={[styles.row, styles.p_center, { marginBottom: "10px" }]}
            >
              <View style={{ margin: 5 }}>
                <Text>CONSIGNAR EN LA SIGUIENTE CUENTA</Text>
              </View>
            </View>

            {/* Last table */}

            <View style={[styles.table_row_left]}>
              <View style={{ width: 240 }}>
                <Text>CUENTA DE AHORROS DEL BANCO DE OCCIDENTE: </Text>
              </View>
            </View>
            <View style={[styles.table_row_right]}>
              <View style={{ width: 262 }}>
                <Text>800-96222-7</Text>
              </View>
            </View>
            <View style={[styles.table_row_left]}>
              <View style={{ width: 240 }}>
                <Text>A NOMBRE DE:</Text>
              </View>
            </View>
            <View style={[styles.table_row_right]}>
              <View style={{ width: 262 }}>
                <Text>
                  ACCION FIDUCIARIA PATRIMONIOS AUTONOMOS FA 4675 FIDEICOMISO
                  ALUMBRADO PUBLICO SANTA ROSA
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.table_row_left,
                { borderBottom: "1px solid black" },
              ]}
            >
              <View style={{ width: 240 }}>
                <Text>NIT:</Text>
              </View>
            </View>
            <View
              style={[
                styles.table_row_right,
                { borderBottom: "1px solid black" },
              ]}
            >
              <View style={{ width: 262 }}>
                <Text>8050129210</Text>
              </View>
            </View>
            <Text style={{ marginTop: "5px" }}>
              Enviar soporte de pago al correo electrónico:
              alumbradopublicosantarosa@gmail.com
            </Text>
            <Text style={{ marginTop: "10px" }}>
              Contra la presente Liquidación Oficial del Impuesto de Alumbrado
              Público, procede el recurso de reconsideración de que trata el
              artículo 720 del Estatuto Tributario Nacional, el cual deberá
              interponerse dentro de los dos (2) meses siguientes a su
              notificación, cumpliendo los requisitos señalados en el artículo
              722 del mismo ordenamiento jurídico, y presentarla en la oficina
              de la Secretaria de Hacienda del Municipio.
            </Text>

            <View style={{ marginTop: "60px", marginBottom: "10px" }}>
              <View style={[styles.row, styles.p_center]}>
                <Text style={{}}>EDGAR GUERRERO</Text>
              </View>
              <View style={[styles.row, styles.p_center]}>
                <Text>SECRETARIO DE HACIENDA</Text>
              </View>
            </View>
            <View>
              <View
                style={[
                  styles.view,
                  { borderTop: "3px solid #00B050", margin: "0px" },
                ]}
              ></View>
              <View
                style={[
                  styles.view,
                  { borderTop: "6px solid #EA0000", margin: "0px" },
                ]}
              ></View>
              <View style={[styles.row, styles.p_center]}>
                <Text>“Unidos Hacemos Más por Santa Rosa”</Text>
              </View>
              <View style={[styles.row, styles.p_center]}>
                <Text>
                  CALLE 16 Nº 27-71. TEL 6297108. Página web:
                  www.santarosadelnorte-bolivar.gov.co
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
