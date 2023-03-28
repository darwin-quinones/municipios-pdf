import React, { Component } from "react";
import { render } from "react-dom";
import { Document, Packer, Paragraph, TextRun, Table, TableCell, TableRow, ImageRun, BorderStyle, VerticalAlign, AlignmentType, Spacing, Indent } from "../../../node_modules/docx/build";


import { saveAs } from "file-saver";
import { experiences, education, skills, achievements } from "./cv-data.ts";
import { DocumentCreator } from "./cv-generator.ts";
import * as fs from "fs";
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

export const WordActasInterventorias = class WordActasInterventorias extends Component<AppProps, AppState> {
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
                        new Paragraph({
                            children: [
                                new ImageRun({
                                    data: urlToBlob('https://i.imgur.com/2Z2WySD.png'),
                                    transformation: {
                                        width: 100,
                                        height: 100,
                                    },
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({ text: `Arjona, 20 De Julio De 2022`, break: 1 }),
                                new TextRun({ text: `Señores:`, break: 3 }),
                                new TextRun({ text: `MUNICIPIO DE ARJONA`, break: 1, bold: true, }),
                                new TextRun({ text: `Att: SUPERVISOR CONTRATO DE CONCESIÓN ALUMBRADO PÚBLICO`, break: 1, }),
                                new TextRun({ text: `Bolivar - Arjona`, break: 1 }),
                                new TextRun({ text: `ASUNTO:`, bold: true, break: 1 }),
                                new TextRun({ text: ` ENTREGA DE INFORME MES `, }),
                                new TextRun({ text: `JUNIO 2022`, bold: true, }),
                                new TextRun({ text: `Cordial saludo,`, break: 3 }),
                                new TextRun({ text: `En nuestra calidad de Concesionario nos permitimos remitir la información correspondiente a la gestión adelantada en el periodo de: `, break: 2 }),
                                new TextRun({ text: `Junio 2022`, bold: true, }),
                                new TextRun({ text: ` `, break: 2, }),
                            ],
                        }),
                        //  FINAL PARRAFOS DEL ENCABEZADO

                        //  TABLE
                        new Table({
                            width: { size: '100%' },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ text: "No.:", alignment: AlignmentType.CENTER })],
                                            width: { size: "10%" }
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({ text: "Documento", alignment: AlignmentType.CENTER })],
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({text: "1", alignment: AlignmentType.CENTER})],
                                            width: { size: "10%" },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph({text:'\n\nInformes Operativos', })],
                                        }),

                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({text:"1.1", alignment: AlignmentType.CENTER})],
                                            width: { size: "10%" },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph('\n\nListado de reportes de daños de luminarias de Alumbrado Público presentado por los usuarios.')],
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({text:"1.2", alignment: AlignmentType.CENTER, spacing:{before: 300}})],
                                            width: { size: "10%" },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph('\n\nListado de luminarias a las cuales se les realizó mantenimiento indicando: fecha de mantenimiento, código de luminaria a la cual se le realizo el mantenimiento, elementos cambiados a la luminaria y dirección y/o lugar de ubicación de la luminaria.')],
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({text:"1.3", alignment: AlignmentType.CENTER})],
                                            width: { size: "10%" },
                                        }),
                                        new TableCell({
                                            children: [new Paragraph('\n\nExpansiones en alumbrado público realizadas en el periodo.')],
                                        }),
                                    ],
                                }),

                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({text: "2", alignment: AlignmentType.CENTER, spacing:{before: 600} })],
                                            width: { size: "10%" },
                                        }),
                                        new TableCell({
                                            children: [
                                                new Paragraph({ text:'Informe de gestión donde se evidencian el resultado de los indicadores contractuales del mes y que incluye lo siguiente:', spacing: { before: 100, after: 50,}, indent: {left: 100,}},  ),                         
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({text: '\n•  Efectividad de ejecución de mantenimientos preventivos.', break: 1,}),
                                                        new TextRun({text: '\n•  Efectividad de ejecución para cerrar solicitudes.', break: 1}),
                                                        new TextRun({text: '\n•  Plazo medio de resolución.', break: 1})
                                                    ],
                                                    indent: {left: 300,}
                                                }, )
                                            ],
                                        }),
                                    ],
                                }),

                            ],
                            
                        }),
                    ],

                },
            ],

        });


        Packer.toBlob(doc).then(blob => {
            console.log(blob);
            saveAs(blob, "lo-lograste.docx");
            console.log("Document created successfully");
        });
    }

    render() {
        return (
            <div>

                <p>
                    Start editing to see some magic happen :)
                    <button onClick={this.generate}>Generate CV with docx!</button>
                </p>
            </div>
        );
    }
}



