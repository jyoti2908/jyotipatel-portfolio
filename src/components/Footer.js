import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
    return (
        <div className="bg-cover bg-no-repeat flex p-4 justify-between h-auto"
         style={{ backgroundImage: "url('footer.webp')"}}>
            <div>
                <h1 className="text-center text-sm text-gray-400">Email </h1>
                <div className="flex gap-4 mt-2">
                    <a href='https://mail.google.com/mail/'><TfiEmail className="text-blue-400 h-6 w-4 ml-4" /></a>
                    <a className="hover:text-blue-500 text-sm" href='https://mail.google.com/mail/'>jyotipatel.gweca@gmail.com </a>
                </div>
            </div>
            <div>
                <h1 className="text-center text-sm text-gray-400">Get Connected</h1>
                <div className=" flex flex-col gap-2 mt-2">
                    <div className="flex gap-4 justify-center">
                        <div>
                            <a href='https://github.com/jyoti2908'>< FaGithub className="h-6 w-6" /></a>
                        </div>
                        <div>
                            <a className="hover:text-blue-500 text-sm" href='https://github.com/jyoti2908'>https://github.com/jyoti2908</a>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <a href='https://www.linkedin.com/in/jyotipatel192919/'>< CiLinkedin className="h-6 w-6 text-blue-400" /></a>
                        </div>
                        <div>
                            <a className="hover:text-blue-500 text-sm" href='https://www.linkedin.com/in/jyotipatel192919/'>https://www.linkedin.com/in/jyotipatel192919/</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-xs text-gray-400"> © Designed by Jyoti Patel <br /> All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer;