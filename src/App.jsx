import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Row from './components/Row';
import Modal from './components/Modal';
import Footer from './components/Footer';
import { userData } from './data';

function App() {
  const [modalData, setModalData] = useState(null);
  const [modalType, setModalType] = useState(null);

  const openModal = (data, type) => {
    setModalData(data);
    setModalType(type);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalData(null);
    setModalType(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-[#141414] min-h-screen text-white font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />

      <div className="pb-20 -mt-32 md:-mt-48 relative z-20 space-y-12">
        <Row title="My Projects" data={userData.projects} type="project" onOpenModal={openModal} />
        <Row title="Work Experience" data={userData.experience} type="experience" onOpenModal={openModal} />

        {/* About section using simple text */}
        <div className="px-4 md:px-12 py-8 mt-8 border-t border-gray-800">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">More About Me</h2>
          <p className="text-gray-300 max-w-3xl leading-relaxed text-lg">{userData.about}</p>
          <div className="mt-6">
            <h3 className="text-gray-500 font-medium mb-3">Skills:</h3>
            <div className="flex flex-wrap gap-2 max-w-3xl">
              {userData.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-[#181818] text-gray-300 text-sm rounded shadow-sm hover:text-white transition cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <Modal isOpen={!!modalData} onClose={closeModal} data={modalData} type={modalType} />
    </div>
  );
}

export default App;
