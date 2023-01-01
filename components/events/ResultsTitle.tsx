import Button from "../ui/Button";
import styles from "./ResultsTitle.module.css";

type props = {
    date: Date;
};

function ResultsTitle(props: props) {
    const { date } = props;

    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });

    return (
        <section className={styles.title}>
            <h1>Events in {humanReadableDate}</h1>
            <Button link="/events">Show all events</Button>
        </section>
    );
}

export default ResultsTitle;
