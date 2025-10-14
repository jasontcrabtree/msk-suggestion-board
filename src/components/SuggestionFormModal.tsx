'use client';

import Modal from '@/components/Modal';
import SuggestionForm from '@/components/SuggestionForm';
import { Employee } from '@/types/Employee';
import { PlusCircle } from 'lucide-react';
import { useState } from 'react';

const modalButton = () => {
  return (
    <div className="flex flex-row gap-4 items-center">
      Add Suggestion
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
