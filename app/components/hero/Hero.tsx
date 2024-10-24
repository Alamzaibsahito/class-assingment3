import React from 'react';

const Hero=() => {
  return (
    <div className="container mx-auto py-20 bg-gray-100">
      <div className="text-center mb-12">
      
      <h1 className="text-4xl font-bold mt-5 text-black" >What I Have Learn</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Skill Item 1 */}
        <div className="service-item rounded-lg shadow-lg border border-blue-600 p-6 bg-white transition-transform transform hover:scale-105">
          <div className="text-center">
            <i className="fas fa-code fa-3x text-blue-600 mb-4"></i>
            <h5 className="text-xl mb-3 text-black font-bold">Web Development</h5>
            <p className="text-gray-600">
              Building responsive and interactive websites using modern frameworks.
            </p>
          </div>
        </div>

        {/* Skill Item 2 */}
        <div className="service-item rounded-lg shadow-lg border border-green-600 p-6 bg-white transition-transform transform hover:scale-105">
          <div className="text-center">
            <i className="fas fa-paint-brush fa-3x text-green-600 mb-4"></i>
            <h5 className="text-xl font-semibold mb-3 text-black">UI/UX Design</h5>
            <p className="text-gray-600">
              Creating user-friendly designs that enhance user experience and engagement.
            </p>
          </div>
        </div>

        {/* Skill Item 3 */}
        <div className="service-item rounded-lg shadow-lg border border-blue-400 p-6 bg-white transition-transform transform hover:scale-105">
          <div className="text-center">
            <i className="fas fa-database fa-3x text-blue-400 mb-4"></i>
            <h5 className="text-xl font-semibold mb-3 text-black">Database Management</h5>
            <p className="text-gray-600">
              Managing and optimizing databases to ensure high performance and security.
            </p>
          </div>
        </div>

        {/* Skill Item 4 */}
        <div className="service-item rounded-lg shadow-lg border border-red-600 p-6 bg-white transition-transform transform hover:scale-105">
          <div className="text-center">
            <i className="fas fa-cloud fa-3x text-red-600 mb-4"></i>
            <h5 className="text-xl font-semibold mb-4 text-black">Cloud Computing</h5>
            <p className="text-gray-600">
              Leveraging cloud technology to build scalable and efficient applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero;