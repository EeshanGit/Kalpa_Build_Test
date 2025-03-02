import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export async function GET() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, "public/cricket.csv");
  try {
    const csvData = fs.readFileSync(filePath, "utf-8");

    const rows = csvData.split("\n").slice(1);
    const data = rows.map(row => {
      const [number, teamA, teamB,scoreA,scoreB,ovA,ovB,result,winBy,date,href] = row.split(",");
      return {number,teamA,teamB,scoreA,scoreB,ovA,ovB,result,winBy,date,href};
    });

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to load CSV" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
