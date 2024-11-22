'use server'
import supabaseLocals from '../utils/supabase/defaultClient' 
import { sh_content, sh_contentUpdated, content_supabase } from "../data/content"

// supabase client
const supabase = await supabaseLocals()
// events table name
const contentTableAlias = '08_content'

// Create content
export async function createContent(newContent:sh_content){
    // sh_content should have all fields, aside from those automatically set (on creation) in supabase:
    // content_id, created_at, updated_at, created_by
    const { data, error } = await supabase
        .from(contentTableAlias)
        .insert([
            {
                title: newContent.contentTitle,
                content_type: newContent.contentType,
                content: newContent.contentContent,
                category: newContent.contentCategory,
                created_by: 894998
            }
        ])
        .select()

    //error handling
    if(error){
        console.log(error)
    }
    console.log(data)
    
}

// Update/Insert (Upsert) content
export async function updateEvent(updatedContentDetails:sh_contentUpdated){
    // have upsert as an object of type any, then we can conditionally add properties based on whether 
    // they are null or not, that way we can only update needed properties
    const upsert:any = {}
    // now check which properties are not null/undefined, those that aren't can be added to upsert
    if(updatedContentDetails.contentTitle!== null && updatedContentDetails.contentTitle!==undefined) upsert.title = updatedContentDetails.contentTitle
    if(updatedContentDetails.contentType!== null && updatedContentDetails.contentType!==undefined) upsert.content_type = updatedContentDetails.contentType
    if(updatedContentDetails.contentContent!== null && updatedContentDetails.contentContent!==undefined) upsert.content = updatedContentDetails.contentContent
    if(updatedContentDetails.contentCategory!== null && updatedContentDetails.contentCategory!==undefined) upsert.category = updatedContentDetails.contentCategory
    // add current time for when it was last updated
    upsert.updated_at = null;
    
    // now upsert
    const { data, error } = await supabase
        .from(contentTableAlias)
        .update({ 
            ...upsert
        })
        .eq('content_id', `${updatedContentDetails.contentId}`)
        .select()
    //error handling
    if(error){
        
        console.log(error)
    }
    console.log(data)
}

// Delete content
export async function deleteContent(contentId:number){
    const { data, error } = await supabase
        .from(contentTableAlias)
        .delete()
        .eq('content_id', `${contentId}`)
    
    //error handling
    if(error){
        console.log(error)
    }
    console.log(data)
}

// Get all events
export async function getContent(){
    return supabase 
        .from(contentTableAlias)
        .select()
}

// Get event by id
export async function getContentById(contentId:number){
    const { data, error } = await supabase
        .from(contentTableAlias)
        .select()
        .eq('content_id', `${contentId}`)

    //error handling
    if(error){
        return data
    }
    console.log(error)
}