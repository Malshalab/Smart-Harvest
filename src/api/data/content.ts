/*

this type is for mapping an entry in the content table to a TS object
- fields marked by DB_INIT are set by the DB
            
*/
export interface content_supabase{
    content_id?: number,        // DB_INIT
    title?: string, 
    content_type?: string,
    content?: string,
    category?: string,
    created_at?: Date,          // DB_INIT
    updated_at?: Date,          // DB_INIT
    created_by?: number         // DB_INIT
}

// this type is for inserting content
export interface sh_content{
    contentTitle: string,
    contentType: string,
    contentContent: string,
    contentCategory: string,
}

// this type is for updating content
export interface sh_contentUpdated{
    contentId: number,
    contentTitle?: string,
    contentType?: string,
    contentContent?: string,
    contentCategory?: string,
}