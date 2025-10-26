import { Link } from "react-router-dom";
function Header() {
    return (
        <div>
            <div className="mx-auto flex gap-2 px-2 py-4 md:justify-between md:p-4 fixed top-0 left-0 right-0 z-50 h-20">
                <div>
                    <Link to='/'><img className="h-8 w-8 lg:h-16 lg:w-16 rounded-full" src="jt.jpg" /></Link>
                </div>
                <div className="flex flex-row gap-2 mt-2 md:gap-6 md:mt-4">
                    <h1 className="text-xs md:text-2xl font-semibold">Jyoti Patel</h1>
                    <p className='text-xs md:text-sm md:mt-2'>Front-End Developer</p>
                </div>
                <div />
                <div />
                <div />
               <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-2 md:gap-6 mt-20 md:mt-6">

                    <Link
                        className="hover:text-pink-500 transition-transform duration-300 hover:scale-110"
                        to="/resume"
                    >
                        Resume |
                    </Link>
                    <Link
                        className="hover:text-pink-500 transition-transform duration-300 hover:scale-110"
                        to="/projects"
                    >
                        Projects |
                    </Link>
                    <Link
                        className="hover:text-pink-500 transition-transform duration-300 hover:scale-110"
                        to="/contact"
                    >
                        Contact
                    </Link>
                </div>


            </div>
        </div>
    )
}
export default Header;


