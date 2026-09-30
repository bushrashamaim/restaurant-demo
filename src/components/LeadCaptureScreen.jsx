import React, { useState } from 'react';

function LeadCaptureScreen({ setActiveTab }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('');
  const [success, setSuccess] = useState(false);
  const [discountCode, setDiscountCode] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !phone || !interest) {
      alert('Please fill all fields');
      return;
    }
    if (!email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    const code = 'SAFFRON' + Math.floor(Math.random() * 1000);
    setDiscountCode(code);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setName('');
      setEmail('');
      setPhone('');
      setInterest('');
      setDiscountCode('');
      setActiveTab('offers');
    }, 5000);
  };

  if (success) {
    return (
      <div className="success-card">
        <i className="fas fa-gift success-icon" style={{ color: 'var(--gold)' }}></i>
        <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Discount Unlocked! 🎉</h3>
        <p style={{ color: 'var(--gray-600)' }}>Your exclusive code:</p>
        <p className="reference-code" style={{ background: 'var(--gold)', color: 'white' }}>{discountCode}</p>
        <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)', marginTop: '0.75rem' }}>25% off on your first order!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="font-playfair" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--burgundy)' }}>Claim Your Special Discount</h2>
      
      <div className="form-container">
        <input
          type="text"
          placeholder="Full Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        <input
          type="email"
          placeholder="Email Address *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <input
          type="tel"
          placeholder="Phone / WhatsApp *"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-input"
        />
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="form-input"
          style={{ cursor: 'pointer' }}
        >
          <option value="">Select Dining Interest *</option>
          <option value="Fine Dining">Fine Dining Experience</option>
          <option value="Private Events">Private Events / Parties</option>
          <option value="Corporate Booking">Corporate Booking</option>
          <option value="Regular Diner">Regular Diner</option>
        </select>
        
        <button onClick={handleSubmit} className="btn-primary w-full" style={{ marginTop: '0.5rem' }}>
          <i className="fas fa-tag mr-2"></i>Get My Discount
        </button>
      </div>
    </div>
  );
}

export default LeadCaptureScreen;