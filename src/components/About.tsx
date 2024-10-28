import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Professional headshot"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <p className="text-gray-600 mb-6">
              I am Jobithlal, founder and creative director of Wow World, with over a decade of experience in complete digital solutions that transform brands and build lasting customer connections.
            </p>
            <p className="text-gray-600 mb-6">
              As an Adobe and Autodesk Certified professional, my skills span motion graphics, corporate identity, audio-video production, logo and banner design, flyer design, and animation.
            </p>
            <p className="text-gray-600">
              My mission is to empower business owners by increasing their visibility and branding to achieve higher sales and customer engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;