export async function onRequestGet(context) {
  const { env, waitUntil } = context;

  const measurementId = env.GA4_MEASUREMENT_ID;
  const apiSecret = env.GA4_API_SECRET;
  const clientId = crypto.randomUUID();

  const payload = {
    client_id: clientId,
    events: [
      {
        name: "email_open",
        params: {
          source: "signature",
          medium: "email",
          campaign: "prospection",
        },
      },
    ],
  };

  const sendToGA4 = fetch(
    `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
    {
      method: "POST",
      body: JSON.stringify(payload),
    }
  );

  waitUntil(sendToGA4);

  const pixel = Uint8Array.from(
    atob("R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="),
    (c) => c.charCodeAt(0)
  );

  return new Response(pixel, {
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "Pragma": "no-cache",
    },
  });
}
