import { StyleSheet, Text, View, Document, Page } from "@react-pdf/renderer";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    flexDirection: "column",
  },
  table: {
    width: "100%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    borderTop: "1px solid #EEE",
    paddingTop: 8,
    paddingBottom: 8,
  },
  header: {
    borderTop: "none",
  },
  bold: {
    fontWeight: "bold",
  },
  // So Declarative and unDRY 👌
  row1: {
    width: "27%",
  },
  row2: {
    width: "15%",
  },
  row3: {
    width: "15%",
  },
  row4: {
    width: "20%",
  },
  row5: {
    width: "27%",
  },
});

const PdfEjemplo = () => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.table}>
          <View style={[styles.row, styles.bold, styles.header]}>
            <Text style={styles.row1}>Name</Text>
            <Text style={styles.row2}>Start Date</Text>
            <Text style={styles.row3}>End Date</Text>
            <Text style={styles.row4}>Days</Text>
            <Text style={styles.row5}>Info</Text>
          </View>

          <View key={1} style={styles.row} wrap={false}>
            <Text style={styles.row1}>
              <Text style={styles.bold}>Pepe</Text>,
            </Text>
            <Text style={styles.row2}>Q</Text>
            <Text style={styles.row3}>Q</Text>
            <Text style={styles.row4}>
              <Text style={styles.bold}>Q</Text>
            </Text>
            <Text style={styles.row5}>Q</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfEjemplo;
