import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import React, { useState, useRef, useEffect } from 'react';
import AddEventModal from '../components/AddEventModal';
import '../css/components/MyCalendar.css';
// import axios from 'axios';
// import moment from 'moment';

export default function MyCalendar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const calendarRef = useRef(null);

  // const onEventAdded = (event) => {
  //   let calendarApi = calendarRef.current.getApi();
  //   calendarApi.addEvent({
  //     start: moment(event.start).toDate(),
  //     end: moment(event.end).toDate(),
  //     title: event.title,
  //   });
  // };

  // useEffect(() => {
  //   async function fetchEvents(start, end) {
  //     const requestData = {
  //       start: moment(start).toISOString(),
  //       end: moment(end).toISOString(),
  //     };

  //     try {
  //       const response = await axios.post('/api/calendar/get-events', requestData);
  //       setEvents(response.data);
  //     } catch (error) {
  //       console.error('Error fetching events:', error);
  //     }
  //   }

  //   let calendarApi = calendarRef.current.getApi();
  //   fetchEvents(calendarApi.view.currentStart, calendarApi.view.currentEnd);
  // }, []);

  // async function handleEventAdd(event) {
  //   await axios.post('/api/calendar/create-event', event);
  // }

  // async function handleDateset(data) {
  //   const requestData = {
  //     start: moment(data.start).toISOString(),
  //     end: moment(data.end).toISOString(),
  //   };

  //   try {
  //     const response = await axios.post('/api/calendar/get-events', requestData);
  //     setEvents(response.data);
  //   } catch (error) {
  //     console.error('Error fetching events:', error);
  //   }
  // }

  return (
    <section className="calendar">
      <button className="calendar__button" onClick={() => setModalOpen(true)}>
        Add Event
      </button>
      <div style={{ position: 'relative', zIndex: 0 }}>
        <FullCalendar
          ref={calendarRef}
          events={events}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          // eventAdd={(event) => handleEventAdd(event)}
          // datesSet={(date) => handleDateset(date)}
        />
      </div>

      <AddEventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        // onEventAdded={(event) => onEventAdded(event)}
      />
    </section>
  );
}
