
import Library from "./library/page";
import { cookies } from "next/headers";
export default async function Home() {

  // const cookieStore = await cookies()
  return (
    <Library/>
  );
}