import { Publisher, OrderCreatedEvent, Subjects } from "@zotijstickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
