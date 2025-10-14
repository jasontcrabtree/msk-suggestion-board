-- Script used to add sample data to Neon PostgresQL db
INSERT INTO
    employees
    (     id, "name", "department", "riskLevel" )
VALUES
    (
        'f47ac10b-58cc-4372-a567-0e02b2c3d479', 'Priya Patel', 'Engineering', 'high'
    ),
    (
        '6ba7b810-9dad-11d1-80b4-00c04fd430c8', 'João Silva', 'Finance', 'medium'
    ),
    (
        '6ba7b811-9dad-11d1-80b4-00c04fd430c8', 'Fatima Al-Rashid', 'Marketing', 'low'
    ),
    (
        '6ba7b812-9dad-11d1-80b4-00c04fd430c8', 'Oluwaseun Adeyemi', 'Operations', 'high'
    ),
    (
        '6ba7b813-9dad-11d1-80b4-00c04fd430c8', 'Chen Wei-Lin', 'HR', 'medium'
    );
SELECT
    *
FROM
    employees;