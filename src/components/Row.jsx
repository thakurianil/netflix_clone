import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Row = ({ title, data, type, onOpenModal }) => {
    const rowRef = useRef(null);

    const handleScroll = (direction) => {
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="px-4 md:px-12 py-4 space-y-2">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 group inline-flex cursor-pointer">
                {title} <span className="opacity-0 group-hover:opacity-100 transition duration-300 ml-2 text-cyan-400 text-sm md:text-base self-center flex items-center">Explore All <ChevronRight className="w-4 h-4 ml-1" /></span>
            </h2>

            <div className="relative group/row">
                {/* Left Arrow */}
                <button
                    className="absolute left-0 top-0 bottom-0 w-12 bg-black/50 z-40 opacity-0 group-hover/row:opacity-100 transition duration-300 flex items-center justify-center -ml-4 md:-ml-12 hover:bg-black/80 text-white hover:text-cyan-400"
                    onClick={() => handleScroll('left')}
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>

                {/* Scroll Container */}
                <div
                    ref={rowRef}
                    className="flex gap-4 overflow-x-scroll py-4 px-2 [&::-webkit-scrollbar]:hidden"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {data.map((item) => (
                        <motion.div
                            key={item.id}
                            className="relative min-w-[240px] md:min-w-[300px] h-40 md:h-44 bg-[#181818] rounded overflow-hidden cursor-pointer flex-shrink-0 group/card transition duration-300"
                            whileHover={{
                                scale: 1.05,
                                zIndex: 50,
                                y: -10,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                            }}
                            onClick={() => onOpenModal(item, type)}
                        >
                            {type === 'project' ? (
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded opacity-80 group-hover/card:opacity-100 transition duration-300" />
                            ) : (
                                <div className="w-full h-full p-6 flex flex-col justify-end bg-gradient-to-br from-gray-800 to-black rounded">
                                    <h3 className="font-bold text-xl text-white">{item.role}</h3>
                                    <p className="text-sm text-gray-400 mt-1">{item.company}</p>
                                </div>
                            )}

                            {/* Overlay title on hover for projects */}
                            {type === 'project' && (
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover/card:opacity-100 transition duration-300 flex items-end p-4 pt-10">
                                    <h3 className="font-bold text-white text-lg">{item.title}</h3>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    className="absolute right-0 top-0 bottom-0 w-12 bg-black/50 z-40 opacity-0 group-hover/row:opacity-100 transition duration-300 flex items-center justify-center -mr-4 md:-mr-12 hover:bg-black/80 text-white hover:text-cyan-400"
                    onClick={() => handleScroll('right')}
                >
                    <ChevronRight className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
};

export default Row;
