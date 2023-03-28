import React, { Component } from "react";
import { render } from "react-dom";
import {  Document, Packer, Paragraph, TextRun, Table, TableCell, TableRow, ImageRun } from "../../../node_modules/docx/build";


import { saveAs } from "file-saver";
import { experiences, education, skills, achievements } from "./cv-data.ts";
import { DocumentCreator } from "./cv-generator.ts";
import * as fs from "fs";
interface AppProps {}
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
                            new TextRun("Hello World"),
                            new TextRun({
                                text: "Foo Bar",
                                bold: true,
                            }),
                            new TextRun({
                                text: "\tGithub is the best",
                                bold: true,
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



