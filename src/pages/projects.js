function Projects() {
    return (
        <div className="mt-28 bg-gray-100">
            <div className="bg-emerald-200 h-24 text-center">
                <h1 className='text-4xl font-semibold p-4'>Projects</h1>
            </div>
            <div className="flex">
                <div className="p-2 mt-12 ml-12">
                    <p className="font-semibold text-xl text-left">01. E-commerce Website</p>
                    <p className="mt-6 text-left text-gray-700 text-justify text-sm">A fully <span className="text-red-500 hover:bg-red-400 hover:text-white">functional and responsive</span> e-commerce web application that allows users to<br /><span className="text-red-500 hover:bg-red-400 hover:text-white"> browse products, filter
                        them by category, search dynamically,</span> and <span className="text-red-500 hover:bg-red-400 hover:text-white">manage items</span> in<br /> a shopping cart — all built with modern web
                        technologies and clean UI/UX practices.
                    </p>

                    <h1 className="text-blue-400 text-left mt-4">Product Listing:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">Products are rendered dynamically from a data source using React’s <span className="text-red-500 hover:bg-red-400 hover:text-white">component-based architecture.</span></li>
                        <li className="text-left text-sm">Each product card includes details like image, title, price, category, and an “Add to Cart” button.</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">Dynamic search & Filtering:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">Implemented real-time search <span className="text-red-500 hover:bg-red-400 hover:text-white">functionality</span> that filters products as the user types.</li>
                        <li className="text-left text-sm">Enabled <span className="text-red-500 hover:bg-red-400 hover:text-white">category-based filtering</span> to allow users to narrow down product views based on their interests.</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">Shopping Cart Management (with Context API):</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">Designed a global cart state using React's <span className="text-red-500 hover:bg-red-400 hover:text-white"> Context API</span> to manage items across multiple components.</li>
                        <li className="text-left text-sm">Users can add items to the cart, view total price and quantity, remove individual items, or clear the entire cart.</li>
                        <li className="text-left text-sm">Cart state persists throughout the session to ensure smooth user experience.</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">Clean Code Structure & Component Reusability:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">Separated logic and UI into reusable components (ProductCard, Navbar, Cart, etc.).</li>
                        <li className="text-left text-sm">Followed best practices for <span className="text-red-500 hover:bg-red-400 hover:text-white">component lifecycle, state handling, and prop management.</span></li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">Responsive Design:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">Built a mobile-first UI using <span className="text-red-500 hover:bg-red-400 hover:text-white">Tailwind CSS</span>, ensuring smooth accessibility across all screen sizes.</li>
                    </ul>
                </div>

                <div className="p-2 mt-6">
                    <img className='border-none h-[310px] w-[470px] rounded-md shadow-lg shadow-gray-500 mt-32 
                                    transition-transform duration-[3000ms] ease-in-out 
                                    hover:translate-x-12 hover:translate-y-24' src="project1.png" />
                    <div className="mt-4">
                        <a className="hover:text-pink-800 text-center text-blue-500" href='https://ecommerce-website-zeta-murex.vercel.app/'>https://ecommerce-website-zeta-murex.vercel.app/</a>
                    </div>
                </div>

            </div>
            <div className="flex">
                <div className="p-2 mt-16 mb-12 ml-12">
                    <p className="font-semibold text-xl text-left">02. Employee Management System (EMS) </p>
                    <p className="mt-6 text-left text-gray-700 text-justify text-sm">Currently designing and developing a role-based Employee Management System using React. <br />The application will
                        include Admin and Employee dashboards, task management, and user <br/> authentication. The project focuses on frontend state management using Context API and  <br />persistent data storage with localStorage.
                    </p>

                    <h1 className="text-blue-400 text-left mt-4">Authentication & Role-Based Access:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">Basic login mechanism with user role detection</li>
                        <li className="text-left text-sm">Conditional rendering and routing based on user role (Admin or Employee)</li>
                        <li className="text-left text-sm">Session persistence using localStorage to retain login status</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">Admin Dashboard:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">View list of all employees</li>
                        <li className="text-left text-sm">Assign, edit, and delete tasks</li>
                        <li className="text-left text-sm">Monitor task completion status and manage user roles</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">Employee Dashboard:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">View assigned tasks with status and deadlines</li>
                        <li className="text-left text-sm">Update task status (e.g., In Progress, Completed)</li>
                        <li className="text-left text-sm">View profile and basic employee details</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">State Management:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">Centralized using React Context API for shared data (user info, task list)</li>
                        <li className="text-left text-sm">Local state for component-level interactions using useState</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">Data Persistence:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">All user, task, and session data stored in localStorage</li>
                        <li className="text-left text-sm">Mimics backend functionality in a frontend-only project</li>
                    </ul>
                </div>

                <div className="p-2 mt-6 ml-28">
                    <img className='border-none h-[310px] w-[470px] rounded-md shadow-lg shadow-gray-500 mt-32 
                                    transition-transform duration-[3000ms] ease-in-out 
                                    hover:translate-x-12 hover:translate-y-24' src="EMS.png" />
                    <div className="mt-4">
                        <a className="hover:text-pink-800 text-center text-blue-500" href='https://employee-management-system-ems-steel.vercel.app/'>https://employee-management-system-ems-steel.vercel.app/</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Projects;