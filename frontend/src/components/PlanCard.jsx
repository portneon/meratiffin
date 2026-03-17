import React from 'react';

const PlanCard = ({ name, price, type, duration }) => {
  return (
    <div className="glass-card plan-card animate-fade">
      <div className="plan-badge">{type}</div>
      <h3 className="plan-name">{name}</h3>
      <p className="plan-price">₹{price}<span>/{duration === 'Monthly' ? 'mo' : 'day'}</span></p>
      <ul className="plan-features">
        <li>Home-cooked quality</li>
        <li>Eco-friendly packaging</li>
        <li>Free delivery</li>
      </ul>
      <button className="btn btn-primary">Subscribe Now</button>
    </div>
  );
};

export default PlanCard;
