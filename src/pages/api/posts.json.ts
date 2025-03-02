import { getCollection } from "astro:content";

export async function GET() {
    const posts = await getCollection("posts")

    return new Response(JSON.stringify(posts),
    {
        headers:{"Content-Type":"application/json"},
    });
}

