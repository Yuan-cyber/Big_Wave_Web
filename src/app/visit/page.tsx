import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description:
    "Everything you need to know to plan your perfect big wave experience in Nazaré, Portugal.",
};

export default function VisitPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-wave-600 to-ocean-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Plan Your Visit
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your comprehensive guide to experiencing the legendary big waves of
            Nazaré, from when to visit to where to stay.
          </p>
        </div>
      </section>

      {/* When to Visit Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            When to Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-wave-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Big Wave Season
              </h3>
              <p className="text-sm text-gray-500 mb-2">October - March</p>
              <p className="text-gray-600">
                Peak season for giant waves. Best conditions for world-record
                breaking swells and professional surfing events.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sunset-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">☀️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Summer Season
              </h3>
              <p className="text-sm text-gray-500 mb-2">April - September</p>
              <p className="text-gray-600">
                Calmer waters perfect for beginner surf lessons, cultural tours,
                and enjoying the beach atmosphere.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-coral-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Festival Season
              </h3>
              <p className="text-sm text-gray-500 mb-2">August - September</p>
              <p className="text-gray-600">
                Traditional festivals, local celebrations, and the best time to
                experience authentic Nazaré culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Here Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How to Get Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ✈️ By Air
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Lisbon Airport:</strong> 120km (1.5 hours drive)
                </p>
                <p>
                  <strong>Porto Airport:</strong> 200km (2 hours drive)
                </p>
                <p>We offer airport pickup services for all experiences.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🚗 By Car
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>From Lisbon:</strong> A8 motorway to Nazaré
                </p>
                <p>
                  <strong>From Porto:</strong> A1 then A8 to Nazaré
                </p>
                <p>Free parking available near the lighthouse.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🚌 By Bus
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>From Lisbon:</strong> Direct bus service daily
                </p>
                <p>
                  <strong>Journey time:</strong> 2 hours
                </p>
                <p>Bus station is 10 minutes walk from the beach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Stay Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Where to Stay
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Accommodation Options
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-wave-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Beachfront Hotels
                  </h4>
                  <p className="text-gray-600">
                    Wake up to ocean views and be steps away from the action.
                    Perfect for wave watching enthusiasts.
                  </p>
                </div>
                <div className="border-l-4 border-sunset-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Traditional Guesthouses
                  </h4>
                  <p className="text-gray-600">
                    Experience authentic Portuguese hospitality in family-run
                    pensions with local charm.
                  </p>
                </div>
                <div className="border-l-4 border-coral-600 pl-6">
                  <h4 className="text-lg font-semibent text-gray-900 mb-2">
                    Vacation Rentals
                  </h4>
                  <p className="text-gray-600">
                    Private apartments and houses perfect for families and
                    longer stays.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500">Accommodation Map</span>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What to Bring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl">🧥</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Warm Clothing
              </h3>
              <p className="text-gray-600 text-sm">
                Layers for changing weather conditions, especially during big
                wave season.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl">👟</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Comfortable Shoes
              </h3>
              <p className="text-gray-600 text-sm">
                Non-slip shoes for rocky viewpoints and walking on the beach.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Camera/Phone</h3>
              <p className="text-gray-600 text-sm">
                Capture incredible moments, but we also provide professional
                photography.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl">🕶️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Sun Protection
              </h3>
              <p className="text-gray-600 text-sm">
                Sunglasses and sunscreen for bright days and reflection from the
                water.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Tips Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Local Tips
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  💡 Insider Tips
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Best wave viewing is from the lighthouse area</li>
                  <li>• Arrive early for the best parking spots</li>
                  <li>• Try the local seafood restaurants</li>
                  <li>• Respect the power of the ocean at all times</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  🌐 Useful Information
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free WiFi available in most cafes</li>
                  <li>• ATMs available in the town center</li>
                  <li>• English is widely spoken in tourist areas</li>
                  <li>• Emergency services: 112</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-wave-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Visit?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for personalized recommendations and to book your
            unforgettable Nazaré experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-wave-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
            <a
              href="/booking"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-wave-600 transition-colors inline-block"
            >
              Book Experience
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
