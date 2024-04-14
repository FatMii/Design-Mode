class Singleton {
  static instance;

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }

  // 示例方法
  someMethod() {
    console.log("I am doing something.");
  }
}

// 使用单例
const instance1 = new Singleton();
const instance2 = new Singleton();

instance1.someMethod(); // Output: I am doing something.

console.log(instance1 === instance2); // Output: true

console.log(Singleton.instance);
console.log(Singleton.getInstance())


//  console.log(instance1.instance);
//  console.log(instance1.getInstance());

