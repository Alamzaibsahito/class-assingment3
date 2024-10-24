import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import p1 from '../../images/p1.jpg'; // Adjust paths according to your structure
import p2 from '../../images/p2.jpg';
import p3 from '../../images/p3.jpg';
import p4 from '../../images/p4.jpg';
import p5 from '../../images/p5.jpg';

const Projects = () => {
    return (
        <section className="py-20 bg-gray-100" id="projects">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10 text-black">Projects</h2>
                <div className="flex flex-wrap justify-around">
                    {/* Project Item 1 */}
                    <div className="max-w-xs bg-white p-5 m-3 shadow-lg rounded-lg transition-transform transform hover:translate-y-1">
                        <Image src={p1} alt="Project 1" className="w-full rounded" />
                        <h3 className="text-xl font-semibold mt-4 text-black">Project 1</h3>
                        <p className="mt-2 text-gray-600">One-Side Form Layout with Icons</p>
                        <p className="mt-2 text-gray-600">
                            &quot;Designed a sleek footer layout featuring two cards and a prominent photo...&quot;
                        </p>
                        <a href="#" className="mt-4 inline-block px-4 py-2 bg-pink-400 text-white rounded hover:bg-gray-800">View Project</a>
                    </div>

                    {/* Project Item 2 */}
                    <div className="max-w-xs bg-white p-5 m-3 shadow-lg rounded-lg transition-transform transform hover:translate-y-1">
                        <Image src={p2} alt="Project 2" className="w-full rounded" />
                        <h3 className="text-xl font-semibold mt-4 text-black">Project 2</h3>
                        <p className="mt-2 text-gray-600">One-Side Form Layout with Icons</p>
                        <p className="mt-2 text-gray-600">
                            &quot;Designed a sleek footer layout featuring two cards and a prominent photo...&quot;
                        </p>
                        <a href="#" className="mt-4 inline-block px-4 py-2 bg-pink-400 text-white rounded hover:bg-gray-800">View Project</a>
                    </div>

                    {/* Project Item 3 */}
                    <div className="max-w-xs bg-white p-5 m-3 shadow-lg rounded-lg transition-transform transform hover:translate-y-1">
                        <Image src={p3} alt="Project 3" className="w-full rounded" />
                        <h3 className="text-xl font-semibold mt-4 text-black">Project 3</h3>
                        <p className="mt-2 text-gray-600">One-Side Form Layout with Icons</p>
                        <p className="mt-2 text-gray-600">
                            &quot;Designed a sleek footer layout featuring two cards and a prominent photo...&quot;
                        </p>
                        <a href="#" className="mt-4 inline-block px-4 py-2 bg-pink-400 text-white rounded hover:bg-gray-800">View Project</a>
                    </div>

                    {/* Project Item 4 */}
                    <div className="max-w-xs bg-white p-5 m-3 shadow-lg rounded-lg transition-transform transform hover:translate-y-1">
                        <Image src={p4} alt="Project 4" className="w-full rounded" />
                        <h3 className="text-xl font-semibold mt-4 text-black">Project 4</h3>
                        <p className="mt-2 text-gray-600">One-Side Form Layout with Icons</p>
                        <p className="mt-2 text-gray-600">
                            &quot;Designed a sleek footer layout featuring two cards and a prominent photo...&quot;
                        </p>
                        <a href="#" className="mt-4 inline-block px-4 py-2 bg-pink-400 text-white rounded hover:bg-gray-800">View Project</a>
                    </div>

                    {/* Project Item 5 */}
                    <div className="max-w-xs bg-white p-5 m-3 shadow-lg rounded-lg transition-transform transform hover:translate-y-1">
                        <Image src={p5} alt="Project 5" className="w-full rounded" />
                        <h3 className="text-xl font-semibold mt-4 text-black">Project 5</h3>
                        <p className="mt-2 text-gray-600">One-Side Form Layout with Icons</p>
                        <p className="mt-2 text-gray-600">
                            &quot;Designed a sleek footer layout featuring two cards and a prominent photo...&quot;
                        </p>
                        <a href="#" className="mt-4 inline-block px-4 py-2 bg-pink-400 text-white rounded hover:bg-gray-800">View Project</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
