import React, { Component } from "react";
import { render } from "react-dom";
import { Document, Packer, Paragraph, TextRun, Table, TableCell, TableRow, ImageRun, BorderStyle, VerticalAlign, AlignmentType, Spacing, Indent, PageBreak, Alignment } from "docx";


import { saveAs } from "file-saver";
import * as fs from "fs";
import { Children } from "react";
interface AppProps { }
interface AppState {
    name: string;
}

async function urlToBlob(url) {
    const blob = await fetch(
        url
    ).then(r => r.blob());
    return blob;
}

export const WordCartaCobroPersuasivo = class WordCartaCobroPersuasivo extends Component<AppProps, AppState> {
    constructor(props) {
        super(props);
        this.state = {
            name: "React"
        };
    }



    generate(): void {

        const doc = new Document({
            sections: [
                {
                    properties: {},
                    children: [
                        // new Paragraph({
                        //     children: [
                        //         new ImageRun({
                        //             data: urlToBlob('https://i.imgur.com/2Z2WySD.png'),
                        //             transformation: {
                        //                 width: 100,
                        //                 height: 100,
                        //             },
                        //         }),
                        //     ],
                        // }),
                        new Paragraph({
                            children: [
                                new TextRun({ text: `SANTA ROSA, 01 de junio del 2023`, break: 1 }),
                                new TextRun({ text: `Señores:`, break: 2, bold: true }),
                                new TextRun({ text: `interconexion ELECTRICA S.A. E.S.P.`, allCaps: true, break: 1 }),
                                new TextRun({ text: `NIT o CC 8600166103`, break: 1, }),
                                new TextRun({ text: `Dirección: calle 000 # 111`, break: 1 }),
                            ],
                        }),
                        new Paragraph({
                            children: [new TextRun({ text: `Aviso único de cobro persuasivo`, color: '#FF0000'})], alignment: AlignmentType.END,
                        }),
                        new Paragraph({
                            children: [new TextRun({ text: `Cordial saludo,` }),]
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({ break: 1, text: `Apreciado contribuyente, con el cumplimiento del pago del IMPUESTO DE ALUMBRADO PUBLICO, es posible generar inversiones en infraestructura y operación del servicio de alumbrado público, le invitamos a hacer parte del `}),
                                new TextRun({ text: `PLAN DE NORMALIZACIÓN DE CARTERA.`, bold: true}),
                            ],alignment: AlignmentType.JUSTIFIED
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({break: 1, text: `Es nuestro deber informarle que, ante el incumplimiento de las obligaciones tributarias sustanciales, el Municipio se encuentra obligado a adelantar el `, size: 30 }),
                                new TextRun({text: `PROCEDIMIENTO ADMINISTRATIVO DE COBRO COACTIVO `, color: '#FF0000', size: 30}),
                                new TextRun({ text: `para la recuperación de la cartera vencida del Impuesto de Alumbrado Público.`, size: 24, font: 'Arial Narrow'}),
                            ],alignment: AlignmentType.JUSTIFIED, 
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({ break: 1, text: `En virtud de lo anterior, el municipio se encuentra facultado para la aplicación de medidas cautelares tales como: ` }),
                                new TextRun({ text: `EMBARGO DE DINERO, SECUESTRO DE BIENES Y POSTERIOR REMATE DE TODO TIPO`, color: '#FF0000'}),
                                new TextRun({ text: `, muebles e inmuebles, así como disponer de los depósitos de las cuentas bancarias, títulos valores, acciones en sociedades, cuotas sociales, etc. Adicionalmente el Municipio se verá obligado a reportarlo al `}),
                                new TextRun({ text: `boletín de deudores morosos de la Contaduría General de la Nación, `, bold: true}),
                                new TextRun({ text: `reporte que lo inhabilitaría en Entidades Financieras, contratación o vinculación con el Estado Colombiano. `,}),
                            ], alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({ break:1, text: `Una vez verificado en nuestras bases de datos, se detectó que, a la fecha, presenta mora en el pago de su(s) obligación(es), correspondientes al Impuesto de Alumbrado Público e intereses moratorios, sobre los períodos que a continuación se relacionan: ` }),
                            ], alignment: AlignmentType.JUSTIFIED
                        }),
                        //  FINAL PARRAFOS DEL ENCABEZADO

                        //  TABLE
                        new Table({
                            width: { size: '100%' },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "No.:", bold: true })], alignment: AlignmentType.CENTER, })],
                                            width: { size: "10%" }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "Documento", bold: true })], alignment: AlignmentType.CENTER })],
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ text: "1", alignment: AlignmentType.CENTER, spacing: { before: 100 } })],
                                            width: { size: "10%" },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: 'Informes Operativos', spacing: { before: 100, after: 100 }, indent: { left: 100, }, })],
                                        }),

                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ text: "1.1", alignment: AlignmentType.CENTER, spacing: { before: 100 } })],
                                            width: { size: "10%" },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: 'Listado de reportes de daños de luminarias de Alumbrado Público presentado por los usuarios.', spacing: { before: 100, after: 100 }, indent: { left: 100, }, },)],
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ text: "1.2", alignment: AlignmentType.CENTER, spacing: { before: 330 } })],
                                            width: { size: "10%" },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: 'Listado de luminarias a las cuales se les realizó mantenimiento indicando: fecha de mantenimiento, código de luminaria a la cual se le realizo el mantenimiento, elementos cambiados a la luminaria y dirección y/o lugar de ubicación de la luminaria.', spacing: { before: 100, after: 100 }, indent: { left: 100, }, })],
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ text: "1.3", alignment: AlignmentType.CENTER, spacing: { before: 100 } })],
                                            width: { size: "10%" },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: 'Expansiones en alumbrado público realizadas en el periodo.', spacing: { before: 100, after: 100 }, indent: { left: 100, }, })],
                                        }),
                                    ],
                                }),

                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ text: "2", alignment: AlignmentType.CENTER, spacing: { before: 650 } })],
                                            width: { size: "10%" },
                                        }),
                                        new TableCell({
                                            children: [
                                                new Paragraph({ text: 'Informe de gestión donde se evidencian el resultado de los indicadores contractuales del mes y que incluye lo siguiente:', spacing: { before: 100, after: 50, }, indent: { left: 100, } },),
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({ text: '\n•  Efectividad de ejecución de mantenimientos preventivos.', break: 1, }),
                                                        new TextRun({ text: '\n•  Efectividad de ejecución para cerrar solicitudes.', break: 1 }),
                                                        new TextRun({ text: '\n•  Plazo medio de resolución.', break: 1 })
                                                    ],
                                                    indent: { left: 300, },
                                                    spacing: { after: 100 }
                                                },)
                                            ],
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ text: "3", alignment: AlignmentType.CENTER, spacing: { before: 100 } })],
                                            width: { size: "10%" },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: 'Conciliación de facturación y recaudo del impuesto de alumbrado público mensual.', spacing: { before: 100, after: 100 }, indent: { left: 100, }, })],
                                        }),

                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ text: "4", alignment: AlignmentType.CENTER, spacing: { before: 100 } })],
                                            width: { size: "10%" },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: 'Extracto Fiduciarios y Bancarios.', spacing: { before: 100, after: 100 }, indent: { left: 100, }, })],
                                        }),

                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ text: "5", alignment: AlignmentType.CENTER, spacing: { before: 100 } })],
                                            width: { size: "10%" },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: 'Copia de factura por operación y mantenimiento y retorno a la inversión.', spacing: { before: 100, after: 100 }, indent: { left: 100, }, })],
                                        }),

                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ text: "6", alignment: AlignmentType.CENTER, spacing: { before: 100 } })],
                                            width: { size: "10%" },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: 'Ordenes de traslado Encargo Fiduciario.', spacing: { before: 100, after: 100 }, indent: { left: 100, }, })],
                                        }),

                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ text: "7", alignment: AlignmentType.CENTER, spacing: { before: 200 } })],
                                            width: { size: "10%" },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: 'Certificado de pago oportuno a los sistemas de seguridad social en salud, pensión, riesgos profesionales, correspondientes a los trabajadores y/o empleados durante el último mes.', spacing: { before: 100, after: 100 }, indent: { left: 100, }, })],
                                        }),

                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ text: "8", alignment: AlignmentType.CENTER, spacing: { before: 100 } })],
                                            width: { size: "10%" },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: 'Pólizas de garantía del contrato de concesión de alumbrado público.', spacing: { before: 100, after: 100 }, indent: { left: 100, }, })],
                                        }),

                                    ],
                                }),

                            ],
                        }),
                        // FIN FIRST TABLE

                        // PAGE BREAK
                        new Paragraph({ children: [new TextRun(''), new PageBreak()] }),

                        new Paragraph({
                            children: [
                                new TextRun({ text: `Así mismo, durante el periodo se realizaron las siguientes actividades de apoyo a la gestión:`, }),
                                new TextRun({ text: `De acuerdo con lo anterior se deja constancia del cumplimiento de las obligaciones contractuales, quedando atentos a cualquier inquietud o comentario sobre la información entregada.`, break: 2 }),
                                new TextRun({ text: `Atentamente,`, break: 4 }),
                                new TextRun({ text: ``, break: 4 }),
                                new ImageRun({
                                    data: urlToBlob('https://i.imgur.com/RPnLY4c.png'),
                                    transformation: {
                                        width: 160,
                                        height: 60,
                                    },
                                }),

                                new TextRun({ text: `MELISSA ESCORCIA VARELA`, bold: true, break: 1 }),
                                new TextRun({ text: `JEFE DE OPERACIONES COMERCIALES`, break: 1 }),
                                new TextRun({ text: `UNIDAD DE ALUMBRADO PÚBLICO`, break: 1 }),
                            ],
                        }),

                        // PAGE BREAK
                        new Paragraph({ children: [new TextRun(''), new PageBreak()] }),
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({ text: `6. Conciliación de Facturación y Recaudo del Impuesto de Alumbrado Público Mensual. Periodo: Mayo 2022`, bold: true, size: 25 }),
                                new TextRun({ text: ``, break: 2 }),
                            ],
                        }),

                        // SECOND TABLE
                        new Table({
                            alignment: AlignmentType.CENTER,
                            width: { size: '100%' },
                            rows: [

                                new TableRow({
                                    children: [

                                        new TableCell({
                                            columnSpan: 5,
                                            children: [new Paragraph({ children: [new TextRun({ text: "Descripción:", bold: true })], alignment: AlignmentType.CENTER, },)],
                                        }),

                                    ],
                                }),
                                new TableRow({

                                    children: [

                                        new TableCell({
                                            columnSpan: 5,
                                            children: [new Paragraph({ children: [new TextRun({ text: "Liquidación Operador de Red.", bold: true })], alignment: AlignmentType.CENTER, })],
                                        }),

                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({

                                            children: [new Paragraph({ children: [new TextRun({ text: "FACTURADO", bold: true, size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "RECAUDO", bold: true, size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "COSTO DE ENERGIA", bold: true, size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "OTRAS DEDUCCIONES", bold: true, size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: " TRASLADO NETO", bold: true, size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "$ 336.772.500", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "$ 215.340.564", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "$ 43.259.120", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "$ 0 ", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "$ 172.081.444", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                    ],
                                }),

                            ],
                        }),
                        //  FIN TABLE

                        new Paragraph({ children: [new TextRun({ text: " ",  break: 1})], },),

                        // THIRD TABLE
                        new Table({
                            alignment: AlignmentType.CENTER,
                            width: { size: '100%' },
                            rows: [

                                new TableRow({
                                    children: [

                                        new TableCell({
                                            columnSpan: 3,
                                            children: [new Paragraph({ children: [new TextRun({ text: "Descripción:", bold: true })], alignment: AlignmentType.CENTER, },)],
                                        }),

                                    ],
                                }),
                                new TableRow({

                                    children: [

                                        new TableCell({
                                            columnSpan: 3,
                                            children: [new Paragraph({ children: [new TextRun({ text: "Facturación Otros Agentes de Recaudo.", bold: true })], alignment: AlignmentType.CENTER, })],
                                        }),

                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({

                                            children: [new Paragraph({ children: [new TextRun({ text: "FUENTE DEL RECAUDO", bold: true, size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "VALOR TRASLADO", bold: true, size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "AGENTE RECAUDADOR", bold: true, size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                       
                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "VATIA S.A. E.S.P.", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "$ 12.715.399", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "COMERCIALIZADORA", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        
                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "DICELER S.A. E.S.P.", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "$ 0", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "COMERCIALIZADORA", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        
                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "VATIA S.A. E.S.P.", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "$ 0", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "COMERCIALIZADORA", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        
                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "TOTAL", size: 17, bold: true })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "$ 12.715.399", size: 17, bold:true })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "",  })], })],
                                        }),
                                        
                                    ],
                                }),

                            ],
                        }),
                        //  FIN TABLE

                        // PAGE BREAK
                        new Paragraph({ children: [new TextRun(''), new PageBreak()] }),
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({ text: `8. Facturación por Operación y Mantenimiento y Retorno de la Inversión`, bold: true, size: 25 }),
                                new TextRun({ text: ``, break: 2 }),
                            ],
                        }),

                        // FOURTH TABLE
                        new Table({
                            alignment: AlignmentType.CENTER,
                            width: { size: '100%' },
                            rows: [

                                new TableRow({
                                    children: [

                                        new TableCell({
                                            columnSpan: 5,
                                            children: [new Paragraph({ children: [new TextRun({ text: "Descripción:", bold: true })], alignment: AlignmentType.CENTER, },)],
                                        }),

                                    ],
                                }),
                                new TableRow({

                                    children: [

                                        new TableCell({
                                            columnSpan: 5,
                                            children: [new Paragraph({ children: [new TextRun({ text: "Factura Realizada por el Concesionario.", bold: true })], alignment: AlignmentType.CENTER, })],
                                        }),

                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({

                                            children: [new Paragraph({ children: [new TextRun({ text: "NO. FACTURA", bold: true, size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "FECHA FACTURA", bold: true, size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "CONCEPTO", bold: true, size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "PERIODO", bold: true, size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "VALOR BRUTO + I.V.A.", bold: true, size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "FVA-00007132", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "2022-06-02", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "OYM", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "2022-06-01", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "$ 63.209.681", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "FVA-00007133", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "2022-06-02", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "RI", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "2022-06-01", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: "$ 74.322.501", size: 17 })], alignment: AlignmentType.CENTER, })],
                                        }),
                                    ],
                                }),

                            ],
                        }),
                        //  FIN TABLE


                    ],

                },
            ],

        });


        Packer.toBlob(doc).then(blob => {
            console.log(blob);
            saveAs(blob, "Carta cobro persuasivo.docx");
            console.log("Document created successfully");
        });
    }

    render() {
        return (
            <div>

                <p>
                    Carta Cobro Persuasivo docx :)
                    <button onClick={this.generate}>Generate docx!</button>
                </p>
            </div>
        );
    }
}



