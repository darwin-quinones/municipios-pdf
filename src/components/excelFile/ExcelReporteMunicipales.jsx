import React from 'react';
import * as XLSX from 'xlsx/xlsx.mjs';

const data = [
    {
        DEPARTAMENTO: 'BOLIVAR', MUNICIPIO: 'MAGANGUE', C_COBRO: '12345', VALOR_C_C: '20000', FECHA_C_C: '25/01/2023', FECHA_ENTREGA: '25/01/2023', FECHA_VENCIMIENTO: '25/01/2023', PERIODO: '', ESTADO_C_C:'ACTIVA',
        OBSERV_C_C: 'NO', VALOR_RECAUDO: '8064990', C_C_VENCIDAS: '8064990', FECHA_RECA_BITACORA: '25/01/2023', FECHA_CREACION_RECA: '25/01/2023', ESTADO_RECAUDO: 'PAGADO', OBSERV_RECAUDO: 'NO'
    },
    {
        DEPARTAMENTO: 'BOLIVAR', MUNICIPIO: 'MAGANGUE', C_COBRO: '12345', VALOR_C_C: '20000', FECHA_C_C: '25/01/2023', FECHA_ENTREGA: '25/01/2023', FECHA_VENCIMIENTO: '25/01/2023', PERIODO: '', ESTADO_C_C:'ACTIVA',
        OBSERV_C_C: 'NO', VALOR_RECAUDO: '8064990', C_C_VENCIDAS: '8064990', FECHA_RECA_BITACORA: '25/01/2023', FECHA_CREACION_RECA: '25/01/2023', ESTADO_RECAUDO: 'PAGADO', OBSERV_RECAUDO: 'NO'
    }
]

const ExcelReporteMunicipales = () => {
    const DescargarExcelReporteMunicipales = () => {
        let workBook = XLSX.utils.book_new()
        let workSheet = XLSX.utils.json_to_sheet(data)

        XLSX.utils.book_append_sheet(workBook, workSheet, 'MySheet')
        XLSX.writeFile(workBook, 'excel reporte municipales.xlsx')
    }
    
    return (
        <div>
            <h2>Descargar excel reportes municipales</h2>
            <button onClick={ () => DescargarExcelReporteMunicipales() }>Descargar</button>
        </div>
    );
}

export default ExcelReporteMunicipales;
