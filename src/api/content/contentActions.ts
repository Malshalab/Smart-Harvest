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
    try {
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
        console.log('data from inside actions:', data)
        return { data }
    }
    catch (error) {
        console.log('error from inside actions:', error)
        return { error }
    }
}

// Update/Insert (Upsert) content
export async function updateContent(updatedContentDetails:sh_contentUpdated){
    // have upsert as an object of type any, then we can conditionally add properties based on whether 
    // they are null or not, that way we can only update needed properties
    console.log('updatedContentDetails:',updatedContentDetails)
    const upsert:any = {}
    // now check which properties are not null/undefined, those that aren't can be added to upsert
    if(updatedContentDetails.contentTitle!== null && updatedContentDetails.contentTitle!==undefined && updatedContentDetails.contentTitle!=='') upsert.title = updatedContentDetails.contentTitle
    if(updatedContentDetails.contentType!== null && updatedContentDetails.contentType!==undefined && updatedContentDetails.contentType!=='') upsert.content_type = updatedContentDetails.contentType
    if(updatedContentDetails.contentContent!== null && updatedContentDetails.contentContent!==undefined && updatedContentDetails.contentContent!=='') upsert.content = updatedContentDetails.contentContent
    if(updatedContentDetails.contentCategory!== null && updatedContentDetails.contentCategory!==undefined && updatedContentDetails.contentCategory!=='') upsert.category = updatedContentDetails.contentCategory
    // add current time for when it was last updated
    upsert.updated_at = new Date().toISOString
    console.log('upsert:',upsert)
    // now upsert
    try {
        const { data, error } = await supabase
            .from(contentTableAlias)
            .update({ 
                ...upsert
            })
            .eq('content_id', `${updatedContentDetails.contentId}`)
            .select('*')
        console.log('data from inside actions:', data)
        return { data }
    } 
    catch (error) {
        console.log('error from inside actions:', error)
        return { error }
    }
}

// Delete content
export async function deleteContent(contentId:number){
    try {
        const { data, error } = await supabase
            .from(contentTableAlias)
            .delete()
            .eq('content_id', `${contentId}`)
        console.log('data from inside actions:', data)
        return { data }
    } 
    catch (error) {
        console.log('error from inside actions:', error)
        return { error }
    }
}

// Get all contents
export async function getContent(){
    try {
        const { data, error} = await supabase 
            .from(contentTableAlias)
            .select('*')
        return { data }
    } catch (error) {
        return { error }
    }
}

// Get content by id
export async function getContentById(id:number){
    try {
        const { data, error } = await supabase
            .from(contentTableAlias)
            .select()
            .eq('content_id', `${id}`)
        console.log('data from inside actions:',data)
        return { data }
    } catch (error) {
        return { error }
    }
}