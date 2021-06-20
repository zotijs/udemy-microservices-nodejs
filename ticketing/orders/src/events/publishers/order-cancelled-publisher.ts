import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@zotijstickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
