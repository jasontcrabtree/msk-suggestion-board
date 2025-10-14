'use client';

import Modal from '@/components/Modal';
import SuggestionForm from '@/components/SuggestionForm';
import { Employee } from '@/types/Employee';
import { useState } from 'react';

const SuggestionFormModal = ({ employees }: { employees: Employee[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal modalLabel="New Suggestion" isOpen={isOpen} stateHandler={setIsOpen}>
      <SuggestionForm
        onFormSuccess={() => setIsOpen(false)}
        employees={employees}
      />
    </Modal>
  );
};

export default SuggestionFormModal;
