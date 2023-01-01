import event from "../../shared/types/event.type";
import EventItem from "./EventItem";
import styles from "./EventList.module.css";

type props = {
    events: event[];
};

function EventList(props: props) {
    const events = props.events;
    return (
        <ul className={styles.list}>
            {events.map((event) => {
                return <EventItem event={event} key={event.id} />;
            })}
        </ul>
    );
}

export default EventList;
