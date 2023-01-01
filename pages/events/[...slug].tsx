import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert";
import { getFilteredEvents } from "../../shared/data/dummy-data";

function FilteredEventsPage() {
    const router = useRouter();

    const filterData = router.query.slug;

    if (!filterData) {
        return <p className="center">Loading...</p>;
    }

    if (isNaN(+filterData[0]) || isNaN(+filterData[1])) {
        return (
            <Fragment>
                <ErrorAlert>Invalid filter.</ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const filteredEvents = getFilteredEvents({
        year: +filterData[0],
        month: +filterData[1],
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert>No events found.</ErrorAlert>;
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        );
    }
    const date = new Date(+filterData[0], +filterData[1] - 1);

    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList events={filteredEvents} />
        </Fragment>
    );
}

export default FilteredEventsPage;
