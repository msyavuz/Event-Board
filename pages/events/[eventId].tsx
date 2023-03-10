import { useRouter } from "next/router";
import { Fragment } from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import ErrorAlert from "../../components/ui/ErrorAlert";
import { getEventById } from "../../shared/data/dummy-data";

function EventDetailPage() {
    const router = useRouter();
    const eventId = router.query.eventId;

    const event = getEventById(eventId);

    if (!event) {
        return <ErrorAlert>No event found!</ErrorAlert>;
    }

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}

export default EventDetailPage;
