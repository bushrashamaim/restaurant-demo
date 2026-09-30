import React, { useState } from 'react';

const allTimeSlots = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'];
const unavailableSlots = ['18:30', '20:00'];

function BookingScreen() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [timeSlot, setTimeSlot] = useState('');
  const [reference, setReference] = useState('');
  const [success, setSuccess] = useState(false);

  const handleBooking = () => {
    if (!name || !phone || !date || !timeSlot) {
      alert('Please fill all booking details');
      return;
    }
    const ref = 'BKG-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    setReference(ref);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName('');
      setPhone('');
      setDate('');
      setGuests(2);
      setTimeSlot('');
      setReference('');
    }, 5000);
  };

  if (success) {
    return (
      <div className="success-card">
        <i className="fas fa-check-circle success-icon"></i>
        <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Booking Confirmed!</h3>
        <p style={{ color: 'var(--gray-600)' }}>Your reference number:</p>
        <p className="reference-code">{reference}</p>
        <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', marginTop: '0.75rem' }}>We look forward to welcoming you.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="font-playfair" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--burgundy)' }}>Reserve a Table</h2>
      
      <div className="form-container">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-input"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-input"
        />
        <input
          type="number"
          placeholder="Number of Guests"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
          min="1"
          max="20"
          className="form-input"
        />
        
        <label style={{ fontSize: '0.75rem', fontWeight: '500', marginBottom: '0.5rem', display: 'block' }}>Select Time Slot</label>
        <div className="time-slots">
          {allTimeSlots.map(slot => {
            const isUnavailable = unavailableSlots.includes(slot);
            return (
              <button
                key={slot}
                onClick={() => !isUnavailable && setTimeSlot(slot)}
                disabled={isUnavailable}
                className={`time-slot ${timeSlot === slot ? 'selected' : ''} ${isUnavailable ? 'unavailable' : ''}`}
              >
                {slot}
              </button>
            );
          })}
        </div>
        
        <button onClick={handleBooking} className="btn-primary w-full" style={{ marginTop: '1rem' }}>
          <i className="fas fa-check-circle mr-2"></i>Book Table
        </button>
      </div>
    </div>
  );
}

export default BookingScreen;