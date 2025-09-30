export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Simple Black Background */}
      <div className="fixed inset-0 bg-black"></div>

      {/* Landing Page - Hero Section Only */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            
            {/* Left Side - Main Info */}
            <div className="text-white">
              {/* Name */}
              <h1 className="text-lg sm:text-xl font-light text-white/80 mb-6 uppercase tracking-widest font-space-grotesk">
                Togtokhjargal.CH
              </h1>
              
              {/* Main Title */}
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-none mb-8 font-space-grotesk">
                Full stack developer
              </h2>
              
              {/* Description */}
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg font-light">
                Dedicated to Crafting<br />Modern Web solutions
              </p>
              
              {/* CTA Button */}
              <button className="text-white text-lg uppercase tracking-widest border-b-2 border-white hover:border-white/60 transition-colors duration-300 font-space-grotesk font-light">
                Request a Project
              </button>
            </div>

            {/* Right Side - Empty for 3D background visibility */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
