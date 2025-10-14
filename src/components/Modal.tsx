'use client';
import { X } from 'lucide-react';
import { useEffect } from 'react';

const Modal = ({
  modalButtonContent,
  children,
  isOpen,
  stateHandler,
}: {
  modalButtonContent: () => React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  stateHandler: (isOpen: boolean) => void;
}) => {
  const handleModal = () => stateHandler(!isOpen);

  useEffect(() => {
    // When the modal opens prevent full page scroll
    document.body.style.overflow = isOpen ? 'hidden' : '';

    // When the model closes or when the component re-renders tidy up close effect
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div>
      {!isOpen && (
        <button className="primary-button" onClick={handleModal}>
          {modalButtonContent()}
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex md:justify-center md:items-center overflow-y-auto"
          onClick={handleModal}
        >
          <button
            className="12 h-12 p-3 rounded absolute right-0 top-0 lg:right-6 lg:top-6 hover:cursor-pointer z-50 text-red-500 md:text-white"
            onClick={handleModal}
          >
            <X size={24} />
          </button>
          <div
            className="relative bg-white shadow-xl w-full md:w-[90%] max-w-[720px] h-fit md:min-h-0 rounded-none md:rounded-lg mx-auto my-0 md:my-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="overflow-y-auto h-fit md:max-h-[100vh] scrollbar-visible">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
