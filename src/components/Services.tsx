import React from 'react';
import { Camera, Palette, Code, PenTool, Megaphone, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Visual Production',
    items: [
      'Corporate & Commercial Photography',
      'Videography & Video Editing',
      'Event Photography',
      'Video Production'
    ]
  },
  {
    icon: Palette,
    title: 'Graphic Designing Services',
    items: [
      'Logo, Flyer, Banner, and Brochure Design',
      'Corporate Identity & Brand Assets'
    ]
  },
  {
    icon: Code,
    title: 'Application Development Services',
    items: [
      'Custom Web & Mobile App Development',
      'Innovative Digital Business Card Solutions'
    ]
  },
  {
    icon: PenTool,
    title: 'Content Writing Services',
    items: [
      'Professional Copywriting for Digital & Print',
      'SEO and Brand Messaging Content'
    ]
  },
  {
    icon: Megaphone,
    title: 'Integrated Marketing Services',
    items: [
      'Social Media Marketing',
      'SEO & Online Visibility Strategy',
      'Advertising & Promotion Planning'
    ]
  },
  {
    icon: Briefcase,
    title: 'Comprehensive Branding Solutions',
    items: [
      'Brand Strategy Development',
      'Multimedia Training and Consulting',
      'Startup Business Ideas & Strategy'
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600">Comprehensive digital solutions to elevate your brand</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;