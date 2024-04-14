//  应用场景: 1.axios拦截器的处理 2.不同状态码的处理 3.审批流程
class Chain {
    constructor(fn) {
      this.fn = fn;
      this.nextHandler = null;
    }

    setNextHandler(handler) {
      this.nextHandler = handler;
    }

    passRequest(...args) {
      const result = this.fn(...args);
      if (result === "nextSuccessor") {
        if (this.nextHandler) {
          return this.nextHandler.passRequest(...args);
        }
      }
      return result;
    }
  }

  function error400(err) {
    if (err.code !== 400) {
      return "nextSuccessor";
    }
    console.log("Handling 400 error");
  }

  function error500(err) {
    if (err.code !== 500) {
      return "nextSuccessor";
    }
    console.log("Handling 500 error");
  }

  function error600(err) {
    if (err.code !== 600) {
      return "nextSuccessor";
    }
    console.log("Handling 600 error");
  }

  const c1 = new Chain(error400);
  const c2 = new Chain(error500);
  const c3 = new Chain(error600);
  c1.setNextHandler(c2);
  c2.setNextHandler(c3);

  // Trigger error handling
  c1.passRequest({ code: 500 });  // Only 500 error handler should activate