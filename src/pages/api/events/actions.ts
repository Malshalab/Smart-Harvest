'use server'
import supabaseLocals from "@/utils/supabase/defaultClient"
import { sh_event, sh_eventUpdated, event_supabase } from "@/data/event"

// supabase client
const supabase = await supabaseLocals()
// events table name
const eventTableAlias = '09_events'

// Create events
export async function createEvent(ourEvent:sh_event){
    // sh_event should have all fields, aside from those automatically set in supabase:
    // event_id, created_at, created_by
    const { data, error } = await supabase
        .from(eventTableAlias)
        .insert([
        {   event_name: ourEvent.eventName, 
            description: ourEvent.eventDescription, 
            event_date: '2024-12-12, 19:00:00', 
            created_by: 894998 },
        ])
        .select()

    //error handling
    if(error){
        console.log(error)
    }
    console.log(data)
    
}

// Update/Insert (Upsert) Event
export async function updateEvent(ourEvent:sh_eventUpdated){
    // have upsert as an object of type any, then we can conditionally add properties based on whether 
    // they are null or not, that way we can only update needed properties
    const upsert:any = {}
    // now check which properties are not null/undefined, those that aren't can be added to upsert
    if(ourEvent.eventName!== null && ourEvent.eventName!==undefined) upsert.event_name = ourEvent.eventName
    if(ourEvent.eventDate!== null && ourEvent.eventDate!==undefined) upsert.event_date = ourEvent.eventDate
    if(ourEvent.eventDescription!== null && ourEvent.eventDescription!==undefined) upsert.description = ourEvent.eventDescription
    // now upsert
    const { data, error } = await supabase
        .from(eventTableAlias)
        .update({ 
            ...upsert
        })
        .eq('event_id', `${ourEvent.eventId}`)
        .select()
    //error handling
    if(error){
        
        console.log(error)
    }
    console.log(data)
}

// Delete event
export async function deleteEvent(eventId:number){
    const { data, error} = await supabase
        .from(eventTableAlias)
        .delete()
        .eq('event_id', `${eventId}`)
    
    //error handling
    if(error){
        console.log(error)
    }
    console.log(data)
}

// Get all events
export async function getEvents(){
    return supabase 
        .from(eventTableAlias)
        .select()
}


// Get event by id
export async function getEventById(id:number){
    const { data, error } = await supabase
        .from(eventTableAlias)
        .select()
        .eq('event_id', `${id}`)

    //error handling
    if(error){
        return data
    }
    console.log(error)
}
