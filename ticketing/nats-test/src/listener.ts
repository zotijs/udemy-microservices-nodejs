import nats, { Message } from "node-nats-streaming";
import { randomBytes } from "crypto";

console.clear();

const stan = nats.connect("ticketing", randomBytes(4).toString("hex"), {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Listener connected to NATS");

  stan.on("close", () => {
    console.log("NATS connection closed");
    process.exit();
  });
  // setting options for subscription
  const options = stan
    .subscriptionOptions()
    .setManualAckMode(true) // manual acknowledgment
    .setDeliverAllAvailable() // make sure that when the subscription is created NATS delivers all the past events (just the very first time)
    .setDurableName("orders-service"); // makes sure that failed events will be redelivered

  const subscription = stan.subscribe(
    "ticket:created",
    "orders-service-queue-group", // queue group tells NATS not to dump the durable events
    options
  );

  subscription.on("message", (msg: Message) => {
    const data = msg.getData();

    if (typeof data === "string") {
      console.log(
        `Received event number: ${msg.getSequence()}, with data: ${data}`
      );
    }

    msg.ack();
  });
});

// close NATS client on SIGINT, SIGTERM
process.on("SIGINT", () => stan.close());
process.on("SIGTERM", () => stan.close());
