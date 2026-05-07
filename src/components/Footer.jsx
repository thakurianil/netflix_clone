import { Code2, Briefcase, Mail } from 'lucide-react';
import { userData } from '../data';

const Footer = () => {
    return (
        <footer className="mt-20 py-10 border-t border-gray-800 text-gray-500 text-sm flex flex-col items-center">
            <div className="flex gap-6 mb-6">
                <a href={userData.socials.find(s => s.name === 'GitHub')?.url} className="hover:text-white transition" aria-label="GitHub">
                    <Code2 className="w-6 h-6" />
                </a>
                <a href={userData.socials.find(s => s.name === 'LinkedIn')?.url} className="hover:text-white transition" aria-label="LinkedIn">
                    <Briefcase className="w-6 h-6" />
                </a>
                <a href={userData.socials.find(s => s.name === 'Email')?.url} className="hover:text-white transition" aria-label="Email">
                    <Mail className="w-6 h-6" />
                </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 w-full max-w-4xl mb-8">
                <a href="#" className="hover:underline">Audio Description</a>
                <a href="#" className="hover:underline">Help Center</a>
                <a href="#" className="hover:underline">Gift Cards</a>
                <a href="#" className="hover:underline">Media Center</a>
                <a href="#" className="hover:underline">Investor Relations</a>
                <a href="#" className="hover:underline">Jobs</a>
                <a href="#" className="hover:underline">Terms of Use</a>
                <a href="#" className="hover:underline">Privacy</a>
            </div>
            <p className="border border-gray-600 px-2 py-1 hover:text-white transition cursor-pointer mb-4">
                Service Code
            </p>
            <p>© 2026 {userData.name}. All inspired rights reserved.</p>
        </footer>
    );
};

export default Footer;
