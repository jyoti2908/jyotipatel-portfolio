import { Link } from "react-router-dom";

function Body() {
    return (
        <div className="flex gap-24 px-16 py-32">
            <div>
                <img className="lg:h-64 lg:w-64 rounded-full ml-16 mt-12 opacity-0 animate-slideInLeft " src="jt.jpg" />
            </div>
            <div />
            <div>
                <div className="text-6xl font-bold font-serif text-left opacity-0 animate-bounceFromTop"> Hello </div>
                <br />
                <div className="text-left text-white opacity-0 animate-bounceFromTop">
                    <div className="text-sm text-gray-200">
                        I'm a self motivated Front-end Developer with a focus on building responsive<br />
                        and dynamic web applications using React. <br /><br />
                    </div>
                    <div className="text-sm font-sans text-gray-200">
                        I enjoy turning complex problems into clean,intuitive user interfaces.<br />
                        My experience spans from developing dynamic, responsive web interfaces<br />
                        to training individuals in Public speaking and Communication skills. Giving <br />
                        me a unique blend of technical expertise ans strong interpersonal communication.<br /><br /></div>
                    <div className="text-sm text-gray-200">
                        This portfolio showcases my hands-on projects, where I’ve worked with<br />
                        React.js, JavaScript, HTML, and CSS to create fast and user-friendly experiences.
                    </div>
                </div>
                <br />
                <div className="text-left">
                    <Link to='/resume'><button className="h-32 w-32 bg-blue-400 rounded-full text-white text-xl font-mono hover:bg-blue-500 opacity-0 animate-fadeInUp">Resume</button></Link>
                    <Link to='/projects'><button className="ml-4 h-32 w-32 bg-green-500 rounded-full text-white text-xl font-mono hover:bg-green-700 opacity-0 animate-fadeInUp">Projects</button></Link>
                    <Link to='/contact'><button className="ml-4 h-32 w-32 bg-red-500 rounded-full text-white text-xl font-mono hover:bg-red-700 opacity-0 animate-fadeInUp">Contact</button></Link>

                </div>
            </div>

        </div>
    )
}
export default Body;





