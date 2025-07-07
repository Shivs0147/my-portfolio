import certiFicate from "../assets/Deloitte_Certificate.pdf"; // Adjust the path as necessary
import RevealOnScroll from "../UI/RevealOnScroll";

function About() {
    const skills = [
        "Power BI",
        "DAX",
        "SQL",
        "NoSQL",
        "Data Modeling",
        "Excel",
        "Data Analysis",
        "Dashboard Development",
        "Data Visualization",
        "Business Intelligence Tools",
        "ETL Processes"
    ];

    return (
        <section
            id="about"
            className="min-h-screen font-mono flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl font-semibold mb-12 
                            bg-gradient-to-r from-teal-500 to-indigo-600
                            bg-clip-text text-transparent text-center"
                >
                    About Me
                </h2>

                <div className="p-8 mb-6 rounded-xl border-white/10 border-2 
                                hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-5 text-sm text-justify">
                        Hello! I’m Shivam Gabani, a passionate Power BI Developer and Data Analyst who transforms raw data into powerful, interactive dashboards that drive decision-making.
                    </p>
                    <p className="text-gray-300 mb-5 text-sm text-justify">
                        I specialize in crafting end-to-end analytics solutions that transform complex business scenarios into clear, actionable dashboards and reports. With a strong foundation in data visualization, Power BI, and data modeling, I help organizations unlock insights and make data-driven decisions with confidence.
                    </p>
                </div>

                {/* Skills and Education side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Skills Section */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-2xl text-center font-semibold mb-8">📊 Skills</h3>
                        <div className="flex justify-center flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-100/10 text-blue-400 py-1 px-3 rounded-full 
                                               text-sm hover:bg-blue-100/20 
                                               hover:shadow-[9_2px_8px_rgba(59,130,22.43,0.2)] 
                                               transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-2xl text-center font-semibold mb-8">🎓 Education</h3>
                        <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
                            <li>
                                <strong><em>Bachelor of Computer Application</em></strong> <br />
                                <div className="text-blue-400 ml-12 mr-15 text-sm"><a href="http://www.semcom.ac.in" target="_blank">📍SEMCOM College, CVM University, V.V.Nagar, Gujarat, India (2021 - 2024)</a></div>
                            </li><br />

                        </ul>
                    </div>
                    {/* Certificates Section */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-2xl text-center font-semibold mb-8">📄 Certificates</h3>
                        <div className="flex justify-center flex-wrap gap-2"></div>
                        <div className="bg-blue-100/10 text-blue-400 py-1 px-3 rounded-xl mb-4
                                               text-sm hover:bg-blue-100/20 
                                               hover:shadow-[9_2px_8px_rgba(59,130,22.43,0.2)] 
                                               transition">
                            1. Introduction to Java  <br /><span className="text-gray-100 ml-5 mr-15 text-xs text-justify"><em>(LearnQuest and offered through coursera)</em></span> <br />
                        </div>
                        <div className="bg-blue-100/10 text-blue-400 py-1 px-3 rounded-xl mb-4
                                               text-sm hover:bg-blue-100/20 
                                               hover:shadow-[9_2px_8px_rgba(59,130,22.43,0.2)] 
                                               transition">
                            2. SQL for Data Science  <br /><span className="text-gray-100 ml-5 mr-15 text-xs text-justify"><em>(Coursera - University of California, Davis)</em></span> <br />
                        </div>
                        <div className="bg-blue-100/10 text-blue-400 py-1 px-3 rounded-xl mb-4
                                               text-sm hover:bg-blue-100/20 
                                               hover:shadow-[9_2px_8px_rgba(59,130,22.43,0.2)] 
                                               transition">
                                <a href={certiFicate} target="_blank">
                                    3. Data Analytics Job Simulation <br /><span className="text-gray-100 ml-5 mr-15 text-xs text-justify"><em>(Deloitte - Data analysis forensic tech.)</em></span>
                                </a>
                        </div>


                    </div>

                    {/* Work Experience Section */}
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-2xl text-center font-semibold mb-8">💼 Work Experience</h3>
                        <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
                            <li>
                                <strong><em>Data Analytics Intern</em></strong> <br />
                                <div className="text-blue-400 ml-8 mr-15 text-sm text-justify">📍Digital Sweep, Surat (May 2024 - May 2025)</div>
                            </li><br />
                        </ul>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}

export default About;
