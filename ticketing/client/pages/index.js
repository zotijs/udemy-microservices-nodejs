import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => (
  <h1>{currentUser ? "You are signed in" : "You are not signed in"}</h1>
);

LandingPage.getInitialProps = async (context) => {
  console.log("Landing Page getInitialProps");
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");

  return data;
};

export default LandingPage;
