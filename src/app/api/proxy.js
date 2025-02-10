export default async function handler(req, res) {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  
    try {
      const response = await fetch("https://your-api.com/endpoint", {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      });
  
      const data = await response.json();
      return res.status(200).json(data);
    } catch {
      return res.status(500).json({ error: "Failed to fetch data" });
    }
  }
  