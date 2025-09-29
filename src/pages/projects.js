function Projects() {
    return (
        <div className="mt-28">
            <div className="bg-gray-200 h-24 text-center">
                <h1 className='text-4xl font-semibold p-4'>Projects</h1>
            </div>
            <div className="flex">
                <div className="p-2 mt-12 ml-12">
                    <p className="font-semibold text-xl text-left">01. E-commerce Website</p>
                    <p className="mt-6 text-left text-gray-700 text-justify text-sm">A fully functional and responsive e-commerce web application that allows users to<br /> browse products, filter
                        them by category, search dynamically, and manage items in<br /> a shopping cart — all built with modern web
                        technologies and clean UI/UX practices.
                    </p>

                    <h1 className="text-blue-400 text-left mt-4">Product Listing:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">Products are rendered dynamically from a data source using React’s component-based architecture.</li>
                        <li className="text-left text-sm">Each product card includes details like image, title, price, category, and an “Add to Cart” button.</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">Dynamic search & Filtering:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">Implemented real-time search functionality that filters products as the user types.</li>
                        <li className="text-left text-sm">Enabled category-based filtering to allow users to narrow down product views based on their interests.</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">Shopping Cart Management (with Context API):</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">Designed a global cart state using React's Context API to manage items across multiple components.</li>
                        <li className="text-left text-sm">Users can add items to the cart, view total price and quantity, remove individual items, or clear the entire cart.</li>
                        <li className="text-left text-sm">Cart state persists throughout the session to ensure smooth user experience.</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">Clean Code Structure & Component Reusability:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">Separated logic and UI into reusable components (ProductCard, Navbar, Cart, etc.).</li>
                        <li className="text-left text-sm">Followed best practices for component lifecycle, state handling, and prop management.</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">Responsive Design:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">Built a mobile-first UI using Tailwind CSS, ensuring smooth accessibility across all screen sizes.</li>
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
                <div className="p-2 mt-12 ml-12">
                    <p className="font-semibold text-xl text-left">02. Planning.......</p>
                    <p className="mt-6 text-left text-gray-700 text-justify text-sm">A fully functional and responsive e-commerce web application that allows users to<br /> browse products, filter
                        them by category, search dynamically, and manage items in <br /> a shopping cart — all built with modern web
                        technologies and clean UI/UX practices.
                    </p>

                    <h1 className="text-blue-400 text-left mt-4">Product Listing:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">Products are rendered dynamically from a data source using React’s component-based architecture.</li>
                        <li className="text-left text-sm">Each product card includes details like image, title, price, category, and an “Add to Cart” button.</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">Dynamic search & Filtering:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">Implemented real-time search functionality that filters products as the user types.</li>
                        <li className="text-left text-sm">Enabled category-based filtering to allow users to narrow down product views based on their interests.</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">Shopping Cart Management (with Context API):</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">Designed a global cart state using React's Context API to manage items across multiple components.</li>
                        <li className="text-left text-sm">Users can add items to the cart, view total price and quantity, remove individual items, or clear the entire cart.</li>
                        <li className="text-left text-sm">Cart state persists throughout the session to ensure smooth user experience.</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">Clean Code Structure & Component Reusability:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">Separated logic and UI into reusable components (ProductCard, Navbar, Cart, etc.).</li>
                        <li className="text-left text-sm">Followed best practices for component lifecycle, state handling, and prop management.</li>
                    </ul>

                    <h1 className="text-blue-400 text-left mt-4">Responsive Design:</h1>
                    <ul className="list-disc text-gray-700 leading-relaxed ml-4">
                        <li className="text-left text-sm">Built a mobile-first UI using Tailwind CSS, ensuring smooth accessibility across all screen sizes.</li>
                    </ul>
                </div>

                <div className="p-2 mt-6">
                    <img className='h-[310px] w-[470px] rounded-md shadow-lg shadow-gray-500 mt-32 
                                     transition-transform duration-500 ease-in-out 
                                     hover:-translate-y-8 hover:animate-pulse' src="project1.png" />
                    <div className="mt-4">
                        <a className="hover:text-pink-800 text-center text-blue-500" href='https://ecommerce-website-zeta-murex.vercel.app/'>https://ecommerce-website-zeta-murex.vercel.app/</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Projects;