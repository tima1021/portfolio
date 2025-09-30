export default function Profile() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simple Black Background */}
      <div className="fixed inset-0 bg-black"></div>

      {/* Profile Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* Page Title */}
            <h1 className="text-6xl sm:text-8xl font-bold text-white mb-12 font-space-grotesk">
              PROFILE
            </h1>
            
            {/* Profile Content */}
            <div className="max-w-3xl mx-auto space-y-8">
              {/* About Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-3xl font-light text-white mb-6 font-space-grotesk">About Me</h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  I'm a passionate developer with 5+ years of experience building modern web applications. 
                  I love creating beautiful, functional, and user-friendly digital experiences that make a difference.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  My journey in web development started with curiosity and has evolved into a career focused on 
                  creating innovative solutions that bridge the gap between design and technology.
                </p>
              </div>

              {/* Skills Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-3xl font-light text-white mb-6 font-space-grotesk">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">⚛️</span>
                    </div>
                    <h3 className="font-medium text-white">React</h3>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">🔷</span>
                    </div>
                    <h3 className="font-medium text-white">TypeScript</h3>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <h3 className="font-medium text-white">UI/UX</h3>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="font-medium text-white">Next.js</h3>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-3xl font-light text-white mb-6 font-space-grotesk">Experience</h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-white/30 pl-6">
                    <h3 className="text-xl font-medium text-white mb-2">Senior Frontend Developer</h3>
                    <p className="text-white/60 mb-2">Tech Company • 2022 - Present</p>
                    <p className="text-white/80">Leading frontend development for multiple web applications using React and TypeScript.</p>
                  </div>
                  <div className="border-l-2 border-white/30 pl-6">
                    <h3 className="text-xl font-medium text-white mb-2">Frontend Developer</h3>
                    <p className="text-white/60 mb-2">Digital Agency • 2020 - 2022</p>
                    <p className="text-white/80">Developed responsive websites and web applications for various clients.</p>
                  </div>
                  <div className="border-l-2 border-white/30 pl-6">
                    <h3 className="text-xl font-medium text-white mb-2">Junior Developer</h3>
                    <p className="text-white/60 mb-2">Startup • 2019 - 2020</p>
                    <p className="text-white/80">Started my career building web applications and learning modern technologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}