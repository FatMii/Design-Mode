class PubSub {
    constructor() {
        this.subscribers = {};
    }

    // 订阅方法
    subscribe(event, callback) {
        // 如果没有该事件的订阅者数组，则初始化一个空数组
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        // 将回调函数添加到订阅者数组
        this.subscribers[event].push(callback);
        // 返回一个取消订阅的函数
        return () => this.unsubscribe(event, callback);
    }

    // 发布方法
    publish(event, data) {
        // 如果有订阅者，则调用每个回调函数，传入数据
        if (this.subscribers[event]) {
            this.subscribers[event].forEach(callback => callback(data));
        }
    }

    // 取消订阅方法
    unsubscribe(event, callback) {
        if (this.subscribers[event]) {
            // 过滤掉需要取消的回调函数
            this.subscribers[event] = this.subscribers[event].filter(cb => cb !== callback);
        }
    }
}

// 使用例子
const pubsub = new PubSub();

// 订阅事件
const subscription = pubsub.subscribe('message', data => console.log(`Received message: ${data}`));

// 发布事件
pubsub.publish('message', 'Hello world!');

// 取消订阅
subscription(); // 或者 pubsub.unsubscribe('message', callback)

// 应用场景:
// jQuery 的 on 和 trigger，$.callback();
// Vue 的双向数据绑定;
// Vue 的父子组件通信 $on/$emit
