export type Suggestion = {
  Id: string;
  EmployeeId: string;
  Type: SuggestionType;
  Description: string;
  Status: Status;
  Priority: Priority;
  Source: Source;
  DateCreated: Date;
  DateUpdated: Date;
  Notes: string;
};

enum SuggestionType {
  'equipment',
}

enum Status {}

enum Priority {}

enum Source {}
