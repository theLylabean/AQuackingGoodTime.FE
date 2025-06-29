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
    <section className="border border-gray-300 rounded-[12xx] p-6 w-fit mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Featured Ducks</h2>
        <div className="flex flex-wrap justify-center gap-8">
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
            <div
                key={duck.name}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-[350px] text-center"
            >
                <div className="w-[300px] h-[300px] objext-cover mx-auto rounded-full mb-4 border-0">
                    <img
                        src={duck.image}
                        alt={duck.name}
                        className="w-[300px] h-[300px] object-cover rounded-full mx-auto mb-4 border-2 border-white dark:border-gray-900"
                />
                </div>

                <h3 className="text-lg font-medium">{duck.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">Quack with style.</p>
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
          <blockquote className="border-l-4 pl-4 italic">“My dog thinks it’s his now. I ordered a second one.” — Tyler M.</blockquote>
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
