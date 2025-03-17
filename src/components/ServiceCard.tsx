import React from 'react';
import Modal from './Modal';

interface ServiceProps {
  title: string;
  description: string;
  image: string;
  details: {
    fullDescription: string;
    benefits: string[];
    includes: string[];
  };
  link?: string; 
}

export default function ServiceCard({ title, description, image, details, link }: ServiceProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank'); 
    } else {
      setIsModalOpen(true); 
    }
  };

  return (
    <>
      <div
        className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 cursor-pointer h-full flex flex-col"
        onClick={handleClick}
        data-aos="fade-up"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm sm:text-base">{description}</p>
        </div>
      </div>

      {!link && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={title}
        >
          <div className="space-y-8 max-w-3xl mx-auto px-4 sm:px-6">
            <div className="prose max-w-none">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {details.fullDescription}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  Benefícios
                </h4>
                <ul className="space-y-3">
                  {details.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 mt-2.5 rounded-full bg-orange-500/60" />
                      <span className="text-sm sm:text-base text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  O que inclui
                </h4>
                <ul className="space-y-3">
                  {details.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 mt-2.5 rounded-full bg-orange-500/60" />
                      <span className="text-sm sm:text-base text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}