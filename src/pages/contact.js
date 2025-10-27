import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Contact() {
    return (
        <div>
            <h1 className="text-sm font-semibold md:text-2xl text-white h-auto bg-red-400 text-center px-8 py-8">CONTACT PAGE</h1>
            <div className="flex items-center justify-center bg-black text-white">
                <div className="mx-auto mt-24 border-2 border-emerald-600 md:p-12 px-4 py-2 rounded-xl mb-24">
                    <form>
                        <div className="border-b-2 border-gray-700">
                            <h1 className="text-lg text-left text-semibold text-blue-400 mb-1">Email </h1>
                            <div className="flex flex-start gap-6 mb-2">
                                <a href='https://mail.google.com/mail/'><TfiEmail className="text-blue-400 h-6 w-4" /></a>
                                <a className="hover:text-blue-500 text-sm" href='https://mail.google.com/mail/'>jyotipatel.gweca@gmail.com </a>
                            </div>
                        </div>
                        <div className="border-b-2 border-gray-700 mt-2">
                            <h1 className="text-md text-left text-semibold text-blue-400 mb-1">Github</h1>
                            <div className="flex flex-start gap-2 mb-2">
                                <a href='https://github.com/jyoti2908'><FaGithub className="h-6 w-6" /></a>
                                <a className="hover:text-blue-500 text-sm" href='https://github.com/jyoti2908'>https://github.com/jyoti2908</a>
                            </div>
                        </div>
                        <div className="border-b-2 border-gray-700 mt-2">
                            <h1 className="text-md text-left text-semibold text-blue-400 mb-1">LinkedIn</h1>
                            <div className="flex flex-start gap-2 mb-2">
                                <a href='https://www.linkedin.com/in/jyotipatel192919/'>< CiLinkedin className="h-6 w-6 text-blue-400" /></a>
                                <a className="hover:text-blue-500 text-sm" href='https://www.linkedin.com/in/jyotipatel192919/'>https://www.linkedin.com/in/jyotipatel192919/</a>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
        </div>


    )
}
export default Contact;