const employeeSchema1 = {
  type: 'array',
  items: { 
  type: 'object',
    properties: {
      id: { type: 'number' },
      employee_name: { type: 'string' },
      employee_salary: { type: 'number' },
      employee_age: { type: 'number' },
    },
    required: ['id', 'employee_name', 'employee_salary', 'employee_age'],
  }
}


module.exports = employeeSchema1