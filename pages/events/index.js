import { Fragment } from 'react'
import { useRouter } from 'next/router'

import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'
import EventSeach from '../../components/events/event-search'

function AllEventsPage() {
  const events = getAllEvents()
  const router = useRouter()

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <Fragment>
      <EventSeach onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  )
}
export default AllEventsPage
