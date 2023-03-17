import React from "react";
import { Page, Image, Text, Document, View } from "@react-pdf/renderer";
import { styles } from "./StylosFacturacionMunicipios";
import escudoColombia from "../img/EscudoColombia.png";
import escudoSantaRosa from "../img/EscudoSantaRosa.png";
import escudoMagangue from "../Images/Magangue/Escudo Magangue.png";
import escudoSanJuanCesar from "../Images/San Juan del Cesar/Escudo San Juan del Cesar.png";
import escudoAlcaldiaSanJuanCesar from "../Images/San Juan del Cesar/Escudo Alcaldia.png";
import escudo1AlcaldiaSanJuanC from "../Images/San Juan del Cesar/Escudo 1.png";
import escudoAlcaldiaArjona from "../Images/Arjona/Escudo Alcaldia Arjona.png";
import membreteSanJacinto from "../Images/San Jacinto/Membrete San Jacinto 1.png";
import membreteElPaso from "../Images/El Paso/Membrete El Paso 1.png";
import escudosVillaNueva from "../Images/Villanueva-Bolivar/Escudos Villanueva - Colombia.png";
import escudoAgustinCodazzi from "../Images/Agustin Codazzi/Escudo Agustin Codazzi.png";
import escudoAgustinCodazzi2 from "../Images/Agustin Codazzi/Escudo Agustin Codazzi 2.png";
import escudoElCopey1 from "../Images/El Copey/Escudo 1 El Copey.png";
import escudoElCopey2 from "../Images/El Copey/Escudo 2 El Copey.png";
import escudoLaPaz from '../Images/La Paz/Escudo La Paz.png'
// let alcaldia = "ALCALDIA MUNICIPAL DE MAGANGUE";
// let alcaldia = "ALCALDIA MUNICIPAL DE SAN JUAN DEL CESAR";
// let alcaldia = 'ALCALDIA MUNICIPAL DE ARJONA';
// let alcaldia = 'ALCALDIA MUNICIPAL DE SAN JACINTO'
// let alcaldia = 'ALCALDIA MUNICIPAL DE EL PASO'
// let alcaldia = 'ALCALDIA MUNICIPAL DE SANTA ROSA'
// let alcaldia = "ALCALDIA MUNICIPAL DE VILLANUEVA-BOLIVAR";
// let alcaldia = "ALCALDIA MUNICIPAL DE AGUSTIN CODAZZI";
// let alcaldia = "ALCALDIA MUNICIPAL DE EL COPEY";
let alcaldia = 'ALCALDIA MUNICIPAL DE LA PAZ'


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
    case "ALCALDIA MUNICIPAL DE SAN JUAN DEL CESAR":
      return (
        <View style={styles.row}>
          <View style={styles.col_img_header_sanJuanC}>
            <Image
              style={styles.img}
              src={escudoSanJuanCesar}
              alt="img escudo de san juan del cesar"
            />
          </View>
          <View style={[styles.col_img_header_sanJuanC, { width: "200px" }]}>
            <View style={{ width: "200px" }}>
              <Text style={{ fontSize: "9px" }}>REPUBLICA DE COLOMBIA</Text>
              <Text style={{ fontSize: "9px" }}>
                DEPARTAMENTO DE LA GUAJIRA
              </Text>
              <Text style={{ fontSize: "9px" }}>
                MUNICIPIO DE SAN JUAN DEL CESAR
              </Text>
              <Text style={{ fontSize: "9px" }}>NIT. 892115179</Text>
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
      );
    case "ALCALDIA MUNICIPAL DE ARJONA":
      return (
        <View style={styles.row}>
          <View style={styles.col_img_header}>
            <Image
              style={[{ height: "80px" }]}
              src={escudoAlcaldiaArjona}
              alt="img escudo de arjona"
            />
          </View>
        </View>
      );
    case "ALCALDIA MUNICIPAL DE SAN JACINTO":
      return (
        <View style={styles.row}>
          <View style={styles.col_img_header}>
            <Image
              style={[{ maxWidth: "60%" }]}
              src={membreteSanJacinto}
              alt="img membrete san jacinto"
            />
          </View>
        </View>
      );
    case "ALCALDIA MUNICIPAL DE EL PASO":
      return (
        <View style={styles.row}>
          <View style={styles.col_img_header}>
            <Image
              style={[{ maxWidth: "60%" }]}
              src={membreteElPaso}
              alt="img membrete el paso"
            />
          </View>
        </View>
      );
    case "ALCALDIA MUNICIPAL DE SANTA ROSA":
      return (
        <View style={styles.row}>
          <View style={styles.col_lg_3}>
            <Image
              style={styles.img}
              src={escudoColombia}
              alt="img escudo de colombia"
            />
          </View>
          <View style={[styles.col_lg_6]}>
            <View style={[styles.col_row_3]}>
              <Text style={[styles.color_text_row]}>REPÚBLICA DE COLOMBIA</Text>
            </View>
            <View style={[styles.col_row_3]}>
              <Text style={[styles.color_text_row]}>
                DEPARTAMENTO DE BOLÍVAR
              </Text>
            </View>
            <View style={[styles.col_row_3_2]}>
              <Text style={[styles.main_text]}>
                ALCALDIA MUNICIPAL DE SANTA ROSA
              </Text>
              <Text style={[styles.main_text]}>NIT 8904813433</Text>
            </View>
          </View>

          <View style={styles.col_lg_3}>
            <Image
              style={styles.img}
              src={escudoSantaRosa}
              alt="img escudo de colombia"
            />
          </View>
        </View>
      );
    case "ALCALDIA MUNICIPAL DE VILLANUEVA-BOLIVAR":
      return (
        <View style={styles.row}>
          <View style={styles.col_img_header}>
            <Image
              style={[{ maxWidth: "60%" }]}
              src={escudosVillaNueva}
              alt="img escudos villanueva Bolivar"
            />
          </View>
        </View>
      );
    case "ALCALDIA MUNICIPAL DE AGUSTIN CODAZZI":
      return (
        <View>
          <View style={styles.row}>
            <View style={styles.col_lg_3}>
              <Image
                style={styles.img}
                src={escudoAgustinCodazzi}
                alt="img escudo de agustin codazzi"
              />
            </View>
            <View style={[styles.col_header_agustinC]}>
              <Text style={{ fontSize: "10px" }}>REPUBLICA DE COLOMBIA</Text>
              <Text style={{ fontSize: "10px" }}>DEPARTAMENTO DEL CESAR</Text>
              <Text style={{ fontSize: "10px" }}>
                ALCALDIA MUNICIPAL DE AGUSTIN CODAZZI CESAR
              </Text>
              <Text style={{ fontSize: "10px" }}>NIT 8000965581</Text>
            </View>

            <View style={styles.col_lg_3}>
              <Image
                style={styles.img}
                src={escudoAgustinCodazzi2}
                alt="img escudo de agustin codazzi2"
              />
            </View>
          </View>
          <View style={[styles.row, { paddingTop: "1px" }]}>
            <View style={[styles.col_header_agustinC2, { height: "20px" }]}>
              <Text style={{ fontSize: "5px" }}>VERSIÓN: 01</Text>
              <Text style={{ fontSize: "5px" }}>ACTUALIZACION: 13/02/2020</Text>
            </View>
            <View style={[styles.col_header_agustinC]}>
              <Text style={{ fontSize: "10px" }}>SECRETARIA DE HACIENDA</Text>
            </View>
            <View style={[styles.col_header_agustinC2, { width: "65px" }]}>
              <View
                styles={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: "5px" }}>ESTADO: CONTROLADO</Text>
              </View>
            </View>
            <View style={[styles.col_header_agustinC2, { width: "45px" }]}>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: "5px" }}>Página 1 de 2</Text>
              </View>
            </View>
          </View>
        </View>
      );
    case "ALCALDIA MUNICIPAL DE EL COPEY":
      return (
        <View style={styles.row}>
          <View style={styles.col_lg_3}>
            <Image
              style={styles.img}
              src={escudoElCopey1}
              alt="img escudo 1 de El Copey"
            />
          </View>
          <View style={[styles.col_header_agustinC]}>
            <View style={[{ borderBottom: " 1px solid black", color: "red" }]}>
              <Text style={{ fontSize: "10px" }}>RÉPUBLICA DE COLOMBIA</Text>
            </View>
            <View style={[{ borderBottom: " 1px solid black", color: "red" }]}>
              <Text style={{ fontSize: "10px" }}>DEPARTAMENTO DEL CESAR</Text>
            </View>
            <View style={[{ }]}>
              <Text style={{ fontSize: "10px" }}>
                ALCALDIA MUNICIPAL DE EL COPEY{" "}
              </Text>
              <Text style={{ fontSize: "10px" }}>NIT 8000965875</Text>
            </View>
          </View>

          <View style={styles.col_lg_3}>
            <Image
              style={[{height: '60px'}]}
              src={escudoElCopey2}
              alt="img escudo 2 de El Copey"
            />
          </View>
        </View>
      );
    case 'ALCALDIA MUNICIPAL DE LA PAZ':
      return(
        <View style={styles.row}>
          <View style={styles.col_lg_3}>
            <Image
              style={styles.img}
              src={escudoLaPaz}
              alt="img escudo de la paz"
            />
          </View>
          <View style={[styles.col_header_agustinC]}>
            <View style={[{ borderBottom: " 1px solid black", }]}>
              <Text style={{ fontSize: "10px" }}>ALCALDIA MUNICIPAL DE LA PAZ</Text>
              <Text>NIT 8000966051</Text>
            </View>
          
            <View style={[{ }]}>
              <Text style={{ fontSize: "10px" }}>
                ALCALDIA MUNICIPAL DE EL COPEY{" "}
              </Text>
              <Text style={{ fontSize: "10px" }}>NIT 8000965875</Text>
            </View>
          </View>

          <View style={styles.col_lg_3}>
            <Image
              style={styles.img}
              src={escudoLaPaz}
              alt="img escudo de la paz"
            />
          </View>
        </View>
      )
    default:
      return (
        <View style={styles.row}>
          <View style={styles.col_lg_3}>
            <Image
              style={styles.img}
              src={escudoColombia}
              alt="img escudo de colombia"
            />
          </View>
          <View style={[styles.col_lg_6]}>
            <View style={[styles.col_row_3]}>
              <Text style={[styles.color_text_row]}>REPÚBLICA DE COLOMBIA</Text>
            </View>
            <View style={[styles.col_row_3]}>
              <Text style={[styles.color_text_row]}>
                DEPARTAMENTO DE BOLÍVAR
              </Text>
            </View>
            <View style={[styles.col_row_3_2]}>
              <Text style={[styles.main_text]}>
                ALCALDIA MUNICIPAL DE SANTA ROSA
              </Text>
              <Text style={[styles.main_text]}>NIT 8904813433</Text>
            </View>
          </View>

          <View style={styles.col_lg_3}>
            <Image
              style={styles.img}
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
            <View style={[styles.row_line, styles.p_center]}>
              <View style={[styles.line_footer_magangue]}></View>
            </View>
          </View>
        </View>
      );
    case "ALCALDIA MUNICIPAL DE SAN JUAN DEL CESAR":
      return (
        <View>
          <View style={{ marginTop: "50px", marginBottom: "10px" }}>
            <View style={[styles.row, styles.p_center]}>
              <Text style={{}}>DIEGO VEGA</Text>
            </View>
            <View style={[styles.row, styles.p_center]}>
              <Text>SECRETARIO DE HACIENDA</Text>
            </View>
          </View>
          <View style={{ marginTop: "10px" }}>
            <View style={[styles.row, styles.p_center]}>
              <Text style={{}}>
                Dirección: Calle 7 # 9ª-36 Avenida Manuel Antonio Dávila –
                Teléfono: (095) 7740090
              </Text>
            </View>
            <View style={[styles.row, styles.p_center]}>
              <Text>
                – (095) 7740000 www.sanjuandelcesar-laguajira.gov.co - Email:
              </Text>
            </View>
            <View style={[styles.row, styles.p_center]}>
              <Text>
                alcaldia@sanjuandelcesar-laguajira.gov.co Código Postal: 444030
              </Text>
            </View>
            <View style={[styles.row_line, styles.p_center]}>
              <View style={[styles.line_footer_sanJuanC]}></View>
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
