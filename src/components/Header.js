import { Link } from "react-router-dom";
function Header() {
    return (
        <div>
            <div className="flex gap-2 px-2 py-4 md:justify-between md:p-4 fixed top-0 left-0 right-0 z-50 h-20">
                <div>
                    <Link to='/'><img className="h-6 w-6 lg:h-16 lg:w-16 rounded-full" src="jt.jpg" /></Link>
                </div>
                <div className="flex gap-2 md:gap-6 md:mt-4 flex-start">
                    <h1 className="text-xs md:text-2xl font-semibold">Jyoti Patel</h1>
                    <p className='text-xs md:text-sm md:mt-2'>Front-End Developer</p>
                </div>
                <div />
                <div />
                <div />
                <div className="flex gap-2 md:gap-6 mt-6">
                    <Link className='hover:text-pink-500 transition-transform duration-300 hover:scale-110' to='/resume'>Resume |</Link>
                    <Link className='hover:text-pink-500 transition-transform duration-300 transform hover:scale-110' to='/projects'>Projects |</Link>
                    <Link className='hover:text-pink-500 transition-transform duration-300 transform hover:scale-110' to='/contact'>Contact</Link>
                    <div />
                </div>

            </div>
        </div>
    )
}
export default Header;


// return (
//     <div>
//         <div className="flex justify-between p-4 fixed top-0 left-0 right-0 z-50 h-20">
//             <div>
//                 <Link to='/'><img className="h-8 w-8 lg:h-16 lg:w-16 rounded-full ml-4" src="jt.jpg" /></Link>
//             </div>
//             <div className="flex md:gap-6 mt-4 -ml-24">
//                 <h1 className="text-2xl font-semibold">Jyoti Patel</h1>
//                 <p className='text-sm mt-2'>Front-End Developer</p>
//             </div>
//             <div />
//             <div />
//             <div />
//             <div className="flex gap-6 mt-6">
//                 <Link className='hover:text-pink-500 transition-transform duration-300 hover:scale-110' to='/resume'>Resume |</Link>
//                 <Link className='hover:text-pink-500 transition-transform duration-300 transform hover:scale-110' to='/projects'>Projects |</Link>
//                 <Link className='hover:text-pink-500 transition-transform duration-300 transform hover:scale-110' to='/contact'>Contact</Link>
//                 <div />
//             </div>

//         </div>
//     </div>
// )