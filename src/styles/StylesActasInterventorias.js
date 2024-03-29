import { StyleSheet, Font } from "@react-pdf/renderer";

const fonts = {
  courier: "Courier",
  courierBold: "Courier-Bold",
  courierOblique: "Courier-Oblique",
  helvetica: "Helvetica",
  helveticaBold: "Helvetica-Bold",
  helveticaOblique: "Helvetica-Oblique",
  times: "Times-Roman",
  timesBold: "Times-Bold",
  timesItalic: "Times-Italic",
};

export const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 45,
    fontSize: 10,
    fontFamily: fonts.helvetica,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  view: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // border: "1px solid black",
    width: "505px",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    paddingTop: 4,
    width: "505px",
  },

  table_row_left: {
    flexDirection: "row",
    border: "1px solid black",
    borderBottom: 0,
    width: 70,
    justifyContent: "center",
  },
  table_row_right: {
    flexDirection: "row",
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    textAlign: "left",
    width: 433,
    padding: "10px",
  },
  center_text: {
    marginTop: "15%",
  },
  text_bold: {
    fontFamily: fonts.helveticaBold,
  },
  table_header: {
    width: "505",
    border: "1px solid black",
    justifyContent: "center",
    fontFamily: fonts.helveticaBold,
  },
  notBold: {
    fontFamily: fonts.helvetica,

  }
});
