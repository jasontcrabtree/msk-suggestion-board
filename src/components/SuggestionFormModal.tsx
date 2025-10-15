/*
    - Client side component responsible for rendering the suggestion form inside the modal
    - This has been broken out to lift state up from the suggestion form to the modal to enable close on form completion via callback
    - The client component specifically is required due to the page component where this is called being server rendered
*/
'use client';

import Modal from '@/components/Modal';
import SuggestionForm from '@/components/SuggestionForm';
import { Employee } from '@/types/Employee';
import { PlusCircle } from 'lucide-react';
import { useState } from 'react';

const modalButton = () => {
  return (
    <div className="flex flex-row gap-2 items-center">
      New
      <PlusCircle size={20} />
    </div>
  );
};

const SuggestionFormModal = ({ employees }: { employees: Employee[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal
      modalButtonContent={modalButton}
      isOpen={isOpen}
      stateHandler={setIsOpen}
    >
      <SuggestionForm
        onFormSuccess={() => setIsOpen(false)}
        employees={employees}
      />
    </Modal>
  );
};

export default SuggestionFormModal;
