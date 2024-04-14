// 定义员工基类
class Employee {
  constructor(hourly) {
    this.hourly = hourly;
  }
}

// 具体员工类
class FullTime extends Employee {
  constructor() {
    super("$12");
  }
}

class PartTime extends Employee {
  constructor() {
    super("$11");
  }
}

class Temporary extends Employee {
  constructor() {
    super("$10");
  }
}

class Contractor extends Employee {
  constructor() {
    super("$15");
  }
}

// 抽象工厂类
class EmployeeFactory {
  constructor() {
    this.createdCount = 0;
  }

  increaseCount() {
    this.createdCount++;
    console.log(
      `A new employee has been created. Total created: ${this.createdCount}`
    );
  }
}

// 具体工厂类
class FullTimeFactory extends EmployeeFactory {
  createEmployee() {
    this.increaseCount();
    return new FullTime();
  }
}

class PartTimeFactory extends EmployeeFactory {
  createEmployee() {
    this.increaseCount();
    return new PartTime();
  }
}

class TemporaryFactory extends EmployeeFactory {
  createEmployee() {
    this.increaseCount();
    return new Temporary();
  }
}

class ContractorFactory extends EmployeeFactory {
  createEmployee() {
    this.increaseCount();
    return new Contractor();
  }
}

// 创建具体工厂实例
const fullTimeFactory = new FullTimeFactory();
const partTimeFactory = new PartTimeFactory();
const temporaryFactory = new TemporaryFactory();
const contractorFactory = new ContractorFactory();

// 使用工厂创建员工对象
const employees = [];
employees.push(fullTimeFactory.createEmployee());
employees.push(partTimeFactory.createEmployee());
employees.push(temporaryFactory.createEmployee());
employees.push(contractorFactory.createEmployee());

// 输出创建的员工信息
employees.forEach((emp) => console.log(emp));
