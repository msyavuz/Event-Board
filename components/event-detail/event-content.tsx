import classes from "./event-content.module.css";

type props = {
    children: React.ReactNode;
};

function EventContent(props: props) {
    return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;
