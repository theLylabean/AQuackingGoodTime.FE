import React from "react";
import '../css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Welcome to A Ducking Good Time!</h1>
        <p className="hero-subtitle">Rubber duckies with attitude. Personality-packed. Totally quackers.</p>
      </section>

      {/* Featured Ducks */}
      <section className="featured-ducks-container">
        <h2 className="section-title">Featured Ducks</h2>
        <div className="duck-grid">
          {[
            {
                name: "Bride Rubber Ducky",
                image: "https://i.ibb.co/hRk1tQvJ/Bride-TUBBZ-PL-with-FESticker-1-jpg-12272.jpg",
            },
            {
                name: "Groom Rubber Ducky",
                image: "https://i.ibb.co/6cQdQ4W1/Groom-TUBBZ-PL-with-FESticker-1-jpg-53858.jpg",
            },
            {
                name: "Minion Bob Rubber Ducky",
                image: "https://i.ibb.co/HTBNSyPC/Bob-Minions-TUBBZ-PL-5-89780-1669983246-1280-1280-27984.jpg",
            },
            ].map((duck) => (
            <div key={duck.name} className="duck-card">
              <div className="duck-image-container">
                <img
                  src={duck.image}
                  alt={duck.name}
                  className="duck-image"
                />
              </div>
              <h3 className="duck-name">{duck.name}</h3>
              <p className="duck-tagline">Quack with style.</p>
              <button className="duck-button">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Our Ducks */}
      <section className="why-ducks-section">
        <h2 className="section-title">Not Your Average Tub Toy</h2>
        <p>
          We craft rubber duckies that make a splash — in your bath, on your desk, or in your heart. Each duck is
          hand-picked for peak personality.
        </p>
        <p className="duck-values">🧼 Quirky · 🎨 Collectible · 💯 One-of-a-kind</p>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonial-list">
          <blockquote>“I bought one as a joke. Now I own twelve.” — Justin L.</blockquote>
          <blockquote>“This duck flipped me off and I've never felt more seen.” — Lyla D.</blockquote>
          <blockquote>“My dog thinks it's his now. I ordered a second one.” — Tyler M.</blockquote>
        </div>
      </section>

      {/* Blog Teasers */}
      <section className="blog-section">
        <h2 className="section-title">Quack Blog</h2>
        <ul className="blog-list">
          <li>Behind the Beak: Designing our Rockstar Duckies</li>
          <li>Top 5 Ducks That Will Judge You</li>
          <li>Collector Tips: How to Display Your Ducks With Pride</li>
        </ul>
      </section>

      {/* Email Signup - non-functioning due to being a class project*/}
      <section className="email-signup">
        <h2 className="section-title">Join the Quack Club 🐣</h2>
        <p>Get exclusive duck alerts, early access to new releases, and bonus puns.</p>
        <div className="email-input-row">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>🛒 Shop · 🧼 About Us · 🗣️ Contact · 📦 FAQs</p>
        <p>No ducks were harmed in the making of this site. But they did get wet.</p>
      </footer>
    </div>
  );
};

export default Home;
