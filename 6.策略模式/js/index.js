class ValidationStrategy {
  validate(value) {
    throw new Error("校验方法未实现！");
  }
}

class UsernameValidationStrategy extends ValidationStrategy {
  validate(value) {
    if (!value) {
      throw new Error("用户名不能为空！");
    }
    if (value.length < 3) {
      throw new Error("用户名长度不能小于3位！");
    }
    return true;
  }
}

class PasswordValidationStrategy extends ValidationStrategy {
  validate(value) {
    if (!value) {
      throw new Error("密码不能为空！");
    }
    if (value.length < 6) {
      throw new Error("密码长度不能小于6位！");
    }
    return true;
  }
}

class EmailValidationStrategy extends ValidationStrategy {
  validate(value) {
    if (!value) {
      throw new Error("邮箱不能为空！");
    }
    if (!/^\w+@\w+.\w+$/.test(value)) {
      throw new Error("邮箱格式不正确！");
    }
    return true;
  }
}

class FormValidator {
  constructor() {
    this.strategies = {};
  }

  addStrategy(field, strategy) {
    this.strategies[field] = strategy;
  }

  validate(form) {
    for (const field in form) {
      if (this.strategies[field]) {
        try {
          this.strategies[field].validate(form[field]);
        } catch (error) {
          console.error(`字段 ${field} 校验失败：${error.message}`);
          return false;
        }
      }
    }
    console.log("表单校验通过！");
    return true;
  }
}

// 创建具体策略
const usernameStrategy = new UsernameValidationStrategy();
const passwordStrategy = new PasswordValidationStrategy();
const emailStrategy = new EmailValidationStrategy();

// 创建表单校验器并添加策略
const formValidator = new FormValidator();
formValidator.addStrategy("username", usernameStrategy);
formValidator.addStrategy("password", passwordStrategy);
formValidator.addStrategy("email", emailStrategy);

// 测试表单校验
const form = {
  username: "kimi",
  password: "123456",
  email: "kimi@moonshot.cn",
};

formValidator.validate(form); // 输出：表单校验通过！

// 如果某个字段不符合规则
const invalidForm = {
  username: "ki", // 用户名长度小于3位
  password: "123456",
  email: "kimi@moonshot.cn",
};

formValidator.validate(invalidForm); // 输出：字段 username 校验失败：用户名长度不能小于3位！
