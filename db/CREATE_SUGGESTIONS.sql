CREATE TABLE IF NOT EXISTS suggestions (
  id UUID PRIMARY KEY,
  employeeId UUID NOT NULL,
  type TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL,
  priority TEXT,
  source TEXT,
  dateCreated TIMESTAMP NOT NULL,
  dateUpdated TIMESTAMP NOT NULL,
  dateCompleted TIMESTAMP,
  notes TEXT
);