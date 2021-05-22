import { Publisher, Subjects, TicketUpdatedEvent } from "@zotijstickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
