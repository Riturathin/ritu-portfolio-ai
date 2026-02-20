import OpenAI from "openai";
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { checkRateLimit } from "@/lib/rateLimit";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { question } = await req.json();

        const ip = req.headers.get("x-forwarded-for") || "unknown";
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        // 1️⃣ Create embedding for question
        const embeddingResponse = await openai.embeddings.create({
            model: "text-embedding-3-small",
            input: question,
        });

        const queryEmbedding = embeddingResponse.data[0].embedding;

        // 2️⃣ Retrieve similar documents
        const { data: documents, error } = await supabase.rpc(
            "match_documents",
            {
                query_embedding: queryEmbedding,
                match_count: 10,
            }
        );

        if (error) {
            console.error(error);
            return NextResponse.json(
                { error: "Vector search failed" },
                { status: 500 }
            );
        }

        const context = documents
            ?.map((doc: any) => doc.content)
            .join("\n\n");

        // 3️⃣ Generate answer using retrieved context
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.3,
            messages: [
                {
                    role: "system",
                    content: `
You are an AI assistant for Ritu's portfolio website.

STRICT RULES:
- Answer ONLY using the provided context.
- If information is not in context, say "This information is not available."
- If multiple questions are asked, answer each separately and bold the question in the answer with 16px.
- Highlight the impact point values in bold.
- Add a dashed divider between answers for multiple questions.
- Always refer to Ritu as "He".
- For each question:
- Format exactly like this:

**<Question>**

**Answer:**
- bullet point
- bullet point
- Format like:

**<Question>**

**Answer:**
- bullet points
- Be concise.
- Be recruiter-friendly.
- Do not speculate.

CONTEXT:
${context}
`
                },
                {
                    role: "user",
                    content: question,
                },
            ],
        });

        return NextResponse.json({
            answer: completion.choices[0].message.content,
        });
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}