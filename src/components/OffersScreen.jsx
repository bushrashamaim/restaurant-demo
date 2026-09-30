import React, { useState } from 'react';

const promoCodes = [
  { code: 'SAFFRON20', discount: '20% OFF', description: 'on à la carte menu' },
  { code: 'WELCOME10', discount: '$10 OFF', description: 'on first order above $50' },
  { code: 'HAPPYHOUR', discount: '15% OFF', description: 'on beverages 5-7 PM' },
];

function OffersScreen({ setActiveTab }) {
  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-4">
      <h2 className="font-playfair" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--burgundy)' }}>Exclusive Offers</h2>
      
      <div className="space-y-3">
        {promoCodes.map(promo => (
          <div key={promo.code} className="promo-card">
            <div className="promo-header">
              <div>
                <p className="promo-discount">{promo.discount}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>{promo.description}</p>
                <code className="promo-code">{promo.code}</code>
              </div>
              <button onClick={() => copyToClipboard(promo.code)} className="btn-copy">
                {copiedCode === promo.code ? <i className="fas fa-check"></i> : <i className="fas fa-copy"></i>}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lead Capture Banner */}
      <div style={{
        background: 'linear-gradient(135deg, var(--burgundy), var(--burgundy-light))',
        borderRadius: '1rem',
        padding: '1.25rem',
        color: 'white',
        marginTop: '0.5rem'
      }}>
        <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>🎁 Special Discount Flow</p>
        <p style={{ fontSize: '0.75rem', opacity: 0.9, marginTop: '0.25rem' }}>Get an exclusive 25% off — just share your details</p>
        <button onClick={() => setActiveTab('lead')} className="btn-primary" style={{ marginTop: '0.75rem', background: 'var(--gold)', color: 'var(--burgundy)' }}>
          Claim Offer <i className="fas fa-arrow-right ml-1"></i>
        </button>
      </div>
    </div>
  );
}

export default OffersScreen;