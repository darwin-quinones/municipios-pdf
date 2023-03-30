import React from 'react';
import * as XLSX from 'xlsx/xlsx.mjs';


const data = [
    {
        DEPARTAMENTO: 'BOLIVAR', MUNICIPIO: 'ARJONA', COMERCIALIZADOR: 'DICELER S.A. E.S.P.',
        FECHA_FACT: '20/01/2023', PERIODO: '202212', VALOR_FACT: 32272172, AJUSTES_FACT: 0, VALOR_RECA: 11242120,
        AJUSTES_RECA: 0, VALOR_ENER: 10032450, CUOTA_ENER: 1209670, OTROS_AJUSTES: 0, VALOR_FAVOR: 11242120, CONSUMO: 18288,
        ESTADO_FACT: 'PAGADA', ESTADO_RECAUDO: 'PAGADA', FECHA_RECA_BITACORA: '31/01/2023'
    },
]

const ExcelReporteClientesEspeciales = () => {

    const DescargarExcelReporteClientesEspeciales = () => {

    }

    return (
        <div>
        <h2>Descargar excel reporte de clientes especiales</h2>
            <button onClick={ () => DescargarExcelReporteClientesEspeciales()}>Descargar</button>
        </div>
    );
}

export default ExcelReporteClientesEspeciales;
