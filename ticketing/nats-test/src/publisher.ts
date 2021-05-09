import nats from "node-nats-streaming";

console.clear();

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

stan.on("connect", () => {
  console.log("Publisher connected to NATS");

  const data = JSON.stringify({
    id: "123",
    title: "concert",
    price: 20,
  });

  // all data before send to NATS streaming server need to be stringified
  stan.publish("ticket:created", data, () => {
    console.log("Event published!");
  });
});
