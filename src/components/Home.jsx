import React from "react";
import Button from "./ui/Button.jsx";

const Home = () => {
  return (
    <div className="space-y-12 p-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to A Ducking Good Time!</h1>
        <p className="text-lg">Rubber duckies with attitude. Personality-packed. Totally quackers.</p>
        <div className="flex justify-center gap-4">
          <Button>Shop All Ducks</Button>
          <Button variant="outline">Bundle Deals</Button>
          <Button variant="ghost">Meet the Flock</Button>
        </div>
      </section>

{/* Featured Ducks */}
<section>
  <h2 className="text-2xl font-semibold mb-4">Featured Ducks</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
    {[
      {
        name: "Bride Rubber Ducky",
        image: "https://via.placeholder.com/200",
      },
      {
        name: "Groom Rubber Ducky",
        image: "https://via.placeholder.com/200",
      },
      {
        name: "Minion Bob Rubber Ducky",
        image: "https://via.placeholder.com/200"
      },
    ].map((duck) => (
    <div
        key={duck.name}
        className="border rounded-xl p-4 w-60 shadow text-center"
    >
        <div className="w-40 h-40 rounded-lg overflow-hidden mx-auto mb-2 border border-gray-200">
            <img
                src={duck.image}
                alt={duck.name}
                className="w-full h-full object-cover rounded-lg"
            />
        </div>

        <h3 className="text-lg font-medium">{duck.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">Quack with style.</p>
        <Button className="w-full">Add to Cart</Button>
    </div>
    ))}
  </div>
</section>

      {/* Why Our Ducks */}
      <section className="text-center space-y-3">
        <h2 className="text-2xl font-semibold">Not your average tub toy.</h2>
        <p>
          We craft rubber duckies that make a splash — in your bath, on your desk, or in your heart. Each duck is
          hand-picked for peak personality.
        </p>
        <p className="text-muted-foreground">🧼 Quirky · 🎨 Collectible · 💯 One-of-a-kind</p>
        <Button>See the Full Collection</Button>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">What Our Customers Say</h2>
        <div className="space-y-4">
          <blockquote className="border-l-4 pl-4 italic">“I bought one as a joke. Now I own twelve.” — Justin L.</blockquote>
          <blockquote className="border-l-4 pl-4 italic">“This duck flipped me off and I’ve never felt more seen.” — Lyla D.</blockquote>
          <blockquote className="border-l-4 pl-4 italic">“My dog thinks it’s his now. I ordered a second one.” — Max M.</blockquote>
        </div>
      </section>

      {/* Blog Teasers */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Quack Blog</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Behind the Beak: Designing our Rockstar Duckies</li>
          <li>Top 5 Ducks That Will Judge You</li>
          <li>Collector Tips: How to Display Your Ducks With Pride</li>
        </ul>
      </section>

      {/* Email Signup */}
      <section className="text-center space-y-3 bg-muted p-6 rounded-xl">
        <h2 className="text-2xl font-semibold">Join the Quack Club 🐣</h2>
        <p>Get exclusive duck alerts, early access to new releases, and bonus puns.</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded border"
        />
        <Button className="ml-2">Subscribe</Button>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-muted-foreground mt-12 border-t pt-6">
        <p>🛒 Shop · 🧼 About Us · 🗣️ Contact · 📦 FAQs</p>
        <p className="mt-2">No ducks were harmed in the making of this site. But they did get wet.</p>
      </footer>
    </div>
  );
};

export default Home;
