import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
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
    view:{
      width:'600px'
    }
  });

const VistaWeb = () => {
    return (
        <div style={{display: 'flex', justifyContent:'center'}}>
            <div style={styles.view}>
                <p style={styles.header}>Lorem Ipsum pdf</p>
                <img
                style={{ maxWidth: "600px", maxHeight: "400" }}
                src="https://picsum.photos/600/400"
                alt="img for pdf"
                ></img>
                <p style={styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
                </p>
                <p style={styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    );
}

export default VistaWeb;
