function Resume() {
    return (
        <div className="mt-28 bg-gray-100">
            <div className="bg-emerald-200 h-24 w-full text-center">
                 <h1 className='text-4xl font-semibold'> Resume</h1>
                <p className="text-lg font-semibold mt-2">Front-end Developer | React Developer</p>
            </div>

            <div>
                <h1 className="text-left text-lg ml-24 mt-12 text-blue-500 font-sans first-letter:text-4xl first-letter:text-blue-500">Professional Summary</h1>
                <p className="text-left ml-72 mt-4 first-line:text-blue-700">A self-motivated ReactJS developer with strong communication and public speaking skills, eager to contribute 
                    <br/>to client-focused development environments with a strong foundation in JavaScript, React.js, and <br />
                    frontend development. Strong understanding of component-based architecture, state management, and UI/UX <br />
                    best practices.  Eager to apply my skills in a team-oriented setting that fosters learning and growth.
                </p>
            </div>
            <div>
                <h1 className="text-left text-lg ml-24 mt-4 text-blue-500 font-sans first-letter:text-4xl first-letter:text-blue-500">Technical Skills</h1>
                <ul className="list-disc text-gray-700 leading-relaxed text-left ml-80 mt-4">
                    <li className="first-letter:text-blue-700">Languages: JavaScript (ES6+), HTML5, CSS3</li>
                    <li className="first-letter:text-blue-700">Frameworks & Libraries: React.js, React Router</li>
                    <li className="first-letter:text-blue-700">Styling: Tailwind CSS, Bootstrap, CSS Modules</li>
                    <li className="first-letter:text-blue-700">Tools & Platforms: Git, GitHub, VS Code</li>
                    <li className="first-letter:text-blue-700">Others: REST APIs, Responsive Design</li>
                </ul>
            </div>
            <div>
                <h1 className="text-left text-lg ml-24 mt-4 text-blue-500 font-sans first-letter:text-4xl first-letter:text-blue-500">Behavioural Skills</h1>
                <ul className="list-disc text-gray-700 leading-relaxed text-left ml-80 mt-4">
                    <li className="first-letter:text-blue-700">Strong passion for public speaking, client communication and effective communication skills.</li>
                    <li className="first-letter:text-blue-700">Has the ability to produce reports and presentation to a professional standard.</li>
                    <li className="first-letter:text-blue-700">Good at taking responsibilities, leadership qualities and challenging.</li>
                </ul>
            </div>
            <div>
                <h1 className="text-left text-lg ml-24 mt-4 text-blue-500 font-sans first-letter:text-4xl first-letter:text-blue-500">Education</h1>
                <p className="text-left ml-72 mt-4 first-line:text-blue-700"> 1. Masters of Technology (M.Tech) </p>
                <p className='text-left ml-72'>Electronics & Communication, Digital Signal Processing Domain, Batch: (2015-2017), 8.42 CGPA </p>

                <p className="text-left ml-72 mt-4 first-line:text-blue-700"> 2. Bachelors of Technology (B.Tech) </p>
                <p className='text-left ml-72'>Electronics & Communication, Batch: (2009-2013), 71.40% (Honors) </p>

                <p className="text-left ml-72 mt-4 first-line:text-blue-700"> 3. Higher Secondary School</p>
                <p className='text-left ml-72'>Delhi Public School, Vindhyanagar (M.P.), Batch: (2009), 71.80 %</p>
            </div>
            <div>
                <h1 className="text-left text-lg ml-24 mt-4 text-blue-500 font-sans first-letter:text-4xl first-letter:text-blue-500">Projects</h1>
                <h1 className="text-left ml-72 mt-4 first-line:text-blue-500"> 1. Ecommerce-website</h1>
                <a href='https://ecommerce-website-zeta-murex.vercel.app/'><i>Link:</i><span className="text-md text-red-500 hover:bg-red-400 hover:text-white"> https://ecommerce-website-zeta-murex.vercel.app/</span></a>
                <ul className="list-disc text-gray-700 leading-relaxed text-left ml-80 mt-4">
                    <li className="first-letter:text-blue-700">Built a responsive e-commerce site with product listing, filtering, and cart functionality using React and Context.</li>
                    <li className="first-letter:text-blue-700">Implemented dynamic search, category filtering, and state management for cart items.</li>
                    <li className="first-letter:text-blue-700">Styled components using Tailwind CSS for a clean UI.</li>
                </ul>
            </div>
            <div>
                
                <h1 className="text-left ml-72 mt-4 first-line:text-blue-500"> 2. Employee Management System (EMS) </h1>
                 <a href='https://employee-management-system-ems-steel.vercel.app/'><i>Link:</i><span className="text-md text-red-500 hover:bg-red-400 hover:text-white"> https://employee-management-system-ems-steel.vercel.app/</span></a>
                <ul className="list-disc text-gray-700 leading-relaxed text-left ml-80 mt-4">
                    <li className="first-letter:text-blue-700">Currently designing and developing a role-based Employee Management System using React. </li>
                    <li className="first-letter:text-blue-700">The application will include Admin and Employee dashboards, task management, and user authentication. </li>
                    <li className="first-letter:text-blue-700">The project focuses on frontend state management using Context API and persistent data storage with localStorage.</li>
                </ul>
            </div>
            <br/>
            <br/>
        </div>
        
    )
}
export default Resume;