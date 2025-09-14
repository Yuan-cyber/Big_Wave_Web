import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wave Science & Safety",
  description:
    "Learn about the science behind Nazaré's giant waves and our comprehensive safety protocols.",
};

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Wave Science Main Section */}
      <section className="pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <p className="text-sm text-gray-500 mb-2">
              Understanding the forces behind Nazaré's legendary waves
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Wave Science
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem.
                </p>
              </div>
            </div>

            {/* Right Image/Diagram */}
            <div className="flex items-center justify-center">
              <div className="w-full h-96 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl text-gray-400 mb-4">📊</div>
                  <span className="text-gray-500 text-lg">
                    Wave Science Diagram
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Key Concepts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Concept 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div className="h-48 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-gray-400 mb-2">🌊</div>
                  <span className="text-gray-500 text-sm">Concept Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Canyon Formation
                </h3>
                <p className="text-gray-600 text-sm">
                  The underwater canyon that creates the perfect conditions for
                  giant waves.
                </p>
              </div>
            </div>

            {/* Concept 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div className="h-48 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-gray-400 mb-2">⚡</div>
                  <span className="text-gray-500 text-sm">Concept Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Wave Energy
                </h3>
                <p className="text-gray-600 text-sm">
                  How ocean swells concentrate and amplify their power at
                  Nazaré.
                </p>
              </div>
            </div>

            {/* Concept 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div className="h-48 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-gray-400 mb-2">🌀</div>
                  <span className="text-gray-500 text-sm">Concept Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Storm Systems
                </h3>
                <p className="text-gray-600 text-sm">
                  Atlantic storms that generate the massive swells heading to
                  shore.
                </p>
              </div>
            </div>

            {/* Concept 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div className="h-48 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-gray-400 mb-2">📏</div>
                  <span className="text-gray-500 text-sm">Concept Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Wave Measurement
                </h3>
                <p className="text-gray-600 text-sm">
                  Scientific methods used to measure and predict wave heights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Insights Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Expert Insights
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem."
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem."
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex items-center justify-center">
              <div className="w-full h-96 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl text-gray-400 mb-4">👨‍🔬</div>
                  <span className="text-gray-500 text-lg">Expert Photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
