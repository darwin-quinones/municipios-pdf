import React from "react";
import { Page, Image, Text, Document, View } from "@react-pdf/renderer";
import { styles } from "./StylosFacturacionMunicipios";
import escudoColombia from "../img/EscudoColombia.png";
import escudoSantaRosa from "../img/EscudoSantaRosa.png";
import escudoMagangue from "../Images/Magangue/Escudo Magangue.png";
import escudoSanJuanCesar from '../Images/San Juan del Cesar/Escudo San Juan del Cesar.png'
import escudoAlcaldiaSanJuanCesar from '../Images/San Juan del Cesar/Escudo Alcaldia.png'
import escudo1AlcaldiaSanJuanC from '../Images/San Juan del Cesar/Escudo 1.png'

let alcaldia = "ALCALDIA MUNICIPAL DE SAN JUAN DEL CESAR";

const headerPDF = () => {
  switch (alcaldia) {
    case "ALCALDIA MUNICIPAL DE MAGANGUE":
      return (
        <View style={styles.row}>
          <View style={styles.col_lg_3}>
            <Image
              style={styles.img}
              src={escudoMagangue}
              alt="img escudo de magangue"
            />
          </View>
          <View style={[styles.col_header_magangue]}>
            <View style={[styles.col_row_3_magangue]}>
              <Text style={{ fontSize: "9px" }}>
                ALCALDIA MUNICIPAL DE MAGANGUE
              </Text>
              <Text style={{ fontSize: "9px" }}>NIT 8000284322</Text>
            </View>

            <View style={[styles.col_row_3_magangue]}>
              <Text style={{ fontSize: "8px" }}>
                LIQUIDACIÓN IMPUESTO ALUMBRADO PÚBLICO
              </Text>
            </View>
            <View style={[styles.col_row_3_2_magangue]}>
              <Text style={{ fontSize: "9px" }}>
                SECRETARÍA DE HACIENDA MUNICIPAL
              </Text>
            </View>
          </View>
          <View style={[styles.col_header_magangue_small]}>
            <View style={[styles.col_row_3_magangue_small]}>
              <Text style={{ fontSize: "9px" }}>Vigencia:</Text>
              <Text style={{ fontSize: "9px" }}>01/08/2018</Text>
            </View>

            <View style={[styles.col_row_3_magangue_small]}>
              <Text style={{ fontSize: "9px" }}> </Text>
            </View>
            <View style={{ width: "59px" }}>
              <Text style={{ fontSize: "9px" }}>Versión: 01</Text>
            </View>
          </View>

          <View style={styles.col_lg_3}>
            <Image
              style={styles.img}
              src={escudoColombia}
              alt="img escudo de colombia"
            />
          </View>
        </View>
      );
    case 'ALCALDIA MUNICIPAL DE SAN JUAN DEL CESAR':
      return(
        <View style={styles.row}>
          <View style={styles.col_img_header_sanJuanC}>
            <Image
              style={styles.img}
              src={escudoSanJuanCesar}
              alt="img escudo de san juan del cesar"
            />
          </View>
          <View style={[styles.col_img_header_sanJuanC]}>
            <View style={{width: '125px'}}>
              <Text style={{ fontSize: "7px" }}>
              REPUBLICA DE COLOMBIA
              </Text>
              <Text style={{ fontSize: "7px" }}>
              DEPARTAMENTO DE LA GUAJIRA
              </Text>
              <Text style={{ fontSize: "7px" }}>
              MUNICIPIO DE SAN JUAN DEL CESAR
              </Text>
              <Text style={{ fontSize: "7px" }}>
              NIT. 892115179
              </Text>
            </View>

          </View>
          <View style={[styles.col_img_header_sanJuanC]}>
          <Image
              style={styles.img}
              src={escudoAlcaldiaSanJuanCesar}
              alt="img escudo de alcaldia de san juan del cesar"
            />
          </View>

          <View style={styles.col_img_header_sanJuanC}>
            <Image
              style={styles.img}
              src={escudo1AlcaldiaSanJuanC}
              alt="img escudo 1 de san juan c"
            />
          </View>
        </View>
      )

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
              <Text style={[styles.color_text_row]} className="text-danger">
                REPÚBLICA DE COLOMBIA
              </Text>
            </View>
            <View style={[styles.col_row_3]} className="row border">
              <Text style={[styles.color_text_row]} className="text-danger">
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
};

const footerPDF = () => {
  switch (alcaldia) {
    case "ALCALDIA MUNICIPAL DE MAGANGUE":
      return (
        <View>
          <View style={{ marginTop: "50px", marginBottom: "10px" }}>
            <View style={[styles.row, styles.p_center]}>
              <Text style={{}}>DIRECTOR FINANCIERO</Text>
            </View>
            <View style={[styles.row, styles.p_center]}>
              <Text>Magangué (Bolivar)</Text>
            </View>
          </View>
          <View>
            <View style={[styles.row, styles.p_center]}>
              <Text style={{}}>"Magangué educada, comunal e incluyente"</Text>
            </View>
            <View style={[styles.row, styles.p_center]}>
              <View style={[styles.line_footer_magangue]}></View>
            </View>
            <View style={[styles.row, styles.p_center]}>
              <Text>
                Alcadía Municipal de Magangué - Calle 16B No. 16a - 208 Barrio
                San Martín
              </Text>
            </View>
            <View style={[styles.row, styles.p_center]}>
              <Text>Teléfono: 6877720 - 6876020</Text>
            </View>
            <View style={[styles.row, styles.p_center]}>
              <View style={[styles.line_footer_magangue]}></View>
            </View>
          </View>
        </View>
      );
    default:
      return (
        <View>
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
      );
  }
};
const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body} size="A4" className="border">
        <View style={styles.view} className="view container text-center">
          {/* FUNTION THAT RETURNS THE HEADER */}
          {headerPDF()}

          <View style={[styles.row]}>
            <View style={[styles.row, styles.row_align]}>
              <View style={[styles.p]}>
                <Text style={[]}>Fecha Emisión: 21/07/2022</Text>
              </View>
              <View style={[styles.p_end]}>
                <Text style={[]}>Fecha Impresión: 22/02/2023</Text>
              </View>
            </View>

            <View style={[styles.row, styles.p_center, { marginTop: "10px" }]}>
              <Text style={[]}>LIQUIDACIÓN OFICIAL NO. 13112022-28</Text>
            </View>

            <View
              style={[styles.row, styles.p_center, { marginBottom: "10px" }]}
            >
              <Text style={[]}>IMPUESTO ALUMBRADO PÚBLICO</Text>
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
            {footerPDF()}
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


