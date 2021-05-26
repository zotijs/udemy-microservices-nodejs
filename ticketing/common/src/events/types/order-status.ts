export enum OrderStatus {
  // order created, ticket not reserved
  Created = "created",
  // ticket already reserved or the user cancelled the order, or order expires before payment
  Cancelled = "cancelled",
  // succesfully reserved the ticket
  AwaitingPayment = "awaiting:payment",
  // order reserved the ticket and user has payed
  Complete = "complete",
}
