import React, { useState } from 'react';

const menuItems = [
  { id: '1', name: 'Truffle Arancini', price: 14, category: 'Starters', description: 'Crispy risotto balls, truffle aioli' },
  { id: '2', name: 'Burrata Salad', price: 16, category: 'Starters', description: 'Creamy burrata, heirloom tomatoes, basil' },
  { id: '3', name: 'Wild Mushroom Risotto', price: 26, category: 'Mains', description: 'Arborio rice, porcini, truffle oil' },
  { id: '4', name: 'Herb-Crusted Lamb Rack', price: 42, category: 'Mains', description: 'Roasted vegetables, red wine jus' },
  { id: '5', name: 'Wagyu Beef Burger', price: 32, category: 'Grill', description: 'Caramelized onions, aged cheddar' },
  { id: '6', name: 'Grilled Octopus', price: 34, category: 'Grill', description: 'Chorizo, potato purée, paprika oil' },
  { id: '7', name: 'Salted Caramel Lava Cake', price: 12, category: 'Desserts', description: 'Warm chocolate, vanilla gelato' },
  { id: '8', name: 'Classic Tiramisu', price: 10, category: 'Desserts', description: 'Mascarpone, espresso, cocoa' },
  { id: '9', name: 'Espresso Martini', price: 15, category: 'Beverages', description: 'Vodka, coffee liqueur, espresso' },
  { id: '10', name: 'Sparkling Rosé', price: 13, category: 'Beverages', description: 'Provence blend, berry notes' },
];

const categories = ['All', 'Starters', 'Mains', 'Grill', 'Desserts', 'Beverages'];

function MenuScreen({ addToCart, setCartOpen }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-4">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="font-playfair" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--burgundy)' }}>Our Menu</h2>
        <button onClick={() => setCartOpen(true)} style={{ background: 'white', padding: '0.5rem', borderRadius: '9999px', boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)' }}>
          <i className="fas fa-shopping-bag" style={{ color: 'var(--burgundy)' }}></i>
        </button>
      </div>

      {/* Category Filters */}
      <div className="category-filters">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="space-y-3">
        {filteredItems.map(item => (
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
  );
}

export default MenuScreen;