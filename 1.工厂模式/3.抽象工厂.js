// 抽象类 UIComponentFactory，使用错误抛出来模拟抽象方法
class UIComponentFactory {
    createButton() {
        throw new Error("This method should be implemented by subclasses");
    }

    createDialog() {
        throw new Error("This method should be implemented by subclasses");
    }
}

// 具体工厂 WindowsFactory
class WindowsFactory extends UIComponentFactory {
    createButton() {
        return new WindowsButton();
    }

    createDialog() {
        return new WindowsDialog();
    }
}

// 具体工厂 MacOSFactory
class MacOSFactory extends UIComponentFactory {
    createButton() {
        return new MacOSButton();
    }

    createDialog() {
        return new MacOSDialog();
    }
}

// 抽象产品类 Button
class Button {
    click() {
        throw new Error("This method should be implemented by subclasses");
    }
}

// 具体产品 WindowsButton
class WindowsButton extends Button {
    click() {
        console.log("You clicked a Windows style button!");
    }
}

// 具体产品 MacOSButton
class MacOSButton extends Button {
    click() {
        console.log("You clicked a MacOS style button!");
    }
}

// 抽象产品类 Dialog
class Dialog {
    open() {
        throw new Error("This method should be implemented by subclasses");
    }
}

// 具体产品 WindowsDialog
class WindowsDialog extends Dialog {
    open() {
        console.log("Opening a Windows style dialog!");
    }
}

// 具体产品 MacOSDialog
class MacOSDialog extends Dialog {
    open() {
        console.log("Opening a MacOS style dialog!");
    }
}

// 使用抽象工厂
function application(factory) {
    const button = factory.createButton();
    const dialog = factory.createDialog();

    button.click();
    dialog.open();
}

// 创建具体的工厂实例
const windowsFactory = new WindowsFactory();
const macosFactory = new MacOSFactory();

// 根据当前平台运行应用程序
console.log("Test Windows UI:");
application(windowsFactory);

console.log("\nTest MacOS UI:");
application(macosFactory);
