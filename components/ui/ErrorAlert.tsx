import React from "react";
import styles from "./ErrorAlert.module.css";

function ErrorAlert(props: React.PropsWithChildren) {
    return <div className={styles.alert}>{props.children}</div>;
}

export default ErrorAlert;
