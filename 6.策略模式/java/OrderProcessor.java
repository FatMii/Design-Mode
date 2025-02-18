public class OrderProcessor {
    private OrderProcessingStrategy strategy;

    public OrderProcessor(OrderProcessingStrategy strategy) {
        this.strategy = strategy;
    }

    public void setStrategy(OrderProcessingStrategy strategy) {
        this.strategy = strategy;
    }

    public void process(Order order) {
        strategy.process(order);
    }
}
