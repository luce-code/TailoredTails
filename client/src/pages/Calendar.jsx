import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import React from 'react'

export default function MyCalendar() {
  return (
    <section className="calendar">
        <button className="calendar__button">Add Event</button>

      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </section>
  )
}
