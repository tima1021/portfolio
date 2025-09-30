export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simple Black Background */}
      <div className="fixed inset-0 bg-black"></div>

      {/* Contact Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* Page Title */}
            <h1 className="text-6xl sm:text-8xl font-bold text-white mb-12 font-space-grotesk">
              CONTACT
            </h1>
            
            {/* Contact Content */}
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Contact Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-3xl font-light text-white mb-6 font-space-grotesk">Get In Touch</h2>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Let's discuss how we can work together to create something amazing.
                </p>
                
                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">📧</span>
                    </div>
                    <h3 className="font-medium text-white mb-2">Email</h3>
                    <p className="text-white/60">yourname@email.com</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">💼</span>
                    </div>
                    <h3 className="font-medium text-white mb-2">LinkedIn</h3>
                    <p className="text-white/60">linkedin.com/in/yourname</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-3xl font-light text-white mb-6 font-space-grotesk">Send Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full px-8 py-4 bg-white text-black font-medium hover:bg-white/90 transition-colors duration-300 rounded-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Social Links */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-3xl font-light text-white mb-6 font-space-grotesk">Follow Me</h2>
                <div className="flex justify-center space-x-6">
                  <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                    <span className="text-xl">🐦</span>
                  </button>
                  <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                    <span className="text-xl">📱</span>
                  </button>
                  <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                    <span className="text-xl">💼</span>
                  </button>
                  <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300">
                    <span className="text-xl">🎨</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}