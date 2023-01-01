import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../shared/data/dummy-data";

function AllEventsPage() {
    const router = useRouter();
    const allEvents = getAllEvents();

    function findEventsHandler(year: string, month: string) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <Fragment>
            <EventSearch onSearch={findEventsHandler} />
            <EventList events={allEvents} />
        </Fragment>
    );
}

export default AllEventsPage;
