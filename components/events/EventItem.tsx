import event from "../../shared/types/event.type";
import CalendarIcon from "../icons/CalendarIcon";
import MapPinIcon from "../icons/MapPinIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import Button from "../ui/Button";
import styles from "./EventItem.module.css";

type props = {
    event: event;
};

function EventItem(props: props) {
    const readableDate = new Date(props.event.date).toLocaleDateString(
        "en-US",
        {
            day: "numeric",
            month: "long",
            year: "numeric",
        }
    );

    const formattedAddress = props.event.location.replace(", ", "\n");
    const exploreLink = `/events/${props.event.id}`;

    return (
        <li className={styles.item}>
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img src={"/" + props.event.image} alt={props.event.title} />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{props.event.title}</h2>
                    <div className={styles.date}>
                        <CalendarIcon />
                        <time>{readableDate}</time>
                    </div>
                    <div className={styles.address}>
                        <MapPinIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={styles.icon}>
                            <RightArrowIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default EventItem;
