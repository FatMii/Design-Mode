public class NormalOrderProcessingStrategy implements OrderProcessingStrategy {
    @Override
    public void process(Order order) {
        System.out.println("处理普通订单：" + order.getId());
        // 普通订单处理逻辑
    }
}
