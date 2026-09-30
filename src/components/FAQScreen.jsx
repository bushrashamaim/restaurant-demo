import React, { useState } from 'react';

const faqs = [
  { id: 1, question: 'What are your opening hours?', answer: 'We are open Monday to Sunday, 11:00 AM – 11:00 PM. Kitchen closes at 10:30 PM.' },
  { id: 2, question: 'Where is Saffron Grove located?', answer: '123 Luxury Avenue, Downtown Dubai – near Burj Khalifa. Valet parking available.' },
  { id: 3, question: 'Do you accept reservations?', answer: 'Yes! Use our table booking system. Walk-ins welcome based on availability.' },
  { id: 4, question: 'What is your cancellation policy?', answer: 'Free cancellation up to 2 hours before reservation. Late cancellations may incur a $25 fee.' },
  { id: 5, question: 'Do you offer delivery?', answer: 'Yes, via our partners. Free delivery on orders above $50 within 5km radius.' },
  { id: 6, question: 'Do you cater to dietary restrictions?', answer: 'Absolutely! Vegan, gluten-free, and keto options available. Please notify us in advance.' },
];

function FAQScreen() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="space-y-4">
      <h2 className="font-playfair" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--burgundy)' }}>Frequently Asked Questions</h2>
      
      <div className="space-y-3">
        {faqs.map(faq => (
          <div key={faq.id} className="faq-item">
            <button
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              className="faq-question"
            >
              {faq.question}
              <i className={`fas fa-chevron-down ${openId === faq.id ? 'rotated' : ''}`}></i>
            </button>
            {openId === faq.id && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQScreen;