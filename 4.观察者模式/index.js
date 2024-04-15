// 应用场景:1.dom监听 2.降价商品
class Subject {
  constructor() {
    this.Observers = [];
  }
  add(observer) {
    this.Observers.push(observer);
  }
  remove(observer) {
    this.Observers = this.Observers.filter((item) => item !== observer);
  }
  notify() {
    this.Observers.forEach((item) => {
      item.update();
    });
  }
}
//定义观察者对象
class Observer {
  constructor(name) {
    this.name = name;
  }
  update() {
    console.log(`my name is:${this.name}`);
  }
}

let sub = new Subject();
let obs1 = new Observer("observer11");
let obs2 = new Observer("observer22");
sub.add(obs1);
sub.add(obs2);
sub.notify();

console.log("删除obs1后再次通知：")
sub.remove(obs1);
sub.notify();
