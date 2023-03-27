import React from "react";
import { Page, Image, Text, Document, View, Note } from "@react-pdf/renderer";
import { styles } from "../styles/StylesActasInterventorias";

// IMGS
import logoAmericanLighting from "../Images/Logos/Logo American Lighting.png";
import firmaMelissaEscorcia from "../Images/Firma Melissa Escorcia.png";




const PDFActasInterventorias = () => {
  return (
    <Document>
      <Page style={styles.body} size="A4" wrap>
        <View style={styles.view}>
          {/* FUNTION THAT RETURNS THE HEADER */}
          <View style={[{ width: "505px" }]}>
            <Image
              style={[{ maxWidth: "15%", marginBottom: "15px" }]}
              src={logoAmericanLighting}
            />
            <Text style={[{ marginBottom: "25px" }]}>
              Arjona, 20 De July De 2022
            </Text>
            <Text>Señores:</Text>
            <Text style={[styles.text_bold]}>MUNICIPIO DE ARJONA</Text>
            <Text>
              Att: SUPERVISOR CONTRATO DE CONCESIÓN ALUMBRADO PÚBLICO:
            </Text>
            <Text>Bolivar - Arjona</Text>
            <Text style={[styles.text_bold]}>ASUNTO: <Text style={[styles.notBold]}>ENTREGA DE INFORME MES</Text> <Text style={[styles.text_bold]}>JUNIO 2022</Text> </Text>
            <Text style={[{ marginTop: "20px", marginBottom: "10px" }]}>
              Cordial saludo,
            </Text>
            <Text style={[{ marginBottom: "15px" }]}>
              En nuestra calidad de Concesionario nos permitimos remitir la
              información correspondiente a la gestión adelantada en el periodo
              de: <Text style={[styles.text_bold]}>Junio 2022</Text>
            </Text>
          </View>
          {/* Tables */}
          <View style={[styles.row, { marginBottom: 18 }]}>
            <View
              style={[
                styles.table_row_left,
                { justifyContent: "center", padding: "1px" },
              ]}
            >
              <Text style={[styles.text_bold]}>No.:</Text>
            </View>
            <View
              style={[
                styles.table_row_right,
                { justifyContent: "center", padding: "1px" },
              ]}
            >
              <Text style={[styles.text_bold]}>Documento</Text>
            </View>

            <View style={[styles.table_row_left]}>
              <Text style={[styles.center_text, {}]}>1</Text>
            </View>
            <View style={[styles.table_row_right, {}]}>
              <Text>Informes Operativos</Text>
            </View>

            <View style={[styles.table_row_left, {}]}>
              <Text style={[styles.center_text, {}]}>1.1</Text>
            </View>
            <View style={[styles.table_row_right, {}]}>
              <Text>
                Listado de reportes de daños de luminarias de Alumbrado Público
                presentado por los usuarios.
              </Text>
            </View>

            <View style={[styles.table_row_left, {}]}>
              <Text style={[{ marginTop: "30%" }]}>1.2</Text>
            </View>
            <View style={[styles.table_row_right, {}]}>
              <Text>
                Listado de luminarias a las cuales se les realizó mantenimiento
                indicando: fecha de mantenimiento, código de luminaria a la cual
                se le realizo el mantenimiento, elementos cambiados a la
                luminaria y dirección y/o lugar de ubicación de la luminaria.
              </Text>
            </View>

            <View style={[styles.table_row_left, {}]}>
              <Text style={[styles.center_text, {}]}>1.3</Text>
            </View>
            <View style={[styles.table_row_right, {}]}>
              <Text>
                {" "}
                Expansiones en alumbrado público realizadas en el periodo.
              </Text>
            </View>

            <View style={[styles.table_row_left, {}]}>
              <Text style={[{ marginTop: "60%" }]}>2</Text>
            </View>
            {/* List */}
            <View style={[styles.table_row_right, { flexDirection: "column" }]}>
              <Text style={[{ marginBottom: "10px" }]}>
                Informe de gestión donde se evidencian el resultado de los
                indicadores contractuales del mes y que incluye lo siguiente:
              </Text>

              <View style={[{ flexDirection: "row", paddingTop: 1 }]}>
                <Text style={{ marginHorizontal: "10px" }}>•</Text>
                <Text>
                  Efectividad de ejecución de mantenimientos preventivos.
                </Text>
              </View>
              <View style={[{ flexDirection: "row", paddingTop: 1 }]}>
                <Text style={{ marginHorizontal: "10px" }}>•</Text>
                <Text>Efectividad de ejecución para cerrar solicitudes.</Text>
              </View>
              <View style={[{ flexDirection: "row", paddingTop: 1 }]}>
                <Text style={{ marginHorizontal: "10px" }}>•</Text>
                <Text>Plazo medio de resolución.</Text>
              </View>
            </View>

            <View style={[styles.table_row_left, {}]}>
              <Text style={[styles.center_text, {}]}>3</Text>
            </View>
            <View style={[styles.table_row_right, {}]}>
              <Text>
                Conciliación de facturación y recaudo del impuesto de alumbrado
                público mensual.
              </Text>
            </View>

            <View style={[styles.table_row_left, {}]}>
              <Text style={[styles.center_text, {}]}>4</Text>
            </View>
            <View style={[styles.table_row_right, {}]}>
              <Text>Extracto Fiduciarios y Bancarios.</Text>
            </View>

            <View style={[styles.table_row_left, {}]}>
              <Text style={[styles.center_text, {}]}>5</Text>
            </View>
            <View style={[styles.table_row_right, {}]}>
              <Text>
                Copia de factura por operación y mantenimiento y retorno a la
                inversión.
              </Text>
            </View>

            <View style={[styles.table_row_left, {}]}>
              <Text style={[styles.center_text, {}]}>6</Text>
            </View>
            <View style={[styles.table_row_right, {}]}>
              <Text>Ordenes de traslado Encargo Fiduciario.</Text>
            </View>

            <View style={[styles.table_row_left, {}]}>
              <Text style={[{ marginTop: "20%" }]}>7</Text>
            </View>
            <View style={[styles.table_row_right, {}]}>
              <Text>
                Certificado de pago oportuno a los sistemas de seguridad social
                en salud, pensión, riesgos profesionales, correspondientes a los
                trabajadores y/o empleados durante el último mes.
              </Text>
            </View>

            <View
              style={[
                styles.table_row_left,
                { borderBottom: "1px solid black" },
              ]}
            >
              <Text style={[styles.center_text, {}]}>8</Text>
            </View>
            <View
              style={[
                styles.table_row_right,
                { borderBottom: "1px solid black" },
              ]}
            >
              <Text>
                Pólizas de garantía del contrato de concesión de alumbrado
                público.
              </Text>
            </View>
          </View>
          {/* Fin tabla */}
          <View style={[{ width: "505px" }]}>
            <Text>
              Así mismo, durante el periodo se realizaron las siguientes
              actividades de apoyo a la gestión:
            </Text>
            <Text style={[{ marginTop: "15px", marginBottom: "30px" }]}>
              De acuerdo con lo anterior se deja constancia del cumplimiento de
              las obligaciones contractuales,quedando atentos a cualquier
              inquietud o comentario sobre la información entregada.
            </Text>
            <Text>Atentamente,</Text>
            <Image
              style={{ maxWidth: "25%", marginTop: "30px" }}
              src={firmaMelissaEscorcia}
            />
            <Text style={[styles.text_bold]}>MELISSA ESCORCIA VARELA</Text>
            <Text>JEFE DE OPERACIONES COMERCIALES</Text>
            <Text>UNIDAD DE ALUMBRADO PÚBLICO</Text>
          </View>
        </View>
        {/* FINALIZA LA PRIMERA PARTE */}

        {/* Break page */}
        <View break style={{ width: 505, textAlign: 'center', }}>

          <Text style={[styles.text_bold, { fontSize: 13, marginBottom: 15 }]} >
            6. Conciliación de Facturación y Recaudo del Impuesto de Alumbrado
            Público Mensual. Periodo: Mayo 2022
          </Text>

          {/* New tables */}
          <View style={[styles.table_header]}>
            <Text >Descripción:</Text>
          </View>
          <View style={[styles.table_header, { borderTop: 0 }]}>
            <Text >Liquidación Operador de Red.</Text>
          </View>
          <View style={[styles.row, styles.text_bold, { border: '1px solid black', borderTop: 0, justifyContent: 'center', paddingTop: 0 }]}>
            <View style={{ width: 80, borderRight: '1px solid black', padding: 1 }}>
              <Text >FACTURADO</Text>
            </View>
            <View style={{ width: 80, borderRight: '1px solid black', padding: 1 }}>
              <Text >RECAUDO</Text>
            </View>
            <View>
              <Text style={{ width: 120, borderRight: '1px solid black', padding: 1 }}>COSTO DE ENERGIA</Text>
            </View>
            <View>
              <Text style={{ width: 120, borderRight: '1px solid black', padding: 1 }}>OTRAS DEDUCCIONES</Text>
            </View>
            <View>
              <Text style={{ width: 100, }}>TRASLADO NETO</Text>
            </View>

          </View>
          {/* Valores */}
          <View style={[styles.row, { border: '1px solid black', borderTop: 0, justifyContent: 'center', paddingTop: 0 }]}>
            <View style={{ width: 80, borderRight: '1px solid black', padding: 1 }}>
              {/* FACTURADO */}
              <Text  >$ 336.772.500</Text>
            </View>
            <View style={{ width: 80, borderRight: '1px solid black', padding: 1 }}>
              {/* RECAUDO */}
              <Text >$ 215.340.564</Text>
            </View>
            <View>
              {/* COSTO DE ENERGIA */}
              <Text style={{ width: 120, borderRight: '1px solid black', padding: 1 }}>$ 43.259.120 </Text>
            </View>
            <View>
              {/* OTRAS DEDUCCIONES */}
              <Text style={{ width: 120, borderRight: '1px solid black', padding: 1 }}>$ 0</Text>
            </View>
            <View>
              {/* TRASLADO NETO */}
              <Text style={{ width: 100, }}>$ 172.081.444</Text>
            </View>

          </View>

          {/* SECOND TABLE */}
          <View style={[styles.table_header, { marginTop: 15 }]}>
            <Text >Descripción:</Text>
          </View>
          <View style={[styles.table_header, { borderTop: 0 }]}>
            <Text >Facturación Otros Agentes de Recaudo.</Text>
          </View>

          <View style={[styles.row, styles.text_bold, { border: '1px solid black', borderTop: 0, justifyContent: 'center', paddingTop: 0 }]}>
            <View style={{ width: 180, borderRight: '1px solid black', }}>
              <Text >FUENTE DEL RECAUDO</Text>
            </View>
            <View style={{ width: 140, borderRight: '1px solid black', }}>
              <Text >VALOR TRASLADO </Text>
            </View>
            <View>
              <Text style={{ width: 180, }}>AGENTE RECAUDADOR</Text>
            </View>
          </View>

          {/* VALORES */}

          <View style={[styles.row, { border: '1px solid black', borderTop: 0, justifyContent: 'center', paddingTop: 0 }]}>
            <View style={{ width: 180, borderRight: '1px solid black', }}>
              <Text style={{fontSize: 8}}>VATIA S.A. E.S.P.</Text>
            </View>
            <View style={{ width: 140, borderRight: '1px solid black', }}>
              <Text style={{fontSize: 8}}>$ 12.715.399</Text>
            </View>
            <View>
              <Text style={{ width: 180, fontSize: 8}}>COMERCIALIZADORA</Text>
            </View>
          </View>

          <View style={[styles.row, { border: '1px solid black', borderTop: 0, justifyContent: 'center', paddingTop: 0 }]}>
            <View style={{ width: 180, borderRight: '1px solid black', }}>
              <Text style={{fontSize: 8}}>DICELER S.A. E.S.P.</Text>
            </View>
            <View style={{ width: 140, borderRight: '1px solid black', }}>
              <Text style={{fontSize: 8}}>$ 0</Text>
            </View>
            <View>
              <Text style={{ width: 180, fontSize: 8}}>COMERCIALIZADORA</Text>
            </View>
          </View>

          <View style={[styles.row, { border: '1px solid black', borderTop: 0, justifyContent: 'center', paddingTop: 0 }]}>
            <View style={{ width: 180, borderRight: '1px solid black', }}>
              <Text style={{fontSize: 8}}>NEU ENERGY S.A.S. E.S.P.</Text>
            </View>
            <View style={{ width: 140, borderRight: '1px solid black', }}>
              <Text style={{fontSize: 8}}>$ 0</Text>
            </View>
            <View>
              <Text style={{ width: 180, fontSize: 8}}>COMERCIALIZADORA</Text>
            </View>
          </View>
          {/* TOTAL */}
          <View style={[styles.row, { border: '1px solid black', borderTop: 0, justifyContent: 'center', paddingTop: 0 }]}>
            <View style={{ width: 180, borderRight: '1px solid black', }}>
              <Text style={[ styles.text_bold, {fontSize: 8}]}>TOTAL</Text>
            </View>
            <View style={{ width: 140, borderRight: '1px solid black', }}>
              <Text style={[ styles.text_bold, {fontSize: 8}]}>$ 12.715.399</Text>
            </View>
            <View>
              <Text style={{ width: 180, }}></Text>
            </View>
          </View>
        </View>
        {/* THIRD TABLE */}
        <View break style={{ width: 505, textAlign: 'center', }}>


          <Text style={[styles.text_bold, { fontSize: 13, marginBottom: 15, }]} >
            8. Facturación por Operación y Mantenimiento y Retorno de la Inversión
          </Text>
          <View style={[styles.table_header]}>
            <Text >Descripción:</Text>
          </View>
          <View style={[styles.table_header, { borderTop: 0 }]}>
            <Text >Factura Realizada por el Concesionario.</Text>
          </View>
          <View style={[styles.row, styles.text_bold, { border: '1px solid black', borderTop: 0, justifyContent: 'center', paddingTop: 0 }]}>
            <View style={{ width: 80, borderRight: '1px solid black', padding: 1 }}>
              <Text >NO. FACTURA</Text>
            </View>
            <View style={{ width: 120, borderRight: '1px solid black', padding: 1 }}>
              <Text >FECHA FACTURA</Text>
            </View>
            <View>
              <Text style={{ width: 80, borderRight: '1px solid black', padding: 1 }}>CONCEPTO</Text>
            </View>
            <View>
              <Text style={{ width: 80, borderRight: '1px solid black', padding: 1 }}>PERIODO</Text>
            </View>
            <View>
              <Text style={{ width: 120, }}>VALOR BRUTO + I.V.A.</Text>
            </View>

          </View>
          {/* Valores */}
          <View style={[styles.row, { border: '1px solid black', borderTop: 0, justifyContent: 'center', paddingTop: 0 }]}>
            <View style={{ width: 80, borderRight: '1px solid black', padding: 1 }}>
              {/* NO. FACTURA */}
              <Text style={{fontSize: 8}}>FVA-00007132</Text>
            </View>
            <View style={{ width: 120, borderRight: '1px solid black', padding: 1 }}>
              {/* FECHA FACTURA */}
              <Text style={{fontSize: 8}}>2022-06-02</Text>
            </View>
            <View>
              {/* CONCEPTO */}
              <Text style={{ width: 80, borderRight: '1px solid black', padding: 1, fontSize: 8 }}>OYM</Text>
            </View>
            <View>
              {/* PERIODO */}
              <Text style={{ width: 80, borderRight: '1px solid black', padding: 1, fontSize: 8 }}>2022-06-01</Text>
            </View>
            <View>
              {/* VALOR BRUTO + I.V.A. */}
              <Text style={{ width: 120, fontSize: 8}}>$ 63.209.681</Text>
            </View>
          </View>
          {/* Valores 2 */}
          <View style={[styles.row, { border: '1px solid black', borderTop: 0, justifyContent: 'center', paddingTop: 0 }]}>
            <View style={{ width: 80, borderRight: '1px solid black', padding: 1 }}>
              {/* NO. FACTURA */}
              <Text style={{fontSize: 8}}>FVA-00007133</Text>
            </View>
            <View style={{ width: 120, borderRight: '1px solid black', padding: 1 }}>
              {/* FECHA FACTURA */}
              <Text style={{fontSize: 8}}>2022-06-02</Text>
            </View>
            <View>
              {/* CONCEPTO */}
              <Text style={{ width: 80, borderRight: '1px solid black', padding: 1, fontSize: 8 }}>RI</Text>
            </View>
            <View>
              {/* PERIODO */}
              <Text style={{ width: 80, borderRight: '1px solid black', padding: 1, fontSize: 8 }}>2022-06-01</Text>
            </View>
            <View>
              {/* VALOR BRUTO + I.V.A. */}
              <Text style={{ width: 120, fontSize: 8}}>$ 74.322.501</Text>
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

export default PDFActasInterventorias;
