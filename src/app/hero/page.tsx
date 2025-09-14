import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surfer Heroes",
  description:
    "Meet the legendary surfers who have conquered Nazaré's giant waves and made history in big wave surfing.",
};

export default function HeroPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Introduction Section */}
      <section className="pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <p className="text-sm text-gray-500 mb-2">
              Legendary surfers who conquered Nazaré's legendary waves,
              showcasing human courage against nature's most formidable forces.
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Introduction
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

            {/* Right Image */}
            <div className="flex items-center justify-center">
              <div className="w-full h-96 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl text-gray-400 mb-4">🏄‍♂️</div>
                  <span className="text-gray-500 text-lg">
                    Hero Surfer Image
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Key Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Achievement 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl text-gray-400 mb-2">🏆</div>
                  <span className="text-gray-500 text-sm">
                    Achievement Image
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  World Record Waves
                </h3>
                <p className="text-gray-600">
                  Multiple world records set at Nazaré, including the largest
                  waves ever surfed by both men and women surfers.
                </p>
              </div>
            </div>

            {/* Achievement 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl text-gray-400 mb-2">🌊</div>
                  <span className="text-gray-500 text-sm">
                    Achievement Image
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Pioneering Big Wave Surfing
                </h3>
                <p className="text-gray-600">
                  Revolutionary techniques and safety protocols that transformed
                  big wave surfing into a respected sport.
                </p>
              </div>
            </div>

            {/* Achievement 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl text-gray-400 mb-2">🎯</div>
                  <span className="text-gray-500 text-sm">
                    Achievement Image
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  International Recognition
                </h3>
                <p className="text-gray-600">
                  Global media attention and documentary features that brought
                  Nazaré to worldwide recognition.
                </p>
              </div>
            </div>

            {/* Achievement 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl text-gray-400 mb-2">👥</div>
                  <span className="text-gray-500 text-sm">
                    Achievement Image
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Community Impact
                </h3>
                <p className="text-gray-600">
                  Inspiring a new generation of surfers and bringing economic
                  growth to the local Nazaré community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nazaré Connection Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Nazaré Connection
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem.
                </p>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 text-sm">👤</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 italic">"Nemo enim ipsam"</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex items-center justify-center">
              <div className="w-full h-96 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl text-gray-400 mb-4">🏘️</div>
                  <span className="text-gray-500 text-lg">
                    Nazaré Connection Image
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Heroes Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Heroes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hero 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-gray-400 mb-2">🏄‍♂️</div>
                  <span className="text-gray-500 text-sm">Surfer Photo</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Garrett McNamara
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Pioneer of Nazaré Big Wave Surfing
                </p>
                <p className="text-gray-600">
                  First to ride the giant waves of Nazaré, setting multiple
                  world records and putting this Portuguese town on the global
                  surfing map.
                </p>
              </div>
            </div>

            {/* Hero 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-gray-400 mb-2">🏄‍♀️</div>
                  <span className="text-gray-500 text-sm">Surfer Photo</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Maya Gabeira
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Women's Big Wave World Record Holder
                </p>
                <p className="text-gray-600">
                  Brazilian surfer who holds the women's world record for the
                  largest wave ever surfed, achieved at Nazaré in 2020.
                </p>
              </div>
            </div>

            {/* Hero 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl text-gray-400 mb-2">🏄‍♂️</div>
                  <span className="text-gray-500 text-sm">Surfer Photo</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sebastian Steudtner
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Current Men's World Record Holder
                </p>
                <p className="text-gray-600">
                  German surfer who currently holds the men's world record for
                  the largest wave ever surfed, achieved at Nazaré in 2020.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
