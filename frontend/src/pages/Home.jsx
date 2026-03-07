import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero animate-fade">
        <div className="hero-content">
          <h1 className="hero-title">Healthy Meals, <br/><span className="text-primary">Delivered to You.</span></h1>
          <p className="hero-subtitle">Fresh, home-cooked tiffins delivered to your doorstep. Join 1000+ happy foodies today.</p>
          <div className="hero-btns">
            <button className="btn btn-primary">Check Menu</button>
            <button className="btn glass-btn">How it Works</button>
          </div>
        </div>
        <div className="hero-image-container">
            {/* Image will be generated later */}
          <div className="hero-glow"></div>
        </div>
      </header>

      <section className="plans-preview">
        <h2 className="section-title">Our Popular Plans</h2>
        <div className="plans-grid">
          {['Veg Deluxe', 'Non-Veg Special', 'Diet Plan'].map((plan, index) => (
            <div key={index} className="glass-card plan-card">
              <h3>{plan}</h3>
              <p>Starting at ₹2499/month</p>
              <button className="btn btn-outline">Select Plan</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
