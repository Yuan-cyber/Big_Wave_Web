"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-gray-900"
        style={{
          backgroundImage:
            "url('/images/lea-poisson-3QEd-R2v9lk-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nazaré Big Waves
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the legendary giant waves that break world records and
            create surfing legends. Join us for the ultimate big wave adventure
            in Portugal's most spectacular coastal destination.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/booking"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors min-w-[160px] inline-block text-center"
            >
              Book Experience
            </a>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors min-w-[160px]">
              Watch Video
            </button>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-sunset-600 font-medium mb-2">
                SINCE 2010
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Handcrafted experiences by professionals
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    With us you will meet 100-foot waves and see extraordinary
                    surfing performances
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    We will take you to the best viewpoints and tell you the
                    most important stories
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Learn about Nazaré's unique underwater canyon and wave
                    science
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Experience the thrill and excitement of big wave surfing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Meet professional surfers and learn about their techniques
                    and safety
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <button className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg">
                  <Play
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-gray-300 rounded-lg"></div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Hero Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Every year, from October to March, Nazaré transforms into the
                stage for one of nature's most spectacular shows. The underwater
                Nazaré Canyon, extending 170 kilometers into the Atlantic,
                channels massive Atlantic swells into towering waves that can
                reach over 100 feet.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This unique geographical formation, combined with the right
                weather conditions, creates the perfect storm for big wave
                surfing legends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Learn more
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Shuttle Service from Airport
                </h3>
                <p className="text-gray-600">
                  We'll pick you up from Lisbon airport and transport you
                  directly to Nazaré. Comfortable, air-conditioned vehicles with
                  experienced local drivers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Accommodation & Meals
                </h3>
                <p className="text-gray-600">
                  Stay in carefully selected local accommodations. Enjoy
                  authentic Portuguese cuisine and fresh seafood with our meal
                  packages.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Water & Rescue Training / Tow in Surfing
                </h3>
                <p className="text-gray-600">
                  Safety-first approach with professional water rescue training.
                  Learn about tow-in surfing techniques and safety protocols.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Motivational Speeches
                </h3>
                <p className="text-gray-600">
                  Hear inspiring stories from professional big wave surfers.
                  Learn about their experiences and what drives them to tackle
                  these giants.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Surf Lessons
                </h3>
                <p className="text-gray-600">
                  For beginners, we offer surf lessons on smaller, safer waves.
                  Learn the fundamentals before witnessing the big wave action.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Photography / Drone
                </h3>
                <p className="text-gray-600">
                  Professional photography and drone footage capture your
                  experience. Take home incredible memories of your time with
                  the giant waves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Science */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Understanding Nazaré's Giant Waves
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Wave Science
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Underwater Canyon:</strong> The Nazaré Canyon extends
                  170km into the Atlantic Ocean, reaching depths of 5,000
                  meters. This unique geological formation acts as a funnel,
                  concentrating wave energy.
                </p>
                <p>
                  <strong>Wave Formation:</strong> Atlantic storms generate
                  powerful swells that travel across the ocean. When these
                  swells encounter the canyon, they are amplified and focused,
                  creating the massive waves Nazaré is famous for.
                </p>
                <p>
                  <strong>Seasonal Patterns:</strong> The biggest waves
                  typically occur between October and March, when North Atlantic
                  storms are most active and generate the largest swells.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Safety Operations
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Professional Rescue Teams:</strong> Dedicated water
                  safety teams with jet skis and rescue equipment are always on
                  standby during big wave sessions.
                </p>
                <p>
                  <strong>Weather Monitoring:</strong> Advanced forecasting
                  systems track wave conditions, wind patterns, and weather
                  changes to ensure optimal safety and viewing conditions.
                </p>
                <p>
                  <strong>Safety Protocols:</strong> All participants receive
                  comprehensive safety briefings and are equipped with
                  appropriate safety gear for viewing the waves from secure
                  locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Travellers Choice 2025
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            300+ Excellent Ratings at Tripadvisor
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-100 h-48 rounded-lg"></div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[...Array(4)].map((_, i) => (
              <div key={i + 4} className="bg-gray-100 h-48 rounded-lg"></div>
            ))}
          </div>
          <div className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg">
            <span className="font-semibold">
              View all reviews on TripAdvisor
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
