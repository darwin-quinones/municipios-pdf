import React from 'react';
import { Page, Image, Text, Document, View, Note } from "@react-pdf/renderer";
import { styles } from '../styles/StylesActasInterventorias';

const PDFActasInterventorias = () => {
    return (
        <Document>
                <Page style={styles.body} size="A4">
        <View style={styles.view}>
          {/* FUNTION THAT RETURNS THE HEADER */}
          <Text>Hello world !!!!!!!!!!!!!!</Text>
    
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
}

export default PDFActasInterventorias;
