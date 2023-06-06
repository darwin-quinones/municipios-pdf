import React, { Component } from "react";
import { render } from "react-dom";
import { Document, Packer, Paragraph, TextRun, Table, TableCell, TableRow,  AlignmentType, } from "docx";


import { saveAs } from "file-saver";

interface AppProps {
    municipality: string;
    date: string;
    contributor: string;
    nit: string;
    address: string;
 }

interface AppState {}

export const WordCartaCobroPersuasivoAPI = class WordCartaCobroPersuasivoAPI extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = {};
    }

    generate(): void {
        const { municipality, date, contributor, nit, address} = this.props;
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
                        

                    ],

                },
            ],

        });


        Packer.toBlob(doc).then(blob => {
            console.log(blob);
            saveAs(blob, "Carta cobro persuasivo API.docx");
            console.log("Document created successfully");
        });
    }
    render() {
        return (
            <div>

                <p>
                    Carta Cobro Persuasivo docx API:)
                    <button onClick={this.generate}>Generate docx!</button>
                </p>
            </div>
        );
    }
}



