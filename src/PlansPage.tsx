import React, { useState } from 'react';
import './plans.css';

function PlansPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const handleToggle = () => {
    setBillingCycle(prev => (prev === 'monthly' ? 'yearly' : 'monthly'));
  };

  return (
    <div className="plans-page">
      <section className="plans-hero">
        <h1>Honor Their Legacy, Your Way</h1>
        <p className="plans-subtitle">Choose a plan that best reflects your tribute.</p>
        <div className="billing-toggle">
          <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
          <label className="switch">
            <input type="checkbox" checked={billingCycle === 'yearly'} onChange={handleToggle} />
            <span className="slider"></span>
          </label>
          <span className={billingCycle === 'yearly' ? 'active' : ''}>Yearly</span>
        </div>
      </section>

      <section className="plan-cards">
        <div className="plan-card">
          <h3>Hall Pass</h3>
          <p className="plan-price">Free</p>
          <p className="plan-desc">Always free. A simple way to honor someone.</p>
          <a href="#" className="button primary">Select</a>
        </div>

        <div className="plan-card popular">
          <h3>Memory Lane</h3>
          <p className="plan-price">
            {billingCycle === 'monthly' ? '$4.95/mo' : '$49.95/yr'}
          </p>
          <p className="plan-desc">Unlock richer memorial features.</p>
          <a href="#" className="button primary">Select</a>
        </div>

        <div className="plan-card">
          <h3>Legacy Locker</h3>
          <p className="plan-price">$99.00</p>
          <p className="plan-desc">Preserve their memory forever.</p>
          <a href="#" className="button primary">Select</a>
        </div>
      </section>

      <section className="comparison-table">
        <h2>Compare Features</h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Hall Pass</th>
              <th>Memory Lane</th>
              <th>Legacy Locker</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No Ads</td>
              <td>❌</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Custom Themes</td>
              <td>Limited</td>
              <td>Full Access</td>
              <td>Full Access</td>
            </tr>
            <tr>
              <td>Photo Gallery</td>
              <td>Up to 5</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Add Music/Videos</td>
              <td>❌</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Collaborators</td>
              <td>❌</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Privacy Settings</td>
              <td>Basic</td>
              <td>Advanced</td>
              <td>Advanced</td>
            </tr>
            <tr>
              <td>Permanent Memorial</td>
              <td>❌</td>
              <td>❌</td>
              <td>✅</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default PlansPage;
