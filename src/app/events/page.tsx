import { sh_eventUpdated } from '@/data/event';
import { getEventById, getEvents, createEvent, deleteEvent, updateEvent } from '../../pages/api/events/actions'

export default async function Page() {
    // createEvent({
    //     eventName: "dummyEvent1",
    //     eventDescription: 'dummy event 1 to test api',
    //     eventDate: new Date(),
    //     creationTimeStamp: new Date()
    // })

    const eventUpdated:sh_eventUpdated = {
        eventId:3,
        eventName:'updated event name',
        
    }
    updateEvent(eventUpdated);
} 