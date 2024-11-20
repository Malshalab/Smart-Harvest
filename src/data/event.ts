// this type is for inserting events
export interface sh_event{
    eventId?: number, // set in the database
    eventName:string,
    eventDescription:string, 
    eventDate:Date, 
    creationTimeStamp?:Date // set in the database
    creatingUser?:number // set using auth and current user
}

// this type is for updating events
export interface sh_eventUpdated{
    eventId:number,
    eventName?:string,
    eventDescription?:string, 
    eventDate?:Date, 
}

// this type is for mapping the event table to a TS object
export interface event_supabase{
    event_id?:number,
    event_name?:string,
    description?:string,
    event_date?:string,
    created_at?:string,
    created_by?:number
}