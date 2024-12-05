const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-purple-600 text-white py-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">Zezi Creative Studio</h1>
          <nav>
            <ul className="flex gap-6">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-[500px] flex items-center justify-center" style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}>
        <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded">
          <h2 className="text-4xl font-bold mb-4">We Create. You Shine.</h2>
          <p className="text-lg mb-6">Professional Web Design, Video Editing, Photo Editing, Photography, and Videography Services</p>
          <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">Get Started</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Web Development', desc: 'Modern websites tailored to your needs.', icon: '🌐' },
              { title: 'Video Editing', desc: 'Transform raw clips into stunning visuals.', icon: '🎥' },
              { title: 'Photo Editing', desc: 'Professional retouching for perfect pictures.', icon: '🖼️' },
              { title: 'Photography', desc: 'Capture memories with high-quality shots.', icon: '📷' },
              { title: 'Videography', desc: 'Create engaging video content.', icon: '🎬' },
              { title: 'Logo Design', desc: 'Unique logos for your brand identity.', icon: '✏️' }
            ].map((service, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-6">At Zezi Creative Studio, we bring your ideas to life with creativity and precision. Whether it's crafting a stunning website or creating memorable visual content, we ensure exceptional quality and satisfaction.</p>
          <img src="/images/about.jpg" alt="About Us" className="mx-auto rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2" />
        </div>
      </section>

      
      <section id="contact" className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <form className="max-w-md mx-auto space-y-6">
            <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-3 rounded" />
            <input type="email" placeholder="Your Email" className="w-full border border-gray-300 p-3 rounded" />
            <textarea placeholder="Your Message" rows="4" className="w-full border border-gray-300 p-3 rounded"></textarea>
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="bg-purple-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Zezi Creative Studio. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
