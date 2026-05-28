/*
=========================================
INFOVERSE - PROFESSIONAL MEDIA WEBSITE
=========================================

🔥 COMPLETE REACT + TAILWIND SETUP

1️⃣ CREATE PROJECT
-----------------------------------------
npm create vite@latest infoverse
cd infoverse
npm install

2️⃣ INSTALL TAILWIND CSS
-----------------------------------------
npm install tailwindcss @tailwindcss/vite

3️⃣ UPDATE vite.config.js
-----------------------------------------
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})

4️⃣ UPDATE src/index.css
-----------------------------------------
@import "tailwindcss";

5️⃣ RUN WEBSITE
-----------------------------------------
npm run dev

=========================================
📁 COMPLETE FOLDER STRUCTURE
=========================================

infoverse/
│
├── public/
│   ├── favicon.ico
│   ├── logo.png
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Categories.jsx
│   │   ├── Articles.jsx
│   │   ├── Footer.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│
├── package.json
├── vite.config.js
├── tailwind.config.js

=========================================
🚀 GITHUB UPLOAD COMMANDS
=========================================

git init
git add .
git commit -m "InfoVerse Website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_LINK
git push -u origin main

=========================================
🌐 VERCEL HOSTING
=========================================

1. Open:
https://vercel.com

2. Login with GitHub

3. Import Repository

4. Click Deploy

✅ Website Live

=========================================
🔍 SEO SETTINGS
=========================================

UPDATE index.html

<title>InfoVerse - Trending News, Technology & Knowledge</title>

<meta name="description" content="InfoVerse is a modern media platform covering trending news, technology, spirituality, education, and social awareness." />

<meta name="keywords" content="news blog, technology, AI, spiritual, education, trending news, India news" />

<meta name="author" content="BRAJNANDAN" />

=========================================
📱 SOCIAL MEDIA LINKS
=========================================

WhatsApp:
https://wa.me/qr/FBO3M7GM47NUJ1

Facebook:
https://www.facebook.com/share/18q5uxoz3R/

Instagram:
https://www.instagram.com/braj_thesocialbook?igsh=Mm96Zmlrdmlvb2Fl

=========================================
🔥 RECOMMENDED DOMAIN
=========================================

infoverse.in
infoversemedia.com
theinfoverse.in

=========================================
⚡ BUILD COMMAND
=========================================

npm run build

=========================================
📂 DIST FOLDER DEPLOYMENT
=========================================

After build complete:

/dist

Upload this folder to:
- Netlify
- Hostinger
- Vercel
- cPanel Hosting

=========================================
🎯 FUTURE FEATURES YOU CAN ADD
=========================================

✅ Admin Panel
✅ Article Upload System
✅ Firebase Database
✅ Google Adsense
✅ Dark/Light Mode
✅ Hindi + English Translation
✅ Search System
✅ User Login
✅ Live News Feed

=========================================
*/

export default function InfoVerseWebsite() {
  const posts = [
    {
      title: "AI Future in India",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
      desc: "Explore how artificial intelligence is transforming education, business, and daily life in India.",
    },
    {
      title: "Social Media Impact on Society",
      category: "Social",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200&auto=format&fit=crop",
      desc: "Understanding the positive and negative effects of social media on modern generations.",
    },
    {
      title: "Spiritual Power of Meditation",
      category: "Spiritual",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
      desc: "Meditation helps improve focus, peace, and mental strength in a fast-moving world.",
    },
  ];

  const categories = [
    "Trending",
    "Technology",
    "News",
    "Spiritual",
    "Education",
    "Business",
    "Social",
    "Lifestyle",
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-100 text-gray-900 min-h-screen font-sans">
      {/* Navbar */}
      <header className="border-b border-gray-200 sticky top-0 bg-white/90 backdrop-blur z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-3xl font-bold tracking-wide">
              <span className="text-blue-600">Info</span>
              <span className="text-purple-600">Verse</span>
            </h1>
            <p className="text-xs text-gray-500">Knowledge • Trends • Reality</p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-gray-700 font-medium">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">News</a>
            <a href="#" className="hover:text-white transition">Technology</a>
            <a href="#" className="hover:text-white transition">Spiritual</a>
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="h-[85vh] bg-cover bg-center flex items-center rounded-b-[50px] overflow-hidden mx-4 mt-4 shadow-2xl"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-700/60"></div>

          <div className="relative max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
                Trending Media Platform
              </span>

              <h2 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
                Welcome to <span className="text-gray-400">InfoVerse</span>
              </h2>

              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Discover trending news, deep insights, technology updates,
                spiritual thoughts, and social awareness articles in one modern
                platform.
              </p>

              <div className="mt-8 flex gap-4 flex-wrap">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition shadow-xl">
                  Explore Articles
                </button>

                <button className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
                  Watch Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold">Popular Categories</h3>
          <p className="text-gray-400">Explore all topics</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-blue-100 rounded-3xl p-6 shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
            >
              <h4 className="text-xl font-semibold">{item}</h4>
              <p className="text-gray-400 mt-2 text-sm">
                Latest updates and insights.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold">Featured Articles</h3>
          <button className="border border-gray-700 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] overflow-hidden border border-gray-100 shadow-xl hover:scale-[1.02] transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <span className="text-sm bg-white text-black px-3 py-1 rounded-full">
                  {post.category}
                </span>

                <h4 className="text-2xl font-bold mt-4 leading-snug">
                  {post.title}
                </h4>

                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  {post.desc}
                </p>

                <button className="mt-6 text-white border-b border-gray-500 hover:border-white transition">
                  Read Full Article →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="About"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <h3 className="text-4xl font-bold mb-6">About InfoVerse</h3>

            <p className="text-gray-400 leading-relaxed text-lg">
              InfoVerse is a modern digital media platform designed to deliver
              trending stories, insightful blogs, social awareness content,
              technology updates, and inspirational articles with a premium
              reading experience.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800">
                <h4 className="text-3xl font-bold">10K+</h4>
                <p className="text-gray-400 mt-2">Monthly Readers</p>
              </div>

              <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800">
                <h4 className="text-3xl font-bold">500+</h4>
                <p className="text-gray-400 mt-2">Published Articles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-[40px] p-10 text-center shadow-2xl">
          <h3 className="text-4xl font-bold">Join The InfoVerse Community</h3>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Get the latest articles, trending updates, and premium insights
            directly in your inbox.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black border border-gray-700 px-5 py-4 rounded-xl w-full md:w-[400px] outline-none"
            />

            <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-2xl font-bold">InfoVerse</h4>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Modern media platform for news, technology, social awareness,
              spirituality, and knowledge-based content.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Categories</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Technology</li>
              <li>News</li>
              <li>Spiritual</li>
              <li>Social</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Follow Us</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="https://wa.me/qr/FBO3M7GM47NUJ1" target="_blank" className="hover:text-blue-600 transition">💬 WhatsApp Community</a></li>
              <li><a href="https://www.facebook.com/share/18q5uxoz3R/" target="_blank" className="hover:text-blue-600 transition">📘 Facebook Page</a></li>
              <li><a href="https://www.instagram.com/braj_thesocialbook?igsh=Mm96Zmlrdmlvb2Fl" target="_blank" className="hover:text-pink-600 transition">📸 Instagram Profile</a></li>
              <li><a href="#" className="hover:text-red-600 transition">📌 Pinterest Profile</a></li>
              <li><a href="mailto:brajnandanbv@gmail.com" className="hover:text-purple-600 transition">📩 brajnandanbv@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-5 text-center text-gray-500 text-sm">
          © 2026 InfoVerse. All Rights Reserved.
        </div>
            {/* Floating Social Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a
          href="https://wa.me/qr/FBO3M7GM47NUJ1"
          target="_blank"
          className="bg-green-500 text-white px-5 py-3 rounded-full shadow-2xl hover:scale-110 transition font-semibold"
        >
          WhatsApp
        </a>

        <a
          href="https://www.facebook.com/share/18q5uxoz3R/"
          target="_blank"
          className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-2xl hover:scale-110 transition font-semibold"
        >
          Facebook
        </a>

        <a
          href="https://www.instagram.com/braj_thesocialbook?igsh=Mm96Zmlrdmlvb2Fl"
          target="_blank"
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-3 rounded-full shadow-2xl hover:scale-110 transition font-semibold"
        >
          Instagram
        </a>
      </div>
    </footer>
    </div>
  );
}
