// Define the employee types using classes
class FullTime {
  constructor() {
      this.hourly = "$12";
  }
}

class PartTime {
  constructor() {
      this.hourly = "$11";
  }
}

class Temporary {
  constructor() {
      this.hourly = "$10";
  }
}

class Contractor {
  constructor() {
      this.hourly = "$15";
  }
}

// Define the factory class
class EmployeeFactory {
  create(type) {
      switch (type) {
          case "fulltime":
              return new FullTime();
          case "parttime":
              return new PartTime();
          case "temporary":
              return new Temporary();
          case "contractor":
              return new Contractor();
          default:
              return null;
      }
  }
}

// Create an instance of the factory
const factory = new EmployeeFactory();

// Create employee instances
const employees = [];
employees.push(factory.create("fulltime"));
employees.push(factory.create("parttime"));
employees.push(factory.create("temporary"));
employees.push(factory.create("contractor"));

// Log each employee to the console
employees.forEach(emp => console.log(emp));
