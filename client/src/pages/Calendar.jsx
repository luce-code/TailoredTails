import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import React, { useState } from 'react';
import AddEventModal from '../components/AddEventModal';
import '../css/components/MyCalendar.css';

export default function MyCalendar() {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <section className="calendar">
      <button className="calendar__button" onClick={() => setModalOpen(true)}>
        Add Event
      </button>
      <div style={{ position: 'relative', zIndex: 0 }}>
        <FullCalendar
          events={[]}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
        />
      </div>

      <AddEventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
