function Body() {
    return (
        <div className="flex gap-24 p-12 bg-gray-200 mt-24">
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
                    <button className="h-32 w-32 bg-orange-300 rounded-full text-white text-xl font-mono">Resume</button>
                    <button className="ml-4 h-32 w-32 bg-red-600 rounded-full text-white text-xl font-mono">Projects</button>
                   <button className="ml-4 h-32 w-32 bg-blue-400 rounded-full text-white text-xl font-mono">Contact</button>

                </div>
            </div>

        </div>
    )
}
export default Body;





