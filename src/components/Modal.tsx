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
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-center items-center"
          onClick={handleModal}
        >
          <button
            className="12 h-12 p-3 rounded absolute right-6 top-6 hover:cursor-pointer"
            onClick={handleModal}
          >
            <X size={24} color={'white'} />
          </button>
          <div
            className="relative bg-white shadow-xl w-[90%] max-w-[720px] h-full max-h-[92vh] rounded-lg"
            onClick={e => e.stopPropagation()}
          >
            <div className="overflow-y-auto max-h-[92vh]">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
