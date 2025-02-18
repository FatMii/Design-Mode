public class GroupOrderProcessingStrategy implements OrderProcessingStrategy {
    @Override
    public void process(Order order) {
        System.out.println("处理团购订单：" + order.getId());
        // 团购订单处理逻辑
    }
}