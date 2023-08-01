import React from "react";

const styles = {
    footer: {
        position: "sticky",
        left: "0",
        bottom: "0",
        width: "100%",
        backgroundColor: "none",
        color: "white",
        textAlign: "center",
        padding: "10px",
        fontFamily: "Arial",
        fontSize: "25px"
        
    }
}

export default function Footer() {
    return (
        <footer style={styles.footer}>
            <p>Created by: Paul Sturm, Seth Andregg, Jacob Andrew, and Dan Kopac.</p>
        </footer>
    );
    }