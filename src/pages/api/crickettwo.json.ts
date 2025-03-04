// src/pages/api/cricket.json.ts
import fs from "fs";
import Papa from "papaparse";

export async function GET() {
  const csvFile = fs.readFileSync("public/cricket.csv", "utf-8");
  const jsonData = Papa.parse(csvFile, { header: true }).data;
  
  return new Response(JSON.stringify(jsonData), {
    headers: { "Content-Type": "application/json" },
  });
}

