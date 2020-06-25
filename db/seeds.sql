USE employee_trackerDB,

INSERT INTO department (name)
VALUES 
    ("Management"),
    ("legal")

INSERT INTO role (title, salary, department_id)
VALUES 
    ("manager", 100000,1 ),
    ("employee", 120000,2)


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ("John", "Doe",1,NULL),
    ("Jim", "Smith",2,3)

