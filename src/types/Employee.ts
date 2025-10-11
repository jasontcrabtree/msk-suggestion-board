export type Employee = {
  id: string;
  name: string;
  department: Department;
  riskLevel: RiskLevel;
};

enum Department {
  Engineering = 'Engineering',
  Finance = 'Finance',
  Marketing = 'Marketing',
  Operations = 'Operations',
  HR = 'HR',
}

enum RiskLevel {
  High = 'high',
  Medium = 'medium',
  Low = 'low',
}
