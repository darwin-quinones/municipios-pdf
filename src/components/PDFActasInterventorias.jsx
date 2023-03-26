import React from "react";
import { Page, Image, Text, Document, View, Note } from "@react-pdf/renderer";
import { styles } from "../styles/StylesActasInterventorias";

// IMGS
import logoAmericanLighting from '../Images/Logos/Logo American Lighting.png'
import firmaMelissaEscorcia from '../Images/Firma Melissa Escorcia.png'

const PDFActasInterventorias = () => {
  return (
    <Document>
      <Page style={styles.body} size="A4">
        <View style={styles.view}>
          {/* FUNTION THAT RETURNS THE HEADER */}
          <View style={[{ width: "505px", }]}>
            <Image style={[{ maxWidth: '15%', marginBottom: "15px" }]} src={logoAmericanLighting} />
            <Text style={[{ marginBottom: "25px", }]}>Arjona, 20 De July De 2022</Text>
            <Text>Señores:</Text>
            <Text>MUNICIPIO DE ARJONA</Text>
            <Text>Att: SUPERVISOR CONTRATO DE CONCESIÓN ALUMBRADO PÚBLICO:</Text>
            <Text>Bolivar - Arjona</Text>
            <Text>ASUNTO: ENTREGA DE INFORME MES JUNIO 2022</Text>
            <Text style={[{ marginTop: '20px', marginBottom: '10px' }]}>Cordial saludo,</Text>
            <Text style={[{ marginBottom: '15px' }]}>En nuestra calidad de Concesionario nos permitimos remitir la información correspondiente a la gestión adelantada en el periodo de: Junio 2022</Text>
          </View>
          {/* Tables */}
          <View style={[styles.row, {marginBottom: 18}]} >
            <View style={[styles.table_row_left, { justifyContent: "center", padding: "1px" }]}>
              <Text>No.:</Text>
            </View>
            <View style={[styles.table_row_right, { justifyContent: "center", padding: "1px" }]}>
              <Text>Documento</Text>
            </View>

            <View style={[styles.table_row_left,]}>
              <Text style={[styles.center_text, {}]}>1</Text>
            </View>
            <View style={[styles.table_row_right, {}]}>
              <Text>Informes Operativos</Text>
            </View>

            <View style={[styles.table_row_left, {}]}>
              <Text style={[styles.center_text, {}]} >1.1</Text>
            </View>
            <View style={[styles.table_row_right, {}]}>
              <Text>Listado de reportes de daños de luminarias de Alumbrado Público presentado por los usuarios.</Text>
            </View>

            <View style={[styles.table_row_left, {}]}>
              <Text style={[{ marginTop: '30%' }]}>1.2</Text>
            </View>
            <View style={[styles.table_row_right, {}]}>
              <Text>Listado de luminarias a las cuales se les realizó mantenimiento indicando: fecha de mantenimiento, código de luminaria a la cual se le realizo el mantenimiento, elementos cambiados a la luminaria y dirección y/o lugar de ubicación de la luminaria.</Text>
            </View>

            <View style={[styles.table_row_left, {}]}>
              <Text style={[styles.center_text, {}]}>1.3</Text>
            </View>
            <View style={[styles.table_row_right, {}]}>
              <Text> Expansiones en alumbrado público realizadas en el periodo.</Text>
            </View>

            <View style={[styles.table_row_left, {}]}>
              <Text style={[{ marginTop: '60%' }]}>2</Text>
            </View>
            {/* List */}
            <View style={[styles.table_row_right, { flexDirection: 'column' }]}>

              <Text style={[{ marginBottom: '10px' }]}>Informe de gestión donde se evidencian el resultado de los indicadores contractuales del mes y que incluye lo siguiente:</Text>

              <View style={[{ flexDirection: 'row', paddingTop: 1 }]}>
                <Text style={{ marginHorizontal: '10px', }}>•</Text>
                <Text>Efectividad de ejecución de mantenimientos preventivos.</Text>
              </View>
              <View style={[{ flexDirection: 'row', paddingTop: 1 }]}>
                <Text style={{ marginHorizontal: '10px', }}>•</Text>
                <Text>Efectividad de ejecución para cerrar solicitudes.</Text>
              </View>
              <View style={[{ flexDirection: 'row', paddingTop: 1 }]}>
                <Text style={{ marginHorizontal: '10px', }}>•</Text>
                <Text>Plazo medio de resolución.</Text>
              </View>

            </View>

            <View style={[styles.table_row_left, {}]}>
              <Text style={[styles.center_text, {}]}>3</Text>
            </View>
            <View style={[styles.table_row_right, {}]}>
              <Text>Conciliación de facturación y recaudo del impuesto de alumbrado público mensual.</Text>
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
              <Text>Copia de factura por operación y mantenimiento y retorno a la inversión.</Text>
            </View>

            <View style={[styles.table_row_left, {}]}>
              <Text style={[styles.center_text, {}]}>6</Text>
            </View>
            <View style={[styles.table_row_right, {}]}>
              <Text>Ordenes de traslado Encargo Fiduciario.</Text>
            </View>

            <View style={[styles.table_row_left, {}]}>
              <Text style={[{ marginTop: '20%' }]}>7</Text>
            </View>
            <View style={[styles.table_row_right, {}]}>
              <Text>Certificado de pago oportuno a los sistemas de seguridad social en salud, pensión, riesgos profesionales,
                correspondientes a los trabajadores y/o empleados durante el último mes.</Text>
            </View>

            <View style={[styles.table_row_left, { borderBottom: '1px solid black' }]}>
              <Text style={[styles.center_text, {}]} >8</Text>
            </View>
            <View style={[styles.table_row_right, { borderBottom: '1px solid black' }]}>
              <Text>Pólizas de garantía del contrato de concesión de alumbrado público.</Text>
            </View>

          </View>
          {/* Fin tabla */}
          <View style={[{ width: "505px" }]}>
            <Text>Así mismo, durante el periodo se realizaron las siguientes actividades de apoyo a la gestión:</Text>
            <Text style={[{ marginTop: "15px", marginBottom: "30px" }]}>De  acuerdo  con  lo  anterior  se  deja  constancia  del  cumplimiento  de  las  obligaciones  contractuales,quedando atentos a cualquier inquietud o comentario sobre la información entregada.</Text>
            <Text>Atentamente,</Text>
            <Image style={{maxWidth: '25%', marginTop: '30px'}} src={firmaMelissaEscorcia} />
            <Text>MELISSA ESCORCIA VARELA</Text>
            <Text>JEFE DE OPERACIONES COMERCIALES</Text>
            <Text>UNIDAD DE ALUMBRADO PÚBLICO</Text>
          
          
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
