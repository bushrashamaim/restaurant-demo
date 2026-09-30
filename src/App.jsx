import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import MenuScreen from './components/MenuScreen';
import BookingScreen from './components/BookingScreen';
import OffersScreen from './components/OffersScreen';
import FAQScreen from './components/FAQScreen';
import LeadCaptureScreen from './components/LeadCaptureScreen';
import CartModal from './components/CartModal';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => {
      const newCart = prev.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          if (newQty <= 0) return null;
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(Boolean);
      return newCart;
    });
  };

  const getCartItemsCount = () => cart.reduce((sum, i) => sum + i.quantity, 0);
  const getCartTotal = () => cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="app-container">
      {/* Header */}
      <div className="header">
        <div className="header-logo">
          <i className="fas fa-crown"></i>
          <span>Saffron Grove</span>
        </div>
        <button className="cart-button" onClick={() => setCartOpen(true)}>
          <i className="fas fa-shopping-bag"></i>
          {getCartItemsCount() > 0 && (
            <span className="cart-badge">{getCartItemsCount()}</span>
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {activeTab === 'home' && <HomeScreen setActiveTab={setActiveTab} addToCart={addToCart} />}
        {activeTab === 'menu' && <MenuScreen addToCart={addToCart} setCartOpen={setCartOpen} />}
        {activeTab === 'booking' && <BookingScreen />}
        {activeTab === 'offers' && <OffersScreen setActiveTab={setActiveTab} />}
        {activeTab === 'faq' && <FAQScreen />}
        {activeTab === 'lead' && <LeadCaptureScreen setActiveTab={setActiveTab} />}
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        {['home', 'menu', 'booking', 'offers', 'faq'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`nav-item ${activeTab === tab ? 'active' : ''}`}
          >
            <i className={`fas ${
              tab === 'home' ? 'fa-home' :
              tab === 'menu' ? 'fa-utensils' :
              tab === 'booking' ? 'fa-calendar-alt' :
              tab === 'offers' ? 'fa-tags' : 'fa-question-circle'
            }`}></i>
            <span>{tab === 'faq' ? 'FAQs' : tab}</span>
          </button>
        ))}
      </div>

      {/* Cart Modal */}
      <CartModal
        cart={cart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        getCartTotal={getCartTotal}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}

export default App;