import React from 'react';

const experiences = {
  current: [
    {
      company: 'Vistas Global',
      location: 'Doha, Qatar',
      role: 'Motion Graphic Designer',
      period: 'Jul 2024 - Present',
      type: 'Full-time'
    },
    {
      company: 'Wow World Agency',
      location: 'India',
      role: 'Creative Director',
      period: 'Jan 2021 - Present',
      type: 'Full-time'
    }
  ],
  past: [
    {
      company: 'Brandhat Media',
      location: 'Calicut, India',
      role: 'Founder-Director',
      period: 'Jan 2011 - May 2022'
    },
    {
      company: 'VOIXME Technologies',
      location: 'Bahrain, Qatar, Saudi Arabia, UAE',
      role: 'Creative Director',
      period: 'Dec 2020 - Jan 2022'
    },
    {
      company: '25 Norsoft Pvt Ltd',
      location: 'Qatar',
      role: 'Motion Graphic Artist',
      period: 'Aug 2019 - Aug 2020'
    },
    {
      company: 'Primetime Media WLL',
      location: 'Doha, Qatar',
      role: 'Creative Head',
      period: 'Nov 2015 - Nov 2017'
    }
  ]
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Current Roles</h3>
            <div className="space-y-6">
              {experiences.current.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-blue-600">{exp.role}</h4>
                  <p className="text-lg font-semibold">{exp.company}</p>
                  <p className="text-gray-600">{exp.location}</p>
                  <p className="text-gray-500">{exp.period} • {exp.type}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Past Experience</h3>
            <div className="space-y-6">
              {experiences.past.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-blue-600">{exp.role}</h4>
                  <p className="text-lg font-semibold">{exp.company}</p>
                  <p className="text-gray-600">{exp.location}</p>
                  <p className="text-gray-500">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;