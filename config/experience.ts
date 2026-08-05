import { Experience } from "@/types/experience";

export const experienceData: Experience[] = [

    /* ===================== INDEPENDENT ===================== */

    {
        company: "micro1",
        role: "Senior Staff Engineer",
        location: "Remote",
        period: "Apr 2026 – Present",
        positioning: "AI-Native Enterprise Platform Architecture",

        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "GraphQL",
            "REST APIs",
            "Kafka",
            "Redis",
            "LLMs"
        ],

        highlights: [
            "Architected AI-native enterprise platforms integrating React, Node.js, and LLM-powered workflows for intelligent user experiences.",
            "Designed scalable backend architecture using Node.js, Express.js, REST APIs, and GraphQL supporting AI-powered enterprise applications.",
            "Established architecture governance across 15+ engineering teams covering API standards, dependency management, release processes, and engineering best practices.",
            "Designed event-driven architectures leveraging Kafka and Redis for asynchronous workflows and distributed caching.",
            "Built reusable platform components and AI-assisted engineering tooling that improved developer productivity and accelerated delivery.",
            "Mentored senior engineers on distributed systems, platform architecture, AI engineering, and frontend performance."
        ]
    },

    {
        company: "Celigo",
        role: "Senior Staff Frontend Engineer",
        location: "Remote",
        period: "Aug 2023 – Sep 2025",
        positioning: "Frontend Platform Architect",

        technologies: [
            "React",
            "TypeScript",
            "Module Federation",
            "Node.js",
            "Express.js",
            "REST",
            "GraphQL",
            "Kafka",
            "Redis",
            "AWS",
            "Docker"
        ],

        highlights: [
            "Led the transformation of a monolithic platform serving 11 business units into a Module Federation-based micro-frontend architecture, enabling independent deployments and autonomous team ownership.",
            "Architected the frontend platform using React, TypeScript, Module Federation, and shared runtime contracts, defining federation boundaries, dependency management, and remote module lifecycle strategies.",
            "Designed Backend-for-Frontend (BFF) services using Node.js, Express.js, REST APIs, and GraphQL, simplifying frontend integration and reducing service coupling.",
            "Implemented event-driven integration patterns using Kafka and Redis to support asynchronous workflows, distributed caching, and scalable enterprise communication.",
            "Collaborated with platform engineering teams to standardize AWS deployment architecture, Docker-based delivery pipelines, CI/CD automation, observability, and production monitoring.",
            "Reduced Core Web Vitals from 11s to 2.3s through bundle optimization, lazy hydration, route-level code splitting, runtime profiling, and dependency optimization.",
            "Reduced JavaScript bundle size by 58%, improving application startup performance and overall user experience across enterprise applications.",
            "Built a custom dependency orchestration framework that reduced runtime conflicts by 85% across independently deployed applications.",
            "Established engineering governance through ADRs, dependency policies, release standards, automated quality gates, and platform guardrails across six engineering teams.",
            "Partnered with UX and Product Design to build a design-token pipeline supporting multi-brand theming, runtime customization, accessibility, and consistent design systems.",
            "Mentored senior engineers on micro-frontends, distributed systems, API architecture, platform engineering, and frontend performance while leading architecture reviews across Frontend, Backend, DevOps, QA, Product, and Design."
        ]
    },

    {
        company: "Lowe's Companies, Inc.",
        role: "Technical Lead",
        location: "Bengaluru, India",
        period: "Aug 2021 – Apr 2023",
        positioning: "Enterprise Platform Modernization",

        highlights: [
            "Designed frontend platform architecture adopted across 17+ engineering squads, establishing reusable architectural standards for enterprise applications.",
            "Architected and developed Pharos, an enterprise Real User Monitoring (RUM) platform providing real-time n\
            visibility into Core Web Vitals and production health.",
            "Designed backend integration services using Node.js and Express.js to simplify enterprise API orchestration.",
            "Partnered with cloud engineering teams on AWS deployment architecture, Docker delivery pipelines, observability, and CI/CD automation.",
            "Led modernization initiatives generating approximately $1.6M in annual infrastructure savings through platform n\
            consolidation and performance optimization.",
            "Defined engineering governance covering dependency management, architecture reviews, release coordination, and n\
            long-term platform evolution."
        ]
    },

    /* ===================== UPSTOX ===================== */

    {
        company: "Upstox",
        role: "Staff Frontend Engineer",
        period: "2023",
        positioning: "Real-Time Trading Platform Architecture",

        context: [
            "Worked on high-frequency financial trading platform.",
            "UI required stable rendering under rapid market updates."
        ],

        highlights: [
            "Architected React UI handling high-frequency data streams.",
            "Optimized rendering pipelines for real-time updates.",
            "Reduced unnecessary re-renders via state isolation strategies."
        ],

        beforeAfter: {
            before: [
                "UI jitter under rapid market fluctuations.",
                "Latency impacting trader workflows."
            ],
            after: [
                "Stable rendering under volatile conditions.",
                "Sub-50ms interaction responsiveness."
            ]
        },

        metrics: [
            "Reduced interaction latency from ~450ms to <40ms.",
            "Improved rendering stability under peak trading conditions."
        ],

        tradeoffs: [
            "Accepted increased architectural complexity for deterministic rendering.",
            "Prioritized runtime performance over abstraction layers."
        ],

        themes: [
            "Low-latency UI engineering",
            "Real-time system architecture",
            "Performance-first frontend design"
        ]
    },

    /* ===================== LOWE'S ===================== */

    {
        company: "Lowe’s",
        role: "Lead Frontend Engineer",
        period: "2021 – 2023",
        positioning: "Enterprise Modernization & Micro-Frontend Adoption",

        context: [
            "Modernizing legacy enterprise frontend systems.",
            "Improving scalability and deployment independence."
        ],

        highlights: [
            "Led frontend modernization using React-based architecture.",
            "Adopted micro-frontend strategies to reduce coupling.",
            "Improved modularity and long-term maintainability."
        ],

        metrics: [
            "Reduced page load time from ~8s to ~2.5s.",
            "Improved cross-team development efficiency."
        ],

        themes: [
            "Enterprise modernization",
            "Micro-frontend transformation",
            "Frontend scalability strategy"
        ]
    },

    /* ===================== ITC INFOTECH ===================== */

    {
        company: "ITC Infotech",
        role: "Tech Lead – Frontend",
        period: "2018 – 2021",
        positioning: "Enterprise Platform Leadership",

        context: [
            "Led frontend initiatives across enterprise customer platforms."
        ],

        highlights: [
            "Redesigned frontend architecture for improved scalability.",
            "Modernized legacy systems into modular React architecture."
        ],

        themes: [
            "Platform standardization",
            "Frontend scalability",
            "Engineering leadership"
        ]
    },

    /* ===================== FOUNDATION YEARS ===================== */

    {
        company: "LeadVenture",
        role: "Senior Frontend Engineer",
        period: "2016 – 2018",
        positioning: "SaaS Platform Engineering",

        highlights: [
            "Built scalable SaaS frontend modules.",
            "Contributed to modular UI architecture evolution."
        ],

        themes: [
            "SaaS scalability",
            "Reusable component systems"
        ]
    },

    {
        company: "goIbibo",
        role: "Frontend Engineer",
        period: "2015 – 2016",
        positioning: "High-Traffic Consumer Travel Platform",

        highlights: [
            "Developed frontend systems used by millions of users.",
            "Contributed to production-grade consumer platform."
        ],

        themes: [
            "High-traffic frontend systems",
            "Consumer-scale engineering"
        ]
    },

    {
        company: "Tesco / Moonraft",
        role: "Frontend Engineer",
        period: "2012 – 2014",
        positioning: "Enterprise E-Commerce Platforms",

        highlights: [
            "Built enterprise-grade ecommerce frontends.",
            "Worked on scalable UI systems for large customer bases."
        ],

        themes: [
            "E-commerce systems",
            "Enterprise frontend engineering"
        ]
    }

];