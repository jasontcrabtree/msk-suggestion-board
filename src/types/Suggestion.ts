export type Suggestion = {
  id: string;
  employeeId: string;
  type: SuggestionType;
  description: string;
  status: Status;
  priority: Priority;
  source: Source;
  dateCreated: Date;
  dateUpdated: Date;
  notes: string;
};

enum SuggestionType {
  Equipment = 'equipment',
  Exercise = 'exercise',
  Behavioural = 'behavioural',
  Lfiestyle = 'lfiestyle',
}

enum Status {
  Pending = 'pending',
  InProgress = 'in_progress',
  Completed = 'completed',
  Overdue = 'overdue',
}

enum Priority {
  High = 'high',
  Medium = 'medium',
  Low = 'low',
}

enum Source {
  VIDA = 'vida',
  Admin = 'admin',
}
