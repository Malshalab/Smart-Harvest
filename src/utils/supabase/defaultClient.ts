import { createClient } from "@supabase/supabase-js";

export default async function supabaseLocals(){
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
}