import { useState } from 'react';
import hospital from '../assets/Hospital.png';
import mobile from '../assets/Mobile.png';
import ecommerce from '../assets/ECommerce.png';
import sales from '../assets/Sales.png';

function Projects() {
    const [projects] = useState([
        {
            image: hospital,
            title: 'Hospital Analysis Report',
            breif: 'A comprehensive hospital management system that streamlines patient care, appointment scheduling, and medical records management.',
            skills: ['Power BI', 'Excel', 'SQL', 'DAX', 'Data Modeling', 'Power Query'],
            GITHUB: 'https://github.com/Shivs0147/Hospital_Analysis_Report',
            PowerBI: 'https://app.powerbi.com/groups/me/reports/de342b67-ab9c-439e-b972-b00d5ee5e9fa/4c086c7a91bff4f84f44?experience=power-bi'
        },
        {
            image: sales,
            title: 'Sales Dashboard',
            breif: 'This dashboard focuses on the toys retail industry with a breakdown of sales, cost, and profit across cities and product categories.',
            skills: ['Power BI', 'Excel', 'DAX', 'Data Modeling'],
            GITHUB: 'https://github.com/Shivs0147/Toy_Sales_Dashboard',
            PowerBI: 'https://app.powerbi.com/groups/me/reports/f6eef84a-16c8-4465-8f14-ca0997352809/6c09ce779bdeebfdefa6?experience=power-bi'
        },
        {
            image: mobile,
            title: 'Mobile Sales Dashboard',
            breif: 'This report visualizes sales and customer behavior across mobile brands and models, useful for tracking city-wise performance and transaction trends.',
            skills: ['Power BI', 'Excel', 'DAX', 'Data Modeling', 'Power Query'],
            GITHUB: 'https://github.com/Shivs0147/Mobile_Sales_Dashboard',
            PowerBI: 'https://app.powerbi.com/groups/me/reports/9b71fa8c-a893-4c19-9088-ed13b7b975be/bcbe9a60a876b012c581?experience=power-bi'
        },
        {
            image: ecommerce,
            title: 'E-Commerce Dashboard',
            breif: 'A comprehensive Power BI dashboard built to analyze sales performance across diverse product categories such as Mobiles, Electronics and more.',
            skills: ['Power BI', 'Excel', 'DAX', 'Data Modeling', 'Power Query'],
            GITHUB: 'https://github.com/Shivs0147/Ecommerce_Dashboard',
            PowerBI: 'https://app.powerbi.com/groups/me/reports/52a3e43a-b83a-4805-bb00-ab3f33310b20/ReportSection?experience=power-bi'
        }
    ]);

    return (
        <section
            id="projects"
            className="min-h-screen font-mono flex items-center justify-center py-20"
        >
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-4xl font-semibold mb-12 
                            bg-gradient-to-r from-teal-500 to-indigo-600
                            bg-clip-text text-transparent text-center"
                >
                    Project Showcase
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="p-6 rounded-xl 
                                                    border-2 border-white/10
                                                    hover:border-blue-500/30
                                                    hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)]
                                                    hover:-translate-y-1 transition-all
                                                    hover:bg-cyan-50/10"
                        >
                            {/* FLEX BOX: LEFT TEXT + RIGHT IMAGE */}
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 text-left">
                                {/* LEFT: Text and Skills */}
                                <div className="flex-1">
                                    <h3 className="font-semibold text-xl mb-2 text-white">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4">{project.breif}</p>

                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {project.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                                            >
                                                <strong className="text-blue-400">
                                                <em>{skill}</em>
                                                </strong>
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-3">
                                        <a href={project.GITHUB} target="_blank" rel="noopener noreferrer" className="text-m text-blue-400 underline mr-20 ml-2">
                                            GitHub
                                        </a>
                                        <a href={project.PowerBI} target="_blank" rel="noopener noreferrer" className="text-m text-blue-400 underline">
                                            Power BI Report
                                        </a>
                                    </div>
                                </div>

                                {/* RIGHT: Image */}
                                <div className="w-full md:w-48">
                                    <p className="text-gray-300 mb-2 ml-11 text-center md:text-left">View Project</p>
                                    <a href={project.PowerBI} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-32 object-cover rounded-lg shadow-md hover:scale-105 transition"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
