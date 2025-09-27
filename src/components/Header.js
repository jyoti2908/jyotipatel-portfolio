import { Link } from "react-router-dom";
function Header() {
    return (
        <div>
            <div className="flex justify-between bg-gray-200 p-4 fixed top-0 left-0 right-0 z-50">
                <div>
                 <Link to='/'><img className="lg:h-16 lg:w-16 rounded-full ml-4" src="jt.jpg" /></Link> 
                </div>
                <div className="flex gap-6 mt-5 -ml-24">
                    <h1 className="text-xl font-semibold">Jyoti Patel</h1>
                    <p className='text-sm font-serif mt-2' >Front-End Developer</p>
                </div>
                    <div/> 
                    <div/>
                    <div/>
                <div className="flex gap-6 mt-5 -ml-24">
                    <Link to='/resume'>Resume |</Link>
                    <Link to='/projects'>Projects |</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
        </div>
    )
}
export default Header;