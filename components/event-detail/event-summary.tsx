import classes from "./event-summary.module.css";

type props = {
    title: string;
};

function EventSummary(props: props) {
    const { title } = props;

    return (
        <section className={classes.summary}>
            <h1>{title}</h1>
        </section>
    );
}

export default EventSummary;
