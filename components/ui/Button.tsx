import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

type props = {
    link?: string;
    children: React.ReactNode;
};

function Button(props: props) {
    if (props.link) {
        return (
            <Link href={props.link} className={styles.btn}>
                {props.children}
            </Link>
        );
    } else {
        return <button className={styles.btn}>{props.children}</button>;
    }
}

export default Button;
