import { Publisher, Subjects, TicketCreatedEvent } from "@zotijstickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
