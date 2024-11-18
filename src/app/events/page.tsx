import { getEventById, getEvents } from '../../pages/api/events/actions'

export default async function Page() {
    const {data} = await getEvents()

    console.log(data)
    // return <div>{data}</div>

} 