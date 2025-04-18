import { Hono } from 'hono'

const app = new Hono()
      
app.get('/', (c) => {
  let eventId = "aws-hackday-04-22-2025";
  const token = "foo";

  const payload = {
    "url": "https://lu.ma/aws-hackday-04-22-2025"
  };

  let searchParams = new URLSearchParams(payload);

  return fetch("https://api.diffbot.com/v3/event?token=" + token + "&" + searchParams.toString(), {
    method: 'GET',
    headers: {}
  })
  .then((response) => response.json())
  .then((result) => {
    return c.json(result);  // Return the JSON result to the client
  })
  .catch((error) => {
    console.error(error);
    return c.json({ error: "Failed to fetch data" }, 500);
  });
});

export default app
