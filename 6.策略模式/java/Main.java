public class Main {
    public static void main(String[] args) {
        // 创建具体策略
        OrderProcessingStrategy normalStrategy = new NormalOrderProcessingStrategy();
        OrderProcessingStrategy vipStrategy = new VipOrderProcessingStrategy();
        OrderProcessingStrategy groupStrategy = new GroupOrderProcessingStrategy();

        // 创建订单处理器并设置初始策略
        OrderProcessor processor = new OrderProcessor(normalStrategy);

        // 创建订单
        Order normalOrder = new Order("normal", 1);
        Order vipOrder = new Order("vip", 2);
        Order groupOrder = new Order("group", 3);

        // 处理订单
        processor.process(normalOrder); // 输出：处理普通订单：1

        // 动态切换策略
        processor.setStrategy(vipStrategy);
        processor.process(vipOrder); // 输出：处理会员订单：2

        processor.setStrategy(groupStrategy);
        processor.process(groupOrder); // 输出：处理团购订单：3
    }
}
