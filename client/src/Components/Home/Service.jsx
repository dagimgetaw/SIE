import { Link } from "react-router-dom";

export default function Service() {
  return (
    <section
      id="service"
      className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
          SIE Service Tiers
        </h2>
        <p className="text-sm md:text-lg text-center pb-12 text-gray-50 max-w-3xl mx-auto">
          Three tiers of advanced capabilities to transform raw satellite data
          into actionable intelligence
        </p>

        {/* Services Tabs */}
        <div className="flex flex-col space-y-12">
          {/* Basic Features */}
          <div className="group">
            <div className="flex items-center mb-8">
              <div className="h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent flex-1 mr-4"></div>
              <h3 className="text-2xl font-bold text-sky-400 bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
                Basic Features
              </h3>
              <div className="h-0.5 bg-gradient-to-r from-transparent via-sky-500 to-transparent flex-1 ml-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon="📤"
                title="Image Input"
                description="Upload from local storage or load via URL/API. Supports GeoTIFF, PNG, JPEG formats with metadata preservation."
              />
              <ServiceCard
                icon="✨"
                title="Basic Enhancement"
                description="Adjust brightness, contrast, apply histogram equalization, grayscale conversion, and Gaussian denoising."
              />
              <ServiceCard
                icon="🖥️"
                title="Visualization UI"
                description="Side-by-side comparison, zoom/pan support, before/after slider for precise analysis."
              />
              <ServiceCard
                icon="💾"
                title="Export Results"
                description="Download enhanced images in multiple formats while maintaining geospatial metadata."
              />
            </div>
          </div>

          {/* Intermediate Features */}
          <div className="group">
            <div className="flex items-center mb-8">
              <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 mr-4"></div>
              <h3 className="text-2xl font-bold text-blue-400 bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
                Intermediate Features
              </h3>
              <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 ml-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon="🌀"
                title="Advanced Denoising"
                description="Non-local means, bilateral filtering, and wavelet-based techniques for superior noise reduction."
              />
              <ServiceCard
                icon="🔍"
                title="Super-Resolution"
                description="2x-4x resolution enhancement using ML models (ESDR, SRCNN) to reveal hidden details."
              />
              <ServiceCard
                icon="☁️"
                title="Cloud/Haze Removal"
                description="Atmospheric correction algorithms to eliminate cloud cover and haze distortions."
              />
              <ServiceCard
                icon="🌿"
                title="Feature Highlighting"
                description="NDVI, false color enhancement, and specialized filters for vegetation/water analysis."
              />
            </div>
          </div>

          {/* Advanced Features */}
          <div className="group">
            <div className="flex items-center mb-8">
              <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 mr-4"></div>
              <h3 className="text-2xl font-bold text-purple-400 bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
                Advanced Features
              </h3>
              <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 ml-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon="🤖"
                title="AI Enhancement"
                description="Transformer & GAN-based pipelines (DSen2, ESRGAN) for professional-grade results."
              />
              <ServiceCard
                icon="🔄"
                title="Change Detection"
                description="Automated identification of urban expansion, deforestation, and other temporal changes."
              />
              <ServiceCard
                icon="⏱️"
                title="Temporal Analysis"
                description="Process time-series data to reduce noise and track environmental changes."
              />
              <ServiceCard
                icon="🏗️"
                title="Feature Extraction"
                description="Identify and highlight roads, buildings, water bodies with automated detection."
              />
              <ServiceCard
                icon="🔗"
                title="API Integration"
                description="Direct access to Google Earth Engine, Copernicus, and SentinelHub data."
              />
              <ServiceCard
                icon="📊"
                title="Batch Processing"
                description="Simultaneously process large image sets with automated workflows."
              />
              <ServiceCard
                icon="🎓"
                title="Model Training"
                description="Fine-tune models with your own datasets for specialized applications."
              />
              <ServiceCard
                icon="🛠️"
                title="Custom Solutions"
                description="Tailored pipelines for defense, agriculture, and urban planning needs."
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link to="enhance">
            <button className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 cursor-pointer text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 transform duration-300 text-xs md:text-sm">
              Start Enhancing Your Satellite Images Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800/50 hover:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-sky-400 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl group-hover:opacity-90 hover:!opacity-100">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-sm md:text-lg font-bold mb-3 text-gray-50">
        {title}
      </h3>
      <p className="text-gray-300 text-xs md:text-sm">{description}</p>
    </div>
  );
}
