'use server'
import supabaseLocals from "@/utils/supabase/defaultClient"
import { sh_event, sh_eventUpdated, event_supabase } from "@/data/event"

// supabase client
const supabase = await supabaseLocals()
// events table name
const eventTableAlias = '09_events'

// Create events
export async function createEvent(newEvent:sh_event){
    // sh_event should have all fields, aside from those automatically set in supabase:
    // event_id, created_at, created_by
    try {
        const { data, error } = await supabase
        .from(eventTableAlias)
        .insert([
            {   
                event_name: newEvent.eventName, 
                description: newEvent.eventDescription, 
                // event_date: '2024-12-12, 19:00:00',
                event_date: newEvent.eventDate, 
                created_by: 894998 
            },
        ])
        .select()
        console.log('data from inside actions:',data)
        return { data }
    } catch (error) {
        console.log('error from inside actions:', error)
        return { error }
    }
}

// Update/Insert (Upsert) Event
export async function updateEvent(updatedEventDetails:sh_eventUpdated){
    // have upsert as an object of type any, then we can conditionally add properties based on whether 
    // they are null or not, that way we can only update needed properties
    const upsert:any = {}
    // now check which properties are not null/undefined, those that aren't can be added to upsert
    if(updatedEventDetails.eventName!== null && updatedEventDetails.eventName!==undefined && updatedEventDetails.eventName!=='') upsert.event_name = updatedEventDetails.eventName
    if(updatedEventDetails.eventDate!== null && updatedEventDetails.eventDate!==undefined && updatedEventDetails.eventDate!==new Date('')) upsert.event_date = updatedEventDetails.eventDate
    if(updatedEventDetails.eventDescription!== null && updatedEventDetails.eventDescription!==undefined &&  updatedEventDetails.eventDescription!=='') upsert.description = updatedEventDetails.eventDescription

    // now upsert
    try {
        const { data, error } = await supabase
            .from(eventTableAlias)
            .update({ 
                ...upsert
            })
            .eq('event_id', `${updatedEventDetails.eventId}`)
            .select()
        return { data }
    } catch (error) {
        console.log(error)
        return { error }
    }
}

// Delete event
export async function deleteEvent(eventId:number){
    try {
        const { data, error} = await supabase
            .from(eventTableAlias)
            .delete()
            .eq('event_id', `${eventId}`)
        console.log(data)
       return { data }
    }
    catch (error) {
        return { error }
    }
}

// Get all events
export async function getEvents(){
    try {
        const { data, error} = await supabase 
            .from(eventTableAlias)
            .select('*')
        return { data }
    } catch (error) {
        return { error }
    }
    
}


// Get event by id
export async function getEventById(id:number){
    try {
        const { data, error } = await supabase
            .from(eventTableAlias)
            .select()
            .eq('event_id', `${id}`)

        console.log(data)
        return {data}
    } catch (error) {
        return { error }
    }
}
