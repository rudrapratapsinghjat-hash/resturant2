import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  CalendarDays,
  Car,
  ChefHat,
  Clock,
  Coffee,
  Heart,
  Instagram,
  Leaf,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  X,
  Zap,
} from "lucide-react";
import "./styles.css";

const heroImage =
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=2200&q=85";

const aboutImages = [
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=85",
];

const specialities = [
  {
    title: "Paneer Specials",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
    desc: "Rich gravies, soft paneer, roasted spices, and a slow-cooked restaurant finish.",
  },
  {
    title: "South Indian",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85",
    desc: "Crisp dosas, fluffy idlis, tangy sambhar, and coconut chutney served fresh.",
  },
  {
    title: "Chinese",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=900&q=85",
    desc: "Family-favorite Indo-Chinese plates with balanced spice and smoky wok aroma.",
  },
  {
    title: "Punjabi Thali",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",
    desc: "Complete meals with sabzi, dal, rice, roti, raita, pickle, and sweets.",
  },
  {
    title: "Fast Food",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85",
    desc: "Fresh, quick, satisfying snacks for travelers, kids, and evening cravings.",
  },
  {
    title: "Tea & Snacks",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=900&q=85",
    desc: "Hot chai, crispy bites, and calm pauses for highway journeys.",
  },
  {
    title: "Family Dinner Combos",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=85",
    desc: "Generous dinner combinations made for sharing around a warm table.",
  },
  {
    title: "Traditional Sweets",
    image:
      "https://images.unsplash.com/photo-1605197183305-f69484bfe8d1?auto=format&fit=crop&w=900&q=85",
    desc: "Classic mithai and dessert plates to end every meal beautifully.",
  },
];

const reasons = [
  ["100% Pure Veg", Leaf],
  ["Hygienic Kitchen", ShieldCheck],
  ["Family Environment", Heart],
  ["Quick Service", Zap],
  ["Affordable Luxury", Award],
  ["Easy Parking", Car],
  ["Highway/Main Road Location", MapPin],
];

const gallery = [
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=85",
];

const reviews = [
  {
    name: "Rakesh Sharma",
    city: "Jaipur",
    text: "Beautiful ambience and amazing taste. Perfect place for family dinner.",
  },
  {
    name: "Priya Jain",
    city: "Indore",
    text: "Best pure veg restaurant near the highway. Clean, peaceful, and very comfortable.",
  },
  {
    name: "Amit Agrawal",
    city: "Delhi NCR",
    text: "Service was calm and respectful. The thali and paneer dishes felt premium.",
  },
];

function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1050);
    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-coal"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full border border-gold/40 bg-gold/10 shadow-glow">
              <Utensils className="h-9 w-9 text-gold" />
            </div>
            <p className="font-display text-xl tracking-[0.25em] text-cream">
              SHREE SHYAM KUNJ
            </p>
            <div className="mt-4 h-1 w-64 overflow-hidden rounded-full bg-cream/10">
              <span className="block h-full w-1/2 animate-shimmer bg-gold" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Menu", "Gallery", "Specialities", "Reviews", "Contact"];
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-cream/20 bg-coal/55 px-5 py-3 text-cream shadow-glass backdrop-blur-2xl">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-gold text-coal shadow-glow">
            <Leaf className="h-5 w-5" />
          </span>
          <span>
            <span className="block font-display text-base font-bold leading-tight md:text-lg">
              Shree Shyam Kunj
            </span>
            <span className="block text-[10px] uppercase tracking-[0.28em] text-gold">
              Pure Veg Restaurant
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden rounded-full bg-gold px-5 py-3 text-sm font-bold text-coal shadow-glow transition hover:-translate-y-0.5 hover:bg-cream md:inline-flex">
          Reserve Table
        </a>
        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <MenuIcon />}
        </button>
      </nav>
      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-cream/20 bg-coal/90 p-4 text-cream shadow-glass backdrop-blur-2xl lg:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block rounded-2xl px-4 py-3 font-semibold hover:bg-cream/10"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

const reveal = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.75, ease: "easeOut" },
};

function SectionTitle({ kicker, title, text }) {
  return (
    <motion.div {...reveal} className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-gold">{kicker}</p>
      <h2 className="font-display text-4xl font-bold text-cream md:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-cream/75 md:text-lg">{text}</p>}
    </motion.div>
  );
}

function Hero() {
  const badges = ["Family Friendly", "100% Pure Veg", "Hygienic Kitchen", "Highway Side Location"];
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Indian vegetarian feast" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-coal via-coal/70 to-coal/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(213,167,59,0.24),transparent_34%),radial-gradient(circle_at_20%_85%,rgba(196,86,22,0.26),transparent_32%)]" />
      </div>
      <div className="particles" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-cream/10 px-4 py-2 text-sm font-bold text-gold backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Prime main-road pure vegetarian dining
          </div>
          <h1 className="font-display text-5xl font-bold leading-tight text-cream sm:text-6xl lg:text-8xl">
            Pure Veg Excellence on Every Plate
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-cream/84 md:text-2xl">
            Experience authentic taste, premium hospitality, and family comfort at Shree Shyam Kunj Restaurant.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#menu" className="btn-primary">
              <Utensils className="h-5 w-5" /> View Menu
            </a>
            <a href="#contact" className="btn-secondary">
              <CalendarDays className="h-5 w-5" /> Reserve Table
            </a>
          </div>
          <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
            {badges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + index * 0.1 }}
                className="rounded-2xl border border-cream/18 bg-cream/10 p-4 text-sm font-bold text-cream shadow-glass backdrop-blur-xl"
              >
                <Star className="mb-2 h-4 w-4 fill-gold text-gold" />
                {badge}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section bg-leaf">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div {...reveal}>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-gold">About Us</p>
          <h2 className="font-display text-4xl font-bold text-cream md:text-6xl">
            Calm hospitality with a premium Indian soul.
          </h2>
          <p className="mt-6 text-lg leading-9 text-cream/78">
            Shree Shyam Kunj Restaurant brings families, travelers, couples, and highway customers into a peaceful
            pure vegetarian space where fresh ingredients, clean cooking, and respectful service shape every meal.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Family dining", "Pure vegetarian food", "Fresh ingredients", "Peaceful ambience", "Main road accessibility"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-cream/15 bg-cream/8 p-4 text-cream backdrop-blur-xl">
                  <ShieldCheck className="h-5 w-5 text-gold" />
                  <span className="font-semibold">{item}</span>
                </div>
              ),
            )}
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-4">
          {aboutImages.map((image, index) => (
            <motion.div
              key={image}
              {...reveal}
              transition={{ duration: 0.75, delay: index * 0.12 }}
              className={`overflow-hidden rounded-[2rem] border border-cream/15 shadow-glass ${index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/5]"}`}
            >
              <img src={image} alt="Restaurant ambience and food" className="h-full w-full object-cover transition duration-700 hover:scale-110" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Specialities() {
  return (
    <section id="menu" className="section bg-coal">
      <div id="specialities" className="mx-auto max-w-7xl px-5">
        <SectionTitle
          kicker="Signature Menu"
          title="Specialities served with polish"
          text="From rich North Indian comfort to quick highway snacks, every plate is designed to feel fresh, generous, and memorable."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {specialities.map((item, index) => (
            <motion.article
              key={item.title}
              {...reveal}
              transition={{ duration: 0.65, delay: (index % 4) * 0.08 }}
              className="group overflow-hidden rounded-[1.75rem] border border-cream/12 bg-cream/8 shadow-glass backdrop-blur-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/70 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-coal/65 px-3 py-1 text-xs font-bold text-gold backdrop-blur-md">
                  4.9 rating
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-cream/70">{item.desc}</p>
                <div className="mt-5 flex text-gold">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="section bg-[linear-gradient(135deg,#fff7e8,#f8dfb0)]">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div {...reveal} className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-saffron">Why Choose Us</p>
          <h2 className="font-display text-4xl font-bold text-leaf md:text-6xl">
            Trustworthy comfort for every kind of guest.
          </h2>
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(([label, Icon], index) => (
            <motion.div
              key={label}
              {...reveal}
              transition={{ duration: 0.65, delay: index * 0.06 }}
              className="group rounded-[1.5rem] border border-white/70 bg-white/55 p-6 shadow-[0_18px_50px_rgba(91,51,30,0.12)] backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/75"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-leaf text-gold shadow-glow transition group-hover:rotate-3">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-extrabold text-leaf">{label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [active, setActive] = useState(null);
  return (
    <section id="gallery" className="section bg-leaf">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle kicker="Gallery" title="A place that feels worth stopping for" text="Warm lighting, polished plates, and a family dining mood made for unhurried meals." />
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((image, index) => (
            <motion.button
              key={image}
              {...reveal}
              onClick={() => setActive(image)}
              className="mb-5 block w-full overflow-hidden rounded-[1.75rem] border border-cream/15 shadow-glass"
              aria-label="Open gallery image"
            >
              <img
                src={image}
                alt="Restaurant gallery"
                className={`w-full object-cover transition duration-700 hover:scale-105 ${index % 3 === 0 ? "h-80" : "h-64"}`}
              />
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-coal/85 p-5 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.img
              src={active}
              alt="Expanded restaurant gallery"
              className="max-h-[82vh] w-full max-w-5xl rounded-[2rem] object-cover shadow-glow"
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="section bg-coal">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle kicker="Reviews" title="Loved by families and travelers" />
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="rounded-[1.75rem] border border-cream/12 bg-cream/8 p-7 shadow-glass backdrop-blur-xl"
            >
              <div className="mb-6 flex text-gold">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-gold" />
                ))}
              </div>
              <p className="text-lg leading-9 text-cream/84">"{review.text}"</p>
              <div className="mt-8 border-t border-cream/10 pt-5">
                <h3 className="font-bold text-cream">{review.name}</h3>
                <p className="text-sm text-gold">{review.city}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section bg-[linear-gradient(135deg,#1f3d2f,#120e0a)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div {...reveal}>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-gold">Contact</p>
          <h2 className="font-display text-4xl font-bold text-cream md:text-6xl">
            Reserve a warm table on the main road.
          </h2>
          <p className="mt-5 text-lg leading-8 text-cream/75">
            Call, WhatsApp, or send a quick message for table bookings, group dining, and family visits.
          </p>
          <div className="mt-8 space-y-4">
            {[
              [Phone, "+91 98765 43210"],
              [MessageCircle, "WhatsApp for reservations"],
              [Instagram, "@shreeshyamkunjrestaurant"],
              [MapPin, "Prime Main Road Location, India"],
              [Clock, "Open Daily: 8:00 AM - 11:00 PM"],
            ].map(([Icon, label]) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl border border-cream/15 bg-cream/8 p-4 text-cream backdrop-blur-xl">
                <Icon className="h-5 w-5 text-gold" />
                <span className="font-semibold">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="tel:+919876543210">
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a className="btn-secondary" href="https://wa.me/919876543210">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </motion.div>
        <motion.div {...reveal} className="rounded-[2rem] border border-cream/15 bg-cream/10 p-4 shadow-glass backdrop-blur-xl">
          <div className="mb-4 grid h-72 place-items-center rounded-[1.5rem] border border-dashed border-gold/50 bg-coal/45 text-center text-cream">
            <div>
              <MapPin className="mx-auto mb-4 h-10 w-10 text-gold" />
              <p className="font-display text-2xl font-bold">Google Maps Embed</p>
              <p className="mt-2 text-cream/65">Replace with exact restaurant map location</p>
            </div>
          </div>
          <form className="grid gap-4">
            <input className="input" placeholder="Your name" aria-label="Your name" />
            <input className="input" placeholder="Phone number" aria-label="Phone number" />
            <select className="input" aria-label="Visit purpose">
              <option>Family Dinner</option>
              <option>Highway Stop</option>
              <option>Couple Dining</option>
              <option>Group Booking</option>
            </select>
            <textarea className="input min-h-32 resize-none" placeholder="Message" aria-label="Message" />
            <button className="btn-primary justify-center" type="button">
              Send Enquiry
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-coal px-5 py-12 text-cream">
      <div className="mx-auto grid max-w-7xl gap-8 border-t border-cream/10 pt-10 md:grid-cols-[1.3fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gold text-coal">
              <ChefHat className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold">Shree Shyam Kunj Restaurant</p>
              <p className="text-sm text-gold">Premium pure vegetarian family dining</p>
            </div>
          </div>
          <p className="mt-6 max-w-xl leading-8 text-cream/65">
            Made with love for Shree Shyam Kunj Restaurant.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-gold">Quick Links</h3>
          {["Home", "About", "Menu", "Gallery", "Reviews", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="mb-2 block text-cream/70 hover:text-gold">
              {item}
            </a>
          ))}
        </div>
        <div>
          <h3 className="mb-4 font-bold text-gold">Business Timings</h3>
          <p className="text-cream/70">Monday - Sunday</p>
          <p className="mt-2 text-xl font-bold">8:00 AM - 11:00 PM</p>
          <div className="mt-5 flex gap-3">
            <a className="social" href="https://instagram.com" aria-label="Instagram">
              <Instagram />
            </a>
            <a className="social" href="https://wa.me/919876543210" aria-label="WhatsApp">
              <MessageCircle />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialities />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
