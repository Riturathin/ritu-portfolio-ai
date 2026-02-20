import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { supabase } from "./supabase";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const CONTENT_DIR = path.join(process.cwd(), "content");

function chunkText(text: string) {
    return text
        .split("\n## ")
        .map((section, index) =>
            index === 0 ? section : "## " + section
        );
}

export async function ingestContent() {
    const files = fs.readdirSync(CONTENT_DIR);

    for (const file of files) {
        const filePath = path.join(CONTENT_DIR, file);
        const content = fs.readFileSync(filePath, "utf-8");

        const chunks = chunkText(content);

        for (const chunk of chunks) {
            const embeddingResponse = await openai.embeddings.create({
                model: "text-embedding-3-small",
                input: chunk,
            });

            const embedding = embeddingResponse.data[0].embedding;

            await supabase.from("documents").insert({
                content: chunk,
                metadata: { source: file },
                embedding,
            });
        }
    }

    console.log("Ingestion complete");
}