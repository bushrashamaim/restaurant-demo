import React from 'react';

const todaySpecials = [
  { id: '1', name: 'Truffle Arancini', price: 14, description: 'Crispy risotto balls, truffle aioli' },
  { id: '3', name: 'Wild Mushroom Risotto', price: 26, description: 'Truffle oil, parmesan crisp' },
  { id: '7', name: 'Salted Caramel Lava Cake', price: 12, description: 'Warm chocolate, vanilla gelato' },
];

function HomeScreen({ setActiveTab, addToCart }) {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="hero-card">
        <h1 className="hero-title">Saffron Grove</h1>
        <p className="hero-subtitle">Modern Global Cuisine</p>
        <div className="hero-buttons">
          <button onClick={() => setActiveTab('menu')} className="btn-primary">
            <i className="fas fa-utensils mr-2"></i>View Menu
          </button>
          <button onClick={() => setActiveTab('booking')} className="btn-secondary">
            <i className="fas fa-calendar-alt mr-2"></i>Book Table
          </button>
        </div>
      </div>

      {/* Quick Access */}
      <div className="quick-access">
        {[
          { tab: 'menu', icon: 'fa-utensils', label: 'Menu' },
          { tab: 'booking', icon: 'fa-calendar-check', label: 'Booking' },
          { tab: 'offers', icon: 'fa-tags', label: 'Offers' },
          { tab: 'faq', icon: 'fa-question-circle', label: 'FAQs' }
        ].map(item => (
          <button key={item.tab} onClick={() => setActiveTab(item.tab)} className="quick-item">
            <i className={`fas ${item.icon}`}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Today's Specials */}
      <div>
        <h2 className="font-playfair" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--burgundy)', marginBottom: '0.75rem' }}>
          ✨ Chef's Specials
        </h2>
        <div className="space-y-3">
          {todaySpecials.map(item => (
            <div key={item.id} className="menu-card">
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p className="menu-description">{item.description}</p>
                <p className="menu-price">${item.price}</p>
              </div>
              <button onClick={() => addToCart(item)} className="btn-add">
                <i className="fas fa-plus"></i> Add
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Promo Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
        borderRadius: '1rem',
        padding: '1rem',
        marginTop: '1rem',
        color: 'white'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <i className="fas fa-gift" style={{ fontSize: '1.5rem' }}></i>
          <div>
            <p style={{ fontWeight: 'bold' }}>Special Offer!</p>
            <p style={{ fontSize: '0.75rem' }}>15% off on first order. Code: <span style={{ fontFamily: 'monospace', background: 'rgba(0,0,0,0.2)', padding: '0.125rem 0.5rem', borderRadius: '0.5rem' }}>SAFFRON15</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;