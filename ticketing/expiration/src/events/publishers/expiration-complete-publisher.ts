import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@zotijstickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
