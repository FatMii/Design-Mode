public class VipOrderProcessingStrategy implements OrderProcessingStrategy {
    @Override
    public void process(Order order) {
        System.out.println("处理会员订单：" + order.getId());
        // 会员订单处理逻辑
    }
}
