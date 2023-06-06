import React, { Component } from "react";
import { render } from "react-dom";
import { Document, Packer, Paragraph, TextRun, Table, TableCell, TableRow,  AlignmentType, } from "docx";


import { saveAs } from "file-saver";
import * as fs from "fs";
import { Children } from "react";
import { Font } from "@react-pdf/renderer";
interface AppProps { }
interface AppState {
    name: string;
}

export const WordCartaCobroPersuasivo = class WordCartaCobroPersuasivo extends Component<AppProps, AppState> {
    constructor(props) {
        super(props);
        this.state = {
            name: "React"
        };
    }
    


    generate(): void {
        const account = '00000000';
        const email = 'myemail@gmail.com';
        const contributor = 'interconexion ELECTRICA S.A. E.S.P.'
        const nit = '8600166103'
        const address = 'calle 000 # 111'
        const municipality = 'SANTA ROSA'
        const date = '01 de junio del 2023'
        const doc = new Document({
            sections: [
                {
                    properties: {},
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({ text: `${municipality}, ${date}`, break: 1, size: 24, font: 'Arial Narrow' }),
                                new TextRun({ text: `Señores:`, break: 2, bold: true, size: 24, font: 'Arial Narrow' }),
                                new TextRun({ text: `${contributor}`, allCaps: true, break: 1 , size: 24, font: 'Arial Narrow'}),
                                new TextRun({ text: `NIT o CC ${nit}`, break: 1, size: 24, font: 'Arial Narrow'}),
                                new TextRun({ text: `Dirección: ${address}`, break: 1, size: 24, font: 'Arial Narrow'}),
                            ],
                        }),
                        new Paragraph({
                            children: [new TextRun({ text: `Aviso único de cobro persuasivo`, color: '#FF0000', size: 24, font: 'Arial Narrow'})], alignment: AlignmentType.END,
                        }),
                        new Paragraph({
                            children: [new TextRun({ text: `Cordial saludo,`,  size: 24, font: 'Arial Narrow' }),]
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({ break: 1, text: `Apreciado contribuyente, con el cumplimiento del pago del IMPUESTO DE ALUMBRADO PUBLICO, es posible generar inversiones en infraestructura y operación del servicio de alumbrado público, le invitamos a hacer parte del `,  size: 24, font: 'Arial Narrow'}),
                                new TextRun({ text: `PLAN DE NORMALIZACIÓN DE CARTERA.`, bold: true,  size: 24, font: 'Arial Narrow'}),
                            ],alignment: AlignmentType.JUSTIFIED
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({break: 1, text: `Es nuestro deber informarle que, ante el incumplimiento de las obligaciones tributarias sustanciales, el Municipio se encuentra obligado a adelantar el `,  size: 24, font: 'Arial Narrow' }),
                                new TextRun({text: `PROCEDIMIENTO ADMINISTRATIVO DE COBRO COACTIVO `, color: '#FF0000',  size: 24, font: 'Arial Narrow'}),
                                new TextRun({ text: `para la recuperación de la cartera vencida del Impuesto de Alumbrado Público.`, size: 24, font: 'Arial Narrow'}),
                            ],alignment: AlignmentType.JUSTIFIED, 
                                          }),
                        new Paragraph({
                            children: [
                                new TextRun({ break: 1, text: `En virtud de lo anterior, el municipio se encuentra facultado para la aplicación de medidas cautelares tales como: ` , size: 24, font: 'Arial Narrow'}),
                                new TextRun({ text: `EMBARGO DE DINERO, SECUESTRO DE BIENES Y POSTERIOR REMATE DE TODO TIPO`, color: '#FF0000', size: 24, font: 'Arial Narrow'}),
                                new TextRun({ text: `, muebles e inmuebles, así como disponer de los depósitos de las cuentas bancarias, títulos valores, acciones en sociedades, cuotas sociales, etc. Adicionalmente el Municipio se verá obligado a reportarlo al `, size: 24, font: 'Arial Narrow'}),
                                new TextRun({ text: `boletín de deudores morosos de la Contaduría General de la Nación, `, bold: true, size: 24, font: 'Arial Narrow'}),
                                new TextRun({ text: `reporte que lo inhabilitaría en Entidades Financieras, contratación o vinculación con el Estado Colombiano. `, size: 24, font: 'Arial Narrow'}),
                            ], alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({ break:1, text: `Una vez verificado en nuestras bases de datos, se detectó que, a la fecha, presenta mora en el pago de su(s) obligación(es), correspondientes al Impuesto de Alumbrado Público e intereses moratorios, sobre los períodos que a continuación se relacionan: `, size: 24, font: 'Arial Narrow' }),
                            ], alignment: AlignmentType.JUSTIFIED,
                   
                        }),
                        //  FINAL PARRAFOS DEL ENCABEZADO
                        new Paragraph({ children: [new TextRun({text: '', break:1})] }),
                        //  TABLE
                        new Table({
                            width: { size: '100%' },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: `CONTRIBUYENTE:`, bold: true, size: 24, font: 'Arial Narrow', })], indent: {left:50}})],
                                            width: { size: "35%" },
                                            shading:{fill:'#9A9696'}
                                        }, ),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: ``, bold: true, size: 24, font: 'Arial Narrow'})], indent: {left:50}})],
                                            shading:{fill:'#9A9696'}
                                        }),
                                    ],
                                }, ), 
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: `NIT:`, bold: true, size: 24, font: 'Arial Narrow'})],  indent: {left:50}})],
                                            width: { size: "35%" },           
                                        }, ),
                                        new TableCell({
                                          children: [new Paragraph({ children: [new TextRun({ text: ``, bold: true, size: 24, font: 'Arial Narrow'})], indent: {left:50}})],                                          
                                        }),
                                    ],
                                }, ), 
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: `DIRECCION:`, bold: true, size: 24, font: 'Arial Narrow'})], indent: {left:50} })],
                                            width: { size: "35%" }, 
                                        }, ),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: ``, bold: true, size: 24, font: 'Arial Narrow'})], indent: {left:50}})],
                                        }),
                                    ],
                                }, ), 
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: `PERÍODOS`, size: 24, font: 'Arial Narrow'})], indent: {left:50} })],
                                            width: { size: "35%" }, 
                                        }, ),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: ``,  size: 24, font: 'Arial Narrow'})], indent: {left:50}})],
                                        }),
                                    ],
                                }, ), 
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: `No. FACTURAS`,  size: 24, font: 'Arial Narrow'})], indent: {left:50} })],
                                            width: { size: "35%" }, 
                                        }, ),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: ``, size: 24, font: 'Arial Narrow'})], indent: {left:50}})],
                                        }),
                                    ],
                                }, ), 
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: `SECTOR`,  size: 24, font: 'Arial Narrow'})],  indent: {left:50}})],
                                            width: { size: "35%" }, 
                                        }, ),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: ``, size: 24, font: 'Arial Narrow'})], indent: {left:50}})],
                                        }),
                                    ],
                                }, ), 
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: `TARIFA`,  size: 24, font: 'Arial Narrow'})], indent: {left:50} })],
                                            width: { size: "35%" }, 
                                        }, ),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: ``, size: 24, font: 'Arial Narrow'})], indent: {left:50}})],
                                        }),
                                    ],
                                }, ), 
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: `VALOR MENSUAL IMPUESTO 2019`,  size: 24, font: 'Arial Narrow'})], indent: {left:50} })],
                                            width: { size: "35%" }, 
                                        }, ),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: ``, size: 24, font: 'Arial Narrow'})], indent: {left:50}})],
                                        }),
                                    ],
                                }, ), 
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: `VALOR TOTAL IMPUESTO`, bold:true,  size: 24, font: 'Arial Narrow'})],indent: {left:50}, alignment: AlignmentType.CENTER,})],
                                            width: { size: "35%" }, 
                                            shading:{fill:'#9A9696'}
                                        }, ),
                                        new TableCell({
                                            children: [new Paragraph({ children: [new TextRun({ text: ``, bold:true, size: 24, font: 'Arial Narrow'})], indent: {left:50}})],
                                            shading:{fill:'#9A9696'}
                                        }),
                                    ],
                                }, ),
                            ],
                        }),
                        // FIN FIRST TABLE

                        new Paragraph({
                            children: [
                                new TextRun({break: 1, text: `Teniendo en cuenta lo anterior, el Municipio le está invitando a ponerse al día con sus obligaciones tributarias. Para tal efecto, le solicitamos efectuar el pago de lo adeudado a la ${account} y enviar el soporte de pago al correo electrónico: ${email}.`, size: 24, font: 'Arial Narrow'}),                    
                            ],alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({break: 1, text: `Lo anterior, teniendo en cuenta que el Contribuyente ${contributor.toLocaleUpperCase()} identificado con NIT ${nit} es sujeto pasivo por cuanto: i) Se analizó y determinó que es beneficiario potencial del servicio ii) Tiene una clasificación especial bajo los principios de progresividad y equidad en materia tributaria iii) Opera o posee cualquier tipo de infraestructura en el Municipio y/o tiene establecimiento en la jurisdicción del Municipio y iv) en virtud de lo anterior, cumple el hecho generador del impuesto de alumbrado público que es el beneficio por la prestación del mismo.`, size: 24, font: 'Arial Narrow'}),                    
                            ], alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({break: 1, text: `De no cancelar sus obligaciones tributarias dentro de las `, size: 24, font: 'Arial Narrow'}),                    
                                new TextRun({text: `72 horas `, bold: true, size: 24, font: 'Arial Narrow'}),
                                new TextRun({text: `de recibo de este comunicado o hacer un acuerdo de pago, la Administración se verá forzada a iniciar su `, size: 24, font: 'Arial Narrow'}),
                                new TextRun({text: `COBRO POR LA VÍA COACTIVA `, color: '#FF0000',  size: 24, font: 'Arial Narrow'}),
                                new TextRun({text: `con las consecuencias arriba señaladas más `, size: 24, font: 'Arial Narrow'}),
                                new TextRun({text: `las costas del proceso`, bold: true, size: 24, font: 'Arial Narrow'}),
                                new TextRun({text: `, etapa a la que no quisiéramos llegar.`, size: 24, font: 'Arial Narrow'}),
                                new TextRun({break:2, text: `Si a la fecha de recibo de la presente usted se encuentra al día, hacer caso omiso.`, size: 24, font: 'Arial Narrow'}),
                               
                            ], alignment: AlignmentType.JUSTIFIED, 
                        }),
                        new Paragraph({
                            children: [new TextRun({break:1, text: `Evite el cobro coactivo`, color: '#FF0000', size: 24, font: 'Arial Narrow'})], alignment: AlignmentType.END,
                        }),
                        new Paragraph({
                            children: [new TextRun({ text: `Cordial saludo,`,  size: 24, font: 'Arial Narrow' }),]
                        }), 

                        new Paragraph({
                            children: [
                                new TextRun({ break: 3, text: `XXXXXXXXXXXX`, bold:true, size: 24, font: 'Arial Narrow',}),               
                                new TextRun({ break: 1, text: `Secretaría de Hacienda Municipal`, size: 24, font: 'Arial Narrow'}),
                                					                                  
                            ], alignment: AlignmentType.CENTER
                        }),

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



