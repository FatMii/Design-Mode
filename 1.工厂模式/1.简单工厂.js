function FullTime() {
    this.hourly = "$12";
  }
  
  function PartTime() {
    this.hourly = "$11";
  }
  
  function Temporary() {
    this.hourly = "$10";
  }
  
  function Contractor() {
    this.hourly = "$15";
  }
  
  function EmployeeFactory() {
    this.create = (type) => {
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
    };
  }
  
  const factory = new EmployeeFactory();
  
  const employees = [];
  employees.push(factory.create("fulltime"));
  employees.push(factory.create("parttime"));
  employees.push(factory.create("temporary"));
  employees.push(factory.create("contractor"));
  
  employees.forEach(emp => console.log(emp));
  