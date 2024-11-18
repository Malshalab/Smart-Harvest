'use server'
import supabaseLocals from "@/utils/supabase/defaultClient"

const supabase = await supabaseLocals()

export async function createEvent(){

}

export async function updateEvent(){

}

export async function deleteEvent(){

}

export async function getEvents(){
    return supabase 
        .from("09_events")
        .select()
}

export async function getEventById(){

}