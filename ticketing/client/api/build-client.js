import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // We are on the server

    // TODO: use process.env for the domain change
    return axios.create({
      // baseURL:
      //   'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      baseURL: "http://www.zotijs.me/",
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: "/",
    });
  }
};
