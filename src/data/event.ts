/*

this type is for mapping an entry in the events table to a TS object
- fields marked by DB_INIT are set by the DB
            
*/
export interface event_supabase{
    event_id?:number,           // DB_INIT
    event_name?:string,
    description?:string,
    event_date?:string,
    created_at?:string,         // DB_INIT
    created_by?:number          
}

// this type is for inserting events
export interface sh_event{
    eventName:string,
    eventDescription:string, 
    eventDate:Date, 
    creatingUser:number // set using auth and current user
}

// this type is for updating events
export interface sh_eventUpdated{
    // should only update event by the id, hence id is mandatory
    eventId:number,
    eventName?:string,
    eventDescription?:string, 
    eventDate?:Date, 
}
