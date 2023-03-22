import React from "react";
import { StyleSheet, Font } from "@react-pdf/renderer";
import fontCabin from "../font/Cabin.ttf";
import cabinBold from "../font/Cabin-Bold.ttf";
Font.register({
  family: "Cabin",
  fonts: [
    {
      src: cabinBold,
      fontWeight: "bold",
    },
  ],
});
export const styles = StyleSheet.create({
  // Estilos Santa rosa
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 45,
    fontSize: 9,
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
    // -ms-flex-wrap: wrap,
    flexWrap: "wrap",
    // marginRight: "-15px",
    // marginLeft: "-15px",
    flexDirection: "row",
    paddingTop: 4,
    // paddingBottom: 8,
    width: "505px",
  },
  row_line: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "503px",
    border: "1px solid black",
  },
  col_header_santaR: {
    textAlign: "center",
    width: "285px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  col_row_3: {
    width: "285px",
    borderBottom: " 1px solid black",
    flexWrap: "wrap",
  },
  col_row_3_2: {
    width: "285px",
    flexWrap: "wrap",
  },

  color_text_row: {
    color: "red",
    fontSize: "13px",
  },
  main_text: {
    fontSize: "12px",
    fontStyle: "italic",
  },
  col_lg_3: {
    width: "110px",
    height: "70px",
    border: "1px solid black",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  p: {
    paddingLeft: "25px",
  },
  row_align: {
    display: "flex",
    justifyContent: "space-between",
  },
  p_end: {
    float: "right",
    display: "inline-block",
  },
  p_center: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },

  img: {
    width: "70px",
    // height: "80px"
  },
  line: {
    width: "505px",
    border: "2px solid #C4C4C4",
    display: "inline-block",
  },
  italic_text: {
    fontStyle: "italic",
    fontWeight: "bold",
    fontFamily: "Cabin",
  },
  table_row_left: {
    flexDirection: "row",
    border: "1px solid black",
    borderBottom: 0,
  },
  table_row_right: {
    flexDirection: "row",
    borderTop: "1px solid black",
    borderRight: "1px solid black",
    textAlign: "center",
  },
  //   Estilos Magangue

  col_header_magangue: {
    textAlign: "center",
    width: "222px",
    border: "1px solid black",

    justifyContent: "center",
  },

  col_row_3_magangue: {
    width: "222px",
    borderBottom: " 1px solid black",
  },
  col_row_3_2_magangue: {
    width: "222px",
  },
  col_header_magangue_small: {
    textAlign: "center",
    width: "59px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
  },
  col_row_3_magangue_small: {
    width: "59px",
    borderBottom: " 1px solid black",
  },

  col_header_center_magangue: {
    textAlign: "center",
    width: "225px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
  },
  line_footer_magangue: {
    width: "350px",
    border: "1px solid #C4C4C4",
  },
  // style={[
  //   styles.view,
  //   { borderTop: "3px solid #C4C4C4", margin: "0px" },
  // ]}
  //   Estilos de San juan del cesar
  col_img_header_sanJuanC: {
    width: "100px",
    height: "70px",
    //border: "1px solid black",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  line_footer_sanJuanC: {
    width: "350px",
    border: "1px solid #C4C4C4",
  },
  row_line: {
    display: "flex",
    marginRight: "-15px",
    marginLeft: "-15px",
    flexDirection: "row",
  },

  // Estilos Arjona
  col_img_header: {
    width: "100%",
    height: "80px",
    border: "1px solid black",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  // Agustin codazzi
  col_header_agustinC: {
    textAlign: "center",
    width: "280px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
  },

  col_header_agustinC2: {
    width: "110px",
    border: "1px solid black",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  // El copey
  col_header_copey: {
    textAlign: "center",
    width: "280px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
  },

  // La paz
  col_header_laPaz: {
    textAlign: "center",
    width: "280px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
  },
  col_header_laPaz_small: {
    textAlign: "center",
    justifyContent: "center",
    border: "1px solid black",
    margin: "4px",
    height: "17px",
    color: "red",
  },
  col_header_laPaz_small2: {
    border: " 1px solid black",
    marginLeft: "4px",
    marginRight: "4px",
    height: "30px",
  },

  // Facatativa
  // La paz
  col_header_facatativa: {
    textAlign: "center",
    width: "281px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    marginLeft: "2px",
    marginRight: "2px",
  },
  text_facatativa: { fontSize: "8.5px", padding: "2px" },

  col_footer_facatativa: {
    width: "250px",
    height: "50px",
    //border: "1px solid black",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },

  col_footer_facatativa2: {
    textAlign: "center",
    width: "150px",
    height: "50px",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    marginBottom: "3px",
  },

  text_border: {
    border: "1px solid black",
    padding: "1.5px",
  },
  table_row1: {
    width: "3%",
    marginRight: "2px",
    border: "1px solid black",
    justifyContent: "center",
    textAlign: "center",
  },
  table_row2: {
    width: "17%",
  },
  // Footer Riohacha
  col_footer_riohacha:{
    
    border: '1px solid black',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});
