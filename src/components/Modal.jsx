import { X, Play, Plus, ThumbsUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, data, type }) => {
    if (!data) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex justify-center items-center px-4 py-10 md:py-20"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
                        onClick={onClose}
                    />

                    {/* Modal Box */}
                    <motion.div
                        key="modal-content"
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative w-full max-w-4xl bg-[#181818] rounded-xl overflow-hidden shadow-2xl z-10 max-h-full flex flex-col"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#181818] rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition shadow-lg"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Modal Header/Banner */}
                        <div className="relative h-64 md:h-96 w-full flex-shrink-0">
                            {type === 'project' ? (
                                <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-black/40 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow">
                                    {type === 'project' ? data.title : data.role}
                                </h2>

                                <div className="flex gap-3 items-center">
                                    {type === 'project' && data.liveLink && (
                                        <a href={data.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-bold hover:bg-white/80 transition-colors">
                                            <Play className="w-5 h-5 fill-current" /> Preview
                                        </a>
                                    )}
                                    {type === 'project' && data.githubLink && (
                                        <a href={data.githubLink} target="_blank" rel="noreferrer" className="w-10 h-10 border-2 border-gray-500 rounded-full flex items-center justify-center text-white hover:border-white transition-colors bg-black/40">
                                            <Plus className="w-5 h-5" />
                                        </a>
                                    )}
                                    <button className="w-10 h-10 border-2 border-gray-500 rounded-full flex items-center justify-center text-white hover:border-white transition-colors bg-black/40">
                                        <ThumbsUp className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8 flex-1 overflow-y-auto bg-[#181818]">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="md:col-span-2 space-y-4">
                                    <div className="flex items-center gap-2 text-sm font-semibold">
                                        <span className="text-green-400">New</span>
                                        <span className="text-gray-400 border border-gray-600 px-1.5 rounded text-xs">2026</span>
                                        <span className="border border-gray-600 px-1.5 rounded text-xs text-gray-300">HD</span>
                                    </div>

                                    <p className="text-white text-base md:text-lg leading-relaxed">
                                        {data.description}
                                    </p>
                                    {data.responsibilities !== undefined && (
                                        <p className="text-white text-base md:text-lg leading-relaxed">
                                            {data.responsibilities.map((t, idx) => (
                                                <li key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-md shadow-sm border border-gray-700">{t}</li>
                                            ))}
                                        </p>
                                    )}

                                    {/* Tech Stack rendered like Netflix cast */}
                                    <div className="mt-8 pt-6">
                                        <h3 className="text-gray-500 mb-3 font-medium">Core Technologies Build:</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {data.tech.map((t, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-md shadow-sm border border-gray-700">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 text-sm text-gray-400 border-t md:border-t-0 md:border-l border-gray-800 pt-6 md:pt-0 md:pl-8">
                                    {type === 'experience' && (
                                        <>
                                            <div>
                                                <span className="text-gray-500 block mb-1">Company:</span>
                                                <span className="text-white font-medium">{data.company}</span>
                                            </div>
                                            <div className="mt-4">
                                                <span className="text-gray-500 block mb-1">Duration:</span>
                                                <span className="text-white font-medium">{data.duration}</span>
                                            </div>
                                        </>
                                    )}
                                    {type === 'project' && (
                                        <>
                                            <div>
                                                <span className="text-gray-500 block mb-1">Developer:</span>
                                                <span className="text-white font-medium">Anil Khand</span>
                                            </div>
                                            <div className="mt-4">
                                                <span className="text-gray-500 block mb-1">Category:</span>
                                                <span className="text-white font-medium">Web Application</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Modal;
