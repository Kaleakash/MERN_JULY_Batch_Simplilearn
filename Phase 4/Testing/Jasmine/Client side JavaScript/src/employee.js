class Employee {
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    incrementSalary(salary){
        this.salary = salary;
    }
    decrementSalary(salary){
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}

// let emp = new Employee(100,"Raj",12000);
// emp.decrementSalary(2000);
// emp.getSalary();
// emp.incrementSalary(5000);