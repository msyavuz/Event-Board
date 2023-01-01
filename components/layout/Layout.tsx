import React, { Fragment, ReactNode } from "react";
import MainHeader from "./MainHeader";

type props = {
    children: ReactNode;
};

function Layout(props: props) {
    return (
        <Fragment>
            <MainHeader />
            <main>{props.children}</main>
        </Fragment>
    );
}

export default Layout;
