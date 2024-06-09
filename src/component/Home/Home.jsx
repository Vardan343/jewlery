import './Home.css';
import { useState } from 'react';

function Home() {
    const [sun, setSun] = useState(false);

    return (
        <section className="collection">
            <div className="text-container">
                <h2>Cilician Ring</h2>
                <span>New Collection</span>
                <p>Exclusive Gold rings for You</p>
                <button className="button" onClick={() => setSun(!sun)}>SHOP NOW</button>
            </div>
            {sun && (
  <div className="container" onClick={() => setSun(false)}>
    <form className="form-container" onClick={(e) => e.stopPropagation()}>
      <p className="delete" onClick={() => setSun(false)}>X</p>
      <input
        type="text"
        name="name"
        placeholder="Name"
        aria-label="Name"
        autoComplete="name"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        aria-label="Last Name"
        autoComplete="family-name"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        aria-label="Email"
        autoComplete="email"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone number"
        aria-label="Phone number"
        autoComplete="tel"
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        aria-label="City"
        autoComplete="address-level2"
      />
      <button type="submit">PAY</button>
    </form>
  </div>
)}

        </section>
    );
}

export default Home;
