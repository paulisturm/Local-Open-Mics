import React from "react";

const styles = {
    footer: {
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        backgroundColor: "none",
        color: "white",
        textAlign: "right",
        padding: "10px"
    }
}

export default function Footer() {
    return (
        <footer style={styles.footer}>
            <p>Created by: <a href="">Paul Sturm, Seth Andregg, Jacob Andrew, and Dan Kopac.</a></p>
        </footer>
    );
    }