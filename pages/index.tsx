import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../shared/data/dummy-data";

export default function Home() {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <EventList events={featuredEvents} />
        </div>
    );
}
