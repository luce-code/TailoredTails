import React, { useState } from 'react';
import Modal from 'react-modal';
import Datetime from 'react-datetime';

export default function MyModal({ isOpen, onClose, onEventAdded }) {
    const [title, setTitle] = useState('');
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    const onSubmit = (event) => {
        event.preventDefault();

        onEventAdded({
            title,
            start,
            end,
        });

        onClose();
    }


    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    value={title} 
                    placeholder="Title" 
                    onChange={e => setTitle(e.target.value)} 
                />
                <div>
                <label>Start Date</label>
                <Datetime
                    value={start}
                    onChange={date => setStart(date.toDate())}
                />
                </div>
                <div>
                <label>End Date</label>
                <Datetime
                    value={end}
                    onChange={date => setEnd(date.toDate())}
                />
                </div>
                <button type="submit">Add Event</button>

            </form> 
        </Modal>
    );
}
