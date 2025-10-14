-- Postgresql script to make db based on provided data set

CREATE TABLE IF NOT EXISTS suggestions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  employeeId UUID NOT NULL REFERENCES employees(id),
  type TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL,
  priority TEXT,
  source TEXT,
  notes TEXT,
  createdBy VARCHAR,
  dateCreated TIMESTAMP DEFAULT now(),
  dateUpdated TIMESTAMP DEFAULT now(),
  dateCompleted TIMESTAMP
);