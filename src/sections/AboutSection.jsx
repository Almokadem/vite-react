import React from 'react';

function AboutSection() {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-200 mb-12">
          About Our Security System
        </h2>

        {/* About Content */}
        <div className="relative z-10 text-white mt-12">
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            Our system provides advanced security solutions with cutting-edge technology. We ensure your safety and peace of mind 24/7.
          </p>

          {/* 3D Grid of Cubes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-screen-xl mx-auto perspective-3d">
            
            {/* Cube Item 1 */}
            <Cube 
              frontText="Who We Are" 
              backText="We are a leading provider of advanced security systems for homes and businesses." 
              border="border-gray-600"
            />

            {/* Cube Item 2 */}
            <Cube 
              frontText="Key Features" 
              backText={<KeyFeatures />}
              border="border-gray-600"
            />

            {/* Cube Item 3 */}
            <Cube 
              frontText="Our Expertise" 
              backText="With over 15 years of experience, our team provides reliable security solutions."
              border="border-gray-600"
            />

            {/* Cube Item 4 */}
            <Cube 
              frontText="Our Mission"
              backText="Our mission is to provide top-tier security solutions for peace of mind."
              border="border-gray-600"
            />

            {/* Cube Item 5 */}
            <Cube 
              frontText="Customer Support" 
              backText="Our customer support team is available 24/7 to assist you with any inquiries."
              border="border-gray-600"
            />

            {/* Cube Item 6 */}
            <Cube 
              frontText="Technology We Use" 
              backText="We use state-of-the-art technology to ensure the highest level of security."
              border="border-gray-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Cube({ frontText, backText, border }) {
  return (
    <div className="cube-container relative group">
      <div className="cube transform transition-all duration-500 hover:rotate-x-12 hover:rotate-y-12 hover:scale-105 hover:shadow-xl">
        
        {/* Front of Cube */}
        <div className={`cube-face front bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-center border-2 ${border}`}>
          <h3 className="text-2xl font-semibold text-white">{frontText}</h3>
        </div>

        {/* Back of Cube */}
        <div className="cube-face back bg-gray-900 p-6 rounded-lg shadow-lg flex items-center justify-center border-2">
          <p className="text-lg text-gray-400">{backText}</p>
        </div>
      </div>
    </div>
  );
}

function KeyFeatures() {
  return (
    <ul className="list-disc pl-5 text-lg text-gray-400">
      <li>High-definition security cameras</li>
      <li>Smartphone integration</li>
      <li>Real-time alerts and notifications</li>
      <li>Motion sensors and alarms</li>
    </ul>
  );
}

export default AboutSection;
