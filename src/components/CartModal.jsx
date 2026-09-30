import React from 'react';

function CartModal({ cart, cartOpen, setCartOpen, getCartTotal, updateQuantity }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${cartOpen ? 'visible' : 'hidden'}`}
        onClick={() => setCartOpen(false)}
      ></div>
      
      {/* Modal */}
      <div className={`cart-modal ${cartOpen ? 'open' : 'closed'}`}>
        <div className="cart-header">
          <h3 className="font-playfair" style={{ fontSize: '1.25rem' }}>Your Cart</h3>
          <button onClick={() => setCartOpen(false)} className="close-cart">
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--gray-500)' }}>
            <i className="fas fa-shopping-bag" style={{ fontSize: '3rem', marginBottom: '0.5rem', opacity: 0.5 }}></i>
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">${item.price} × {item.quantity}</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)} className="quantity-btn">-</button>
                  <span style={{ width: '1.5rem', textAlign: 'center' }}>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="quantity-btn">+</button>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <span>Total</span>
              <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>${getCartTotal()}</span>
            </div>
            <button className="btn-checkout">
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default CartModal;