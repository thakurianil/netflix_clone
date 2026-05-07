import { useState, useEffect } from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { userData } from '../data';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-colors duration-500 flex items-center justify-between px-4 md:px-12 py-4 ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
            <div className="flex items-center gap-8">
                <h1 className="text-red-600 text-3xl font-black tracking-wider cursor-pointer">
                    {userData.name.split(' ')[0].toUpperCase()}
                </h1>
                <nav className="hidden md:flex gap-5 text-sm font-medium text-gray-300">
                    <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
                    <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
                    <a href="#experience" className="hover:text-gray-300 transition-colors">Experience</a>
                    <a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a>
                </nav>
            </div>

            <div className="flex items-center gap-4 text-white">
                <Search className="w-5 h-5 cursor-pointer hidden md:block" />
                <Bell className="w-5 h-5 cursor-pointer hidden md:block" />
                <div className="w-8 h-8 bg-red-600 rounded cursor-pointer overflow-hidden flex items-center justify-center font-bold text-white">
                    {userData.name.charAt(0)}
                </div>
                <Menu className="w-6 h-6 cursor-pointer block md:hidden" />
            </div>
        </header>
    );
};

export default Navbar;
