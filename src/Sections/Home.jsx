import profileImg from "../assets/profile.jpg"; // Adjust the path as necessary
import { MdOutlineFileDownload } from "react-icons/md";
import resuMe from "../assets/resume.pdf"; // Adjust the path as necessary

function Home() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15"
        >
            
            {/* Profile Image */}
            <div className="text-center z-10 px-4">
                <img
                    className="w-[200px] mt-20 rounded-full shadow-lg shadow-gray-500
                               lg:m-0 lg:max-w-[250px] object-cover object-bottom 
                               hover:translate-y-1 transition-all"
                    src={profileImg}
                    alt="Profile"
                />
            </div>

            {/* Text and Buttons */}
            <div className="text-center font-mono z-10 px-4">
                <h1
  className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 px-4
             bg-gradient-to-r from-teal-300 via-blue-400 to-indigo-500 
             bg-clip-text text-transparent"
>
  I am Shivam Gabani
</h1>


                <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
                    I specialize in Power BI, data modeling, and DAX.
                    I create interactive dashboards and reports that help businesses make smarter decisions.
                    Explore my projects to see data-driven solutions in action.
                </p>

                {/* Buttons Side-by-Side */}
                <div className="flex flex-row justify-center gap-4 mt-6">
                    <a
                        href="#contact"
                        className="bg-gradient-to-r from-teal-400 to-indigo-500 py-3 px-6 rounded text-white 
                                   hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-transform 
                                   font-medium relative overflow-hidden justify-center items-center flex gap-2"
                    >
                        Contact Me
                    </a>

                    <a
                        href={resuMe} // Adjust path if needed
                        download
                        className="flex items-center gap-2 bg-gradient-to-r from-teal-400 to-indigo-500 py-3 px-6 rounded text-white 
                                   hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-transform
                                   font-medium relative overflow-hidden justify-center"
                    >
                        <MdOutlineFileDownload size={30} />
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;
