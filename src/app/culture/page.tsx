import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nazaré Culture",
  description:
    "Discover the rich maritime heritage and cultural traditions of Nazaré, Portugal's legendary fishing village.",
};

export default function CulturePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-sand-600 to-sunset-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nazaré Culture
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Immerse yourself in the rich maritime heritage and authentic
            traditions of Portugal's most famous fishing village.
          </p>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Maritime Heritage
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                For centuries, Nazaré has been home to brave fishermen who
                ventured into the Atlantic's treacherous waters. Their legacy
                lives on in every giant wave that breaks on our shores.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sand-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Traditional fishing techniques passed down through
                    generations
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sand-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Ancient legends and stories of the sea
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sand-600 rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    Preserved architecture and historic landmarks
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500">Traditional Fishing Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Traditions Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Living Traditions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 bg-sand-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-sand-700 font-semibold">
                  Traditional Dress
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Traditional Dress
              </h3>
              <p className="text-gray-600">
                The iconic seven-layered skirts worn by fishermen's wives, each
                layer representing a different aspect of their maritime life.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 bg-ocean-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-ocean-700 font-semibold">
                  Fishing Boats
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Colorful Boats
              </h3>
              <p className="text-gray-600">
                Brightly painted fishing boats that dot the beach, each with
                unique designs and family symbols passed down through
                generations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 bg-coral-200 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-coral-700 font-semibold">
                  Local Festivals
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Local Festivals
              </h3>
              <p className="text-gray-600">
                Annual celebrations honoring Our Lady of Nazaré, featuring
                processions, traditional music, and community gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Cuisine Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Local Cuisine
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500">Local Cuisine Image</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Taste of the Sea
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Fresh Seafood
                  </h4>
                  <p className="text-gray-600">
                    Daily catches prepared with traditional recipes, featuring
                    grilled sardines, caldeirada stew, and fresh octopus.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Traditional Sweets
                  </h4>
                  <p className="text-gray-600">
                    Local pastries like pastéis de nata and regional specialties
                    made with ancient family recipes.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Local Wines
                  </h4>
                  <p className="text-gray-600">
                    Regional wines from the nearby Óbidos and Leiria regions,
                    perfectly paired with fresh seafood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legends Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Legends of Nazaré
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Legend of Our Lady of Nazaré
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                In 1182, a knight named Dom Fuas Roupinho was hunting on a foggy
                morning when his horse nearly plunged off a cliff. He called
                upon Our Lady of Nazaré for help, and miraculously, his horse
                stopped just in time. In gratitude, he built a chapel on the
                site, which became a place of pilgrimage and gave the town its
                name.
              </p>
              <div className="border-l-4 border-sand-600 pl-6">
                <p className="text-gray-700 italic">
                  "This legend embodies the deep spiritual connection between
                  the people of Nazaré and the sea, a relationship built on
                  respect, faith, and the understanding that nature's power must
                  be honored."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Culture Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Experience Our Culture
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us for cultural tours that combine wave watching with authentic
            local experiences, traditional cuisine, and stories passed down
            through generations.
          </p>
          <a
            href="/booking"
            className="bg-sand-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sand-700 transition-colors inline-block"
          >
            Book Cultural Experience
          </a>
        </div>
      </section>
    </div>
  );
}
