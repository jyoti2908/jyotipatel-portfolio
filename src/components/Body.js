import { Link } from "react-router-dom";

function Body() {
    return (
        <div className="flex gap-24 p-12 bg-gray-200 mt-20 h-[420px] overflow-y-hidden">
            <div>
                <img className="lg:h-64 lg:w-64 rounded-full ml-16 mt-12 " src="jt.jpg" />
            </div>
            <div />
            <div>
                <div className="text-6xl font-extrabold font font-serif text-left"> Hello </div>
                <br />
                <div className="text-left text-gray-600 "> I'm a passionate front-end developer with a focus on building responsive<br />
                    and dynamic web applications using React. <br />I enjoy turning complex problems into clean,
                    intuitive user interfaces. <br />
                    This portfolio showcases my hands-on projects, where I’ve worked with<br />
                    React.js, JavaScript, HTML, and CSS to create fast and user-friendly experiences.</div>
                <br />
                <div className="text-left">
                   <Link to ='/resume'><button className="h-32 w-32 bg-orange-400 rounded-full text-white text-xl font-mono hover:bg-orange-500">Resume</button></Link>
                  <Link to ='/projects'><button className="ml-4 h-32 w-32 bg-green-500 rounded-full text-white text-xl font-mono hover:bg-green-700">Projects</button></Link>
                  <Link to ='/contact'><button className="ml-4 h-32 w-32 bg-red-500 rounded-full text-white text-xl font-mono hover:bg-red-700">Contact</button></Link>

                </div>
            </div>

        </div>
    )
}
export default Body;





