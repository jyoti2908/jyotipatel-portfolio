function Projects() {
    return (
        <div>
            <div className="text-white h-auto bg-emerald-400 text-center px-8 py-4">
                <h1 className='text-sm md:text-4xl font-semibold p-4'>Projects</h1>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="p-2 mt-12 md:ml-12">
                    <p className="font-semibold md:text-xl md:text-left text-blue-900">01. E-commerce Website</p>
                    <p className="mt-6 md:text-left text-gray-700 text-justify md:text-sm">A fully <span className="text-red-500 hover:bg-red-400 hover:text-white">functional and responsive</span> e-commerce web application that allows users to<br /><span className="text-red-500 hover:bg-red-400 hover:text-white"> browse products, filter
                        them by category, search dynamically,</span> and <span className="text-red-500 hover:bg-red-400 hover:text-white">manage items</span> in<br /> a shopping cart — all built with modern web
                        technologies and clean UI/UX practices.
                    </p>

                    <h1 className="text-blue-400 text-left mt-4">🛍️ Product Listing:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm text-justify">Products are rendered dynamically from a data source using React’s <span className="text-red-500 hover:bg-red-400 hover:text-white">component-based architecture.</span></li>
                        <li className="text-left text-sm text-justify">Each product card includes details like image, title, price, category, and an “Add to Cart” button.</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">🔎 Dynamic search & Filtering:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm text-justify">Implemented real-time search <span className="text-red-500 hover:bg-red-400 hover:text-white">functionality</span> that filters products as the user types.</li>
                        <li className="text-left text-sm text-justify">Enabled <span className="text-red-500 hover:bg-red-400 hover:text-white">category-based filtering</span> to allow users to narrow down product views based on their interests.</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">🛒 Shopping Cart Management (with Context API):</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm text-justify">Designed a global cart state using React's <span className="text-red-500 hover:bg-red-400 hover:text-white"> Context API</span> to manage items across multiple components.</li>
                        <li className="text-left text-sm text-justify">Users can add items to the cart, view total price and quantity, remove individual items, or clear the entire cart.</li>
                        <li className="text-left text-sm text-justify">Cart state persists throughout the session to ensure smooth user experience.</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">🧱 Clean Code Structure & Component Reusability:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm text-justify">Separated logic and UI into reusable components (ProductCard, Navbar, Cart, etc.).</li>
                        <li className="text-left text-sm text-justify">Followed best practices for <span className="text-red-500 hover:bg-red-400 hover:text-white">component lifecycle, state handling, and prop management.</span></li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">📱 Responsive Design:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm text-justify">Built a mobile-first UI using <span className="text-red-500 hover:bg-red-400 hover:text-white">Tailwind CSS</span>, ensuring smooth accessibility across all screen sizes.</li>
                    </ul>
                </div>

                <div className="p-2 md:mt-6 text-center">
                    <img className='border-none md:h-[310px] md:w-[470px] rounded-md shadow-lg shadow-gray-500 md:mt-32 mt-4
                                    transition-transform duration-[3000ms] ease-in-out 
                                    hover:translate-x-12 hover:translate-y-24' src="ecomm.png" />
                    <div className="mt-4">
                        <a className="hover:text-pink-800 text-blue-500 text-xs md:text-sm" href='https://ecommerce-website-zeta-murex.vercel.app/'>https://ecommerce-website-zeta-murex.vercel.app/</a>
                    </div>
                </div>

            </div>
            <div className="flex flex-col md:flex-row">
                <div className="p-2 mt-12 md:ml-12 text-justify">
                    <p className="font-semibold md:text-xl md:text-left text-blue-900">02. Weather Forecast</p>
                    <p className="mt-6 md:text-left text-gray-700 text-justify md:text-sm"> The Weather Forecast App is a responsive
                        <span className="text-red-500 hover:bg-red-400 hover:text-white"> React-based application</span> that allows users to search for <br />
                        real-time weather data of any city. It integrates with the <span className="text-red-500 hover:bg-red-400 hover:text-white"> penWeather API </span> to display temperature, humidity,
                        <br /> and weather conditions, while offering unit conversion and theme customization for an enhanced <br />
                        user experience.</p>

                    <h1 className="text-blue-400 text-left mt-4">🔍 Search Input:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm text-justify">Implemented a controlled search field to allow users to enter a city name.</li>
                        <li className="text-left text-sm text-justify">Triggered <span className="text-red-500 hover:bg-red-400 hover:text-white">API calls to fetch live weather data from the <span className="text-red-500 hover:bg-red-400 hover:text-white"></span>OpenWeather API</span> using useEffect.</li>
                        <li className="text-left text-sm text-justify">Displayed real-time updates with proper error handling for invalid city names.</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">🧾 Weather Card:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm text-justify">Designed a dynamic <span className="text-red-500 hover:bg-red-400 hover:text-white">weather display card</span> showing temperature, humidity, and condition icons.</li>
                        <li className="text-left text-sm text-justify">Used conditional rendering to update weather visuals based on API responses (e.g., sunny, cloudy, rainy).</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">🌡️ Unit & Theme Toggle:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm text-justify">Added a <span className="text-red-500 hover:bg-red-400 hover:text-white"> Celsius/Fahrenheit toggle </span> for user-preferred temperature display.</li>
                        <li className="text-left text-sm text-justify">Integrated a  <span className="text-red-500 hover:bg-red-400 hover:text-white"> Dark/Light mode switch </span>using React Context API for global theme management.</li>
                        <li className="text-left text-sm text-justify">Ensured theme persistence and consistent styling across the application.</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">⚙️ Functionality & Design:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm text-justify">Managed shared state (temperature unit, theme mode) using <span className="text-red-500 hover:bg-red-400 hover:text-white">Context API.</span></li>
                        <li className="text-left text-sm text-justify">Used useEffect for side-effects and data fetching, maintaining clean and efficient React logic.</li>
                        <li className="text-left text-sm text-justify">Focused on <span className="text-red-500 hover:bg-red-400 hover:text-white">minimalist, user-friendly UI </span> with Tailwind CSS for fast styling and adaptability.</li>
                    </ul>
                </div>

                <div className="p-2 md:mt-6 md:ml-4 text-center">
                    <img className='border-none md:h-[240px] md:w-[370px] rounded-md shadow-lg shadow-gray-500 md:mt-32 mt-4
                                    transition-transform duration-[3000ms] ease-in-out 
                                    hover:translate-x-12 hover:translate-y-24' src="weather.png" />
                    <div className="mt-4">
                        <a className="hover:text-pink-800 text-blue-500 text-xs md:text-sm" href='https://weather-forecast-rouge-five.vercel.app/'>https://weather-forecast-rouge-five.vercel.app/</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="p-2 mt-12 md:ml-12 text-justify">
                    <p className="font-semibold md:text-xl md:text-left text-blue-900">03. Quiz App</p>
                    <p className="mt-6 md:text-left text-gray-700 text-justify md:text-sm"> A
                        <span className="text-red-500 hover:bg-red-400 hover:text-white"> React-based Quiz App </span>
                        that lets users test their knowledge with interactive multiple-choice <br /> questions,
                        and tracks scores in real time. The app features a
                        <span className="text-red-500 hover:bg-red-400 hover:text-white"> timer, quiz reset functionality,
                        </span> and a <br /> <span className="text-red-500 hover:bg-red-400 hover:text-white"> responsive UI,
                        </span> demonstrating proficiency in
                        <span className="text-red-500 hover:bg-red-400 hover:text-white"> React state management </span>
                        and <span className="text-red-500 hover:bg-red-400 hover:text-white"> component-based architecture.</span></p>

                    <h1 className="text-blue-400 text-left mt-4"></h1>
                    <ul className="list-disc text-gray-700 leading-loose ml-4">
                        <li className="text-left text-sm text-justify">📝 <span className="text-blue-400">Dynamic Questions:</span> Renders multiple-choice questions from a dataset.</li>
                        <li className="text-left text-sm text-justify">📊 <span className="text-blue-400">Score Tracking:</span> Tracks total score and quiz progress in real time.</li>
                        <li className="text-left text-sm text-justify">🔄 <span className="text-blue-400">Quiz Reset:</span> Allows users to restart the quiz or attempt different questions.</li>
                        <li className="text-left text-sm text-justify">⚙️ <span className="text-blue-400">State Management:</span> Uses React Context API for global quiz data and score.</li>
                        <li className="text-left text-sm text-justify">🎨 <span className="text-blue-400">Responsive UI:</span> Styled with Tailwind CSS for clean, modern, and mobile-friendly design.</li>
                    </ul>

                </div>

                <div className="p-2 md:mt-4 md:ml-16 text-center">
                    <img className='border-none md:h-[240px] md:w-[370px] rounded-md shadow-lg shadow-gray-500 md:mt-12 mt-4
                                    transition-transform duration-[3000ms] ease-in-out 
                                    hover:translate-x-12 hover:translate-y-24' src="quiz.png" />
                    <div className="mt-4">
                        <a className="hover:text-pink-800 text-blue-500 text-xs md:text-sm" href='https://quiz-app-six-dusky-78.vercel.app/'>https://quiz-app-six-dusky-78.vercel.app/</a>
                    </div>
                </div>
            </div>
             <div className="flex flex-col md:flex-row">
                <div className="p-2 mt-12 md:ml-12 text-justify">
                    <p className="font-semibold md:text-xl md:text-left text-blue-900"> 04. Dashboard (ADMIN PANEL) </p>
                    <p className="mt-6 md:text-left text-gray-700 text-justify md:text-sm"> 
                        A responsive admin panel designed to visualize analytics and manage data. Features 
                        <span className="text-red-500 hover:bg-red-400 hover:text-white"> user login (mocked or <br/>
                        Firebase) </span>, a <span className="text-red-500 hover:bg-red-400 hover:text-white"> line chart for analytics, </span> and a
                         <span className="text-red-500 hover:bg-red-400 hover:text-white"> dynamic table </span> with search, sorting, and pagination. The <br/>
                        dashboard includes a collapsible side navigation for easy access to different sections and a fully responsive <br/>
                        layout. </p>

                    <ul className="list-disc text-gray-700 leading-loose ml-4">
                        <li className="text-left text-sm text-justify">🔑 <span className="text-blue-400"> User Authentication: </span> Mocked or Firebase login </li>
                        <li className="text-left text-sm text-justify">📈 <span className="text-blue-400"> Analytics Chart: </span> Line chart using Recharts </li>
                        <li className="text-left text-sm text-justify">📋 <span className="text-blue-400"> Data Table: </span> Sorting, search, and pagination for efficient data management </li>
                        <li className="text-left text-sm text-justify">📐 <span className="text-blue-400"> Responsive Layout: </span> Collapsible sidebar and mobile-friendly design </li>
                        <li className="text-left text-sm text-justify">♻️ <span className="text-blue-400"> Reusable Components: </span> Cards, table, and chart for scalable UI </li>
                    </ul>

                </div>

                <div className="p-2 md:mt-4 md:ml-16 text-center">
                    <img className='border-none md:h-[240px] md:w-[370px] rounded-md shadow-lg shadow-gray-500 md:mt-12 mt-4
                                    transition-transform duration-[3000ms] ease-in-out 
                                    hover:translate-x-12 hover:translate-y-24' src="dash.png" />
                    <div className="mt-4">
                        <a className="hover:text-pink-800 text-blue-500 text-xs md:text-sm" href='https://dash-board-admin-panel-three.vercel.app/'>https://dash-board-admin-panel-three.vercel.app/</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="p-2 mt-12 md:ml-12 text-justify">
                    <p className="font-semibold text-xl text-left text-blue-900"> 05. Employee Management System (EMS) </p>
                    <p className="mt-6 text-left text-gray-700 text-justify text-sm"> Currently designing and developing a <span className="text-red-500 hover:bg-red-400 hover:text-white"> role-based Employee Management System </span>using React. <br /> The application will
                        include <span className="text-red-500 hover:bg-red-400 hover:text-white"> Admin and Employee dashboards, task management, and user <br /> authentication.</span>
                        The project focuses on frontend state management using
                        <span className="text-red-500 hover:bg-red-400 hover:text-white"> Context API </span> and
                        <br /> persistent data storage with <span className="text-red-500 hover:bg-red-400 hover:text-white"> localStorage. </span>
                    </p>

                    <h1 className="text-blue-400 text-left mt-4">🔐 Authentication & Role-Based Access:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm text-justify">Basic login mechanism with user role detection</li>
                        <li className="text-left text-sm text-justify">Conditional rendering and routing based on user role (Admin or Employee)</li>
                        <li className="text-left text-sm text-justify">Session persistence using localStorage to retain login status</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">🧭 Admin Dashboard:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm text-justify">View list of all employees</li>
                        <li className="text-left text-sm text-justify">Assign, edit, and delete tasks</li>
                        <li className="text-left text-sm text-justify">Monitor task completion status and manage user roles</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">👨‍💻 Employee Dashboard:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm text-justify">View assigned tasks with status and deadlines</li>
                        <li className="text-left text-sm text-justify">Update task status (e.g., In Progress, Completed)</li>
                        <li className="text-left text-sm text-justify">View profile and basic employee details</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">⚙️ State Management:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm text-justify">Centralized using React Context API for shared data (user info, task list)</li>
                        <li className="text-left text-sm text-justify">Local state for component-level interactions using useState</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">💾 Data Persistence:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm text-justify">All user, task, and session data stored in localStorage</li>
                        <li className="text-left text-sm text-justify">Mimics backend functionality in a frontend-only project</li>
                    </ul>
                </div>

                <div className="p-2 md:mt-6 md:ml-28 text-center">
                    <img className='mx-auto border-none md:h-[310px] md:w-[470px] rounded-md shadow-lg shadow-gray-500 md:mt-32 mt-4
                                    transition-transform duration-[3000ms] ease-in-out 
                                    hover:translate-x-12 hover:translate-y-24' src="EMS.png" />
                    <div className="mt-4">
                        <a className="hover:text-pink-800 text-blue-500 text-xs md:text-sm" href='https://employee-management-system-ems-steel.vercel.app/'>https://employee-management-system-ems-steel.vercel.app/</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Projects;