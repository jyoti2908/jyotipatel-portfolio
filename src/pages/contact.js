import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function Contact() {
    return (
        <div className="flex h-[400px] w-full items-center justify-center mt-24 bg-black text-white">
            <div className="border-2 border-emerald-600 p-12 rounded-xl">
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

    )
}
export default Contact;