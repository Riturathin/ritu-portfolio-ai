import OpenAI from "openai";
import { NextResponse } from "next/server";
import { experienceData } from "@/config/experience";
import { checkRateLimit } from "@/lib/rateLimit";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Precompute total experience
function calculateTotalExperience() {
    return "13+ years"; // keep deterministic for portfolio
}

// Build full portfolio context
function buildPortfolioContext() {
    let text = `
PORTFOLIO SUMMARY
Total Professional Experience: ${calculateTotalExperience()}

`;

    experienceData.forEach((exp) => {
        text += `
========================================
COMPANY: ${exp.company}
ROLE: ${exp.role}
PERIOD: ${exp.period}
POSITIONING: ${exp.positioning}

ARCHITECTURAL CONTRIBUTIONS:
${exp.highlights?.map((h) => `- ${h}`).join("\n")}

`;

        if (exp.metrics?.length) {
            text += `
MEASURABLE IMPACT:
${exp.metrics.map((m) => `- ${m}`).join("\n")}

`;
        }

        if (exp.leadership) {
            text += `
LEADERSHIP SCOPE:
- Direct People Management: ${exp.leadership.directPeopleManagement}
- Technical Leadership: ${exp.leadership.technicalLeadership}
- Teams Influenced: ${exp.leadership.teamsInfluenced}
- Engineers Impacted: ${exp.leadership.engineersImpacted}
${exp.leadership.responsibilities
                    ?.map((r) => `- ${r}`)
                    .join("\n")}

`;
        }

        text += `
TECHNOLOGY THEMES:
${exp.themes?.map((t) => `- ${t}`).join("\n")}
`;
    });

    return text;
}

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

        const context = buildPortfolioContext();

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.2,
            messages: [
                {
                    role: "system",
                    content: `
You are an AI assistant for Ritu's portfolio website.

STRICT RULES:
- Answer ONLY using the provided context.
- If information is not in context, say "This information is not available."
- Always refer to Ritu as "He".
- If multiple questions are asked, answer each separately.
- Format exactly like this:

**<Question>**

**Answer:**
- bullet point
- bullet point

Be concise.
Be recruiter-friendly.
Do not speculate.

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