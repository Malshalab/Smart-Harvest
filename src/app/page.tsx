// import { supabase } from "@/lib/supabase";
import Library from "./library/page";
import { cookies } from "next/headers";
export default async function Home() {
  
  // const testSupabase = async () => {
  //   const {data, error} = await supabase
  //     .from("09_events")
  //     .select()

  //   if(data) console.log(data)
  // }
  
  // testSupabase()
  const cookieStore = await cookies()
  return (
    <Library/>
  );
}
