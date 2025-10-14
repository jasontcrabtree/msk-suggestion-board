'use client';
import { useEffect } from 'react';

const Modal = ({
  modalLabel,
  children,
  isOpen,
  stateHandler,
}: {
  modalLabel: string;
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
        <button className="border py-1 px-6 rounded" onClick={handleModal}>
          {modalLabel}
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-center items-center"
          onClick={handleModal}
        >
          <button
            className="border py-1 px-6 rounded bg-white absolute right-6 top-6"
            onClick={handleModal}
          >
            Close
          </button>
          <div
            className="relative bg-white shadow-xl w-[90%] max-w-[720px] max-h-[90vh] rounded-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="overflow-y-auto max-h-[85vh]">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
