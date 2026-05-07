import { Play, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { userData } from '../data';

const Hero = () => {
    return (
        <div className="relative h-[80vh] md:h-[90vh] w-full text-white">
            {/* Background Image / Gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-full">
                <img
                    src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2000&auto=format&fit=crop"
                    alt="Developer Workspace"
                    className="w-full h-full object-cover opacity-60"
                />
                {/* Netflix style vignette gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#141414] to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-12 max-w-3xl">
                <motion.h1
                    className="text-5xl md:text-7xl font-black mb-2 text-white drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {userData.name}
                </motion.h1>

                <motion.h2
                    className="text-xl md:text-3xl font-semibold mb-4 text-gray-200 drop-shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {userData.title}
                </motion.h2>

                <motion.p
                    className="text-base md:text-lg text-gray-300 max-w-xl mb-8 drop-shadow leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {userData.motto}
                </motion.p>

                <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button className="flex items-center gap-2 bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-white/80 transition-colors">
                        <Play fill="currentColor" className="w-5 h-5 md:w-6 md:h-6" /> Play Work
                    </button>
                    <button className="flex items-center gap-2 bg-gray-500/70 text-white px-6 md:px-8 py-2 md:py-3 rounded font-bold hover:bg-gray-500/50 transition-colors">
                        <Info className="w-5 h-5 md:w-6 md:h-6" /> More Info
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
