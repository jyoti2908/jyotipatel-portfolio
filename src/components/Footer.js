import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
    return (
        <div className="mx-auto flex flex-col md:flex-row bg-cover bg-no-repeat md:p-4 p-2 justify-between h-auto w-full"
         style={{ backgroundImage: "url('footer.webp')"}}>
            <div>
                <h1 className="text-xs text-center md:text-sm text-gray-400">Email </h1>
                <div className="flex justify-center gap-2 md:gap-4 mt-2">
                    <a href='https://mail.google.com/mail/'><TfiEmail className="text-blue-400 md:h-6 md:w-4 md:ml-4 h-4 w-4 mx-auto" /></a>
                    <a className="hover:text-blue-500 md:text-sm text-xs" href='https://mail.google.com/mail/'>jyotipatel.gweca@gmail.com </a>
                </div>
            </div>
            <div>
                <h1 className="text-xs text-center md:text-sm text-gray-400 mt-4 md:mt-0">Get Connected</h1>
                <div className=" flex flex-col md:gap-2 md:mt-2">
                    <div className="flex md:gap-4 gap-2 justify-center">
                        <div>
                            <a href='https://github.com/jyoti2908'>< FaGithub className="md:h-6 md:w-4 md:ml-4 h-4 w-4 mx-auto" /></a>
                        </div>
                        <div>
                            <a className="hover:text-blue-500 md:text-sm text-xs" href='https://github.com/jyoti2908'>https://github.com/jyoti2908</a>
                        </div>
                    </div>
                    <div className="flex md:gap-4 gap-2 justify-center">
                        <div>
                            <a href='https://www.linkedin.com/in/jyotipatel192919/'>< CiLinkedin className="md:h-6 md:w-4 md:ml-4 h-4 w-4 mx-auto text-blue-400" /></a>
                        </div>
                        <div>
                            <a className="hover:text-blue-500 md:text-sm text-xs" href='https://www.linkedin.com/in/jyotipatel192919/'>https://www.linkedin.com/in/jyotipatel192919/</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center text-xs md:text-gray-400 text-white mt-4 md:mt-0"> © Designed by Jyoti Patel <br /> All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer;