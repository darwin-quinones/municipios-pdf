import React from 'react';
import * as XLSX from 'xlsx/xlsx.mjs';

const ExcelReporteComercializadores = () => {

    const data = [
        {
            DEPARTAMENTO: 'BOLIVAR', MUNICIPIO: 'ARJONA', COMERCIALIZADOR: 'DICELER S.A. E.S.P.',
            FECHA_FACT: '20/01/2023', PERIODO: '202212', VALOR_FACT: 32272172, AJUSTES_FACT: 0, VALOR_RECA: 11242120,
            AJUSTES_RECA: 0, VALOR_ENER: 10032450, CUOTA_ENER: 1209670, OTROS_AJUSTES: 0, VALOR_FAVOR: 11242120, CONSUMO: 18288,
            ESTADO_FACT: 'PAGADA', ESTADO_RECAUDO: 'PAGADA', FECHA_RECA_BITACORA: '31/01/2023'
        },
        {
            DEPARTAMENTO: 'BOLIVAR', MUNICIPIO: 'ARJONA', COMERCIALIZADOR: 'DICELER S.A. E.S.P.',
            FECHA_FACT: '20/01/2023', PERIODO: '202212', VALOR_FACT: 32272172, AJUSTES_FACT: 0, VALOR_RECA: 11242120,
            AJUSTES_RECA: 0, VALOR_ENER: 10032450, CUOTA_ENER: 1209670, OTROS_AJUSTES: 0, VALOR_FAVOR: 11242120, CONSUMO: 18288,
            ESTADO_FACT: 'PAGADA', ESTADO_RECAUDO: 'PAGADA', FECHA_RECA_BITACORA: '31/01/2023'
        },
        {
            DEPARTAMENTO: 'BOLIVAR', MUNICIPIO: 'ARJONA', COMERCIALIZADOR: 'DICELER S.A. E.S.P.',
            FECHA_FACT: '20/01/2023', PERIODO: '202212', VALOR_FACT: 32272172, AJUSTES_FACT: 0, VALOR_RECA: 11242120,
            AJUSTES_RECA: 0, VALOR_ENER: 10032450, CUOTA_ENER: 1209670, OTROS_AJUSTES: 0, VALOR_FAVOR: 11242120, CONSUMO: 18288,
            ESTADO_FACT: 'PAGADA', ESTADO_RECAUDO: 'PAGADA', FECHA_RECA_BITACORA: '31/01/2023'
        },
    ]
    const DescargarExcelReporteComercializadores = () => {
        var workBook = XLSX.utils.book_new()
        var workSheet = XLSX.utils.json_to_sheet(data)

        XLSX.utils.book_append_sheet(workBook, workSheet, 'MySheet')
        XLSX.writeFile(workBook, "Excel reporte comercializadores.xlsx")
    }

    return (
        <div>
            <h2>Descargar Excel reporte comercializadores</h2>
            <button onClick={ () => DescargarExcelReporteComercializadores() }>Descargar</button>

        </div>
    );
}

export default ExcelReporteComercializadores;
