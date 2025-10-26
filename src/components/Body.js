import { Link } from "react-router-dom";

function Body() {
    return (
        <div className="mx-auto md:mx-0 flex md:gap-24 md:px-16 py-32 px-2">
            <div>
                <img className="hidden md:block h-20 w-20 md:h-64 md:w-64 rounded-full md:ml-16 md:mt-12 opacity-0 
                animate-slideInLeft " src="jt.jpg" />
            </div>
            <div />
            <div>
                <div className="text-xl md:text-6xl font-bold font-serif text-left opacity-0 animate-bounceFromTop"> Hello </div>
                <br />
                <div className="mx-auto md:mx-0 text-left text-white opacity-0 animate-bounceFromTop
                h-auto overflow-y-auto break-words">
                    <div className="mx-auto text-xs md:text-sm text-gray-200">
                        <p>I'm a self motivated Front-end Developer with a focus on building responsive</p>
                        <p>and dynamic web applications using React. </p>
                    </div>
                    <br />
                    <div className="mx-auto text-xs md:text-sm font-sans text-gray-200">
                        <p>I enjoy turning complex problems into clean,intuitive user interfaces.</p>
                        <p>My experience spans from developing dynamic, responsive web interfaces</p>
                        <p>to training individuals in Public speaking and Communication skills. Giving </p>
                        <p>me a unique blend of technical expertise ans strong interpersonal communication.</p>
                    </div>
                    <br />
                    <div className="mx-auto text-xs md:text-sm text-gray-200">
                        <p>This portfolio showcases my hands-on projects, where I’ve worked with</p>
                        <p>React.js, JavaScript, HTML, and CSS to create fast and user-friendly experiences.</p>
                    </div>
                </div>
                <br />
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                    <Link to="/resume"><button className="aspect-square w-20 md:w-32 bg-blue-400 rounded-full text-white text-sm md:text-lg 
                    font-mono flex items-center justify-center hover:bg-blue-500 transition-all duration-300 animate-fadeInUp">Resume</button></Link>
                    <Link to="/projects"><button className="aspect-square w-20 md:w-32 bg-green-500 rounded-full text-white text-sm md:text-lg 
                    font-mono flex items-center justify-center hover:bg-green-700 transition-all duration-300 animate-fadeInUp">Projects</button></Link>
                    <Link to="/contact"><button className="aspect-square w-20 md:w-32 bg-red-500 rounded-full text-white text-sm md:text-lg font-mono 
                    flex items-center justify-center hover:bg-red-700 transition-all duration-300 animate-fadeInUp"> Contact </button></Link>
                </div>
            </div>
        </div>
    )
}
export default Body;





