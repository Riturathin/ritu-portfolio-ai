export const experienceData = [

    /* ===================== INDEPENDENT ===================== */

    {
        company: "Independent",
        role: "Independent Staff Frontend Engineer",
        period: "Sep 2025 – Present",
        positioning: "AI-Native Frontend Systems & Developer Tooling",

        context: [
            "Focused on AI-native frontend architecture and developer productivity systems.",
            "Exploring integration of LLM-based tooling into frontend engineering workflows."
        ],

        highlights: [
            "Architected AI Code Assistant leveraging repository context and architectural metadata.",
            "Built AI-powered React experimentation platform for validating architectural patterns.",
            "Designed micro-frontend sandbox systems for runtime isolation experimentation.",
        ],

        themes: [
            "AI-native frontend systems",
            "Developer tooling automation",
            "Micro-frontend experimentation",
        ]
    },

    /* ===================== CELIGO ===================== */

    {
        company: "Celigo",
        role: "Senior Staff Frontend Engineer",
        period: "2023 – Sep 2025",
        positioning: "Frontend Platform Architect — Enterprise Integration Platform",

        context: [
            "Governed frontend architecture across 11 repositories and ~110 engineers.",
            "Flagship product: integrator.io — enterprise integration platform.",
            "Performance degradation observed as customer integration graphs scaled."
        ],

        highlights: [
            "Designed Module Federation-based micro-frontend architecture (host/container via remote.js).",
            "Converted monolithic routes into independently deployable MFEs.",
            "Built new MFEs from scratch: data-ingestion, marketplace-ui, login-ui.",
            "Reduced bundle size through route-level lazy loading and Suspense boundaries.",
            "Implemented frontend observability using LogRocket session tracing.",
            "Introduced SonarQube rules, GitHub pre/post-commit hooks, and autopilot quality checks.",
            "Defined Architectural Decision Guidelines (ADGs) across 11 repos.",
            "Integrated AI-powered customer assistant within platform workflows."
        ],

        governance: [
            "Established repo ownership boundaries across teams.",
            "Enforced performance budgets and bundle thresholds.",
            "Implemented canary deployment gating for controlled rollout.",
            "Organized inter-team architectural sync sessions."
        ],

        beforeAfter: {
            before: [
                "Release coupling across repos.",
                "High latency under scaling integration graphs.",
                "Architectural drift and inconsistent standards."
            ],
            after: [
                "Independent micro-frontend deployments.",
                "Structured governance and domain ownership.",
                "Improved stability and deployment frequency."
            ]
        },

        metrics: [
            "2× increase in deployment frequency.",
            "47% reduction in production defects.",
            "Significant latency reduction under high-scale usage."
        ],

        tradeoffs: [
            "Prioritized long-term architectural integrity over short-term velocity.",
            "Restricted pilot users via canary deployment to protect performance."
        ],

        themes: [
            "Platform governance",
            "Micro-frontend system design",
            "Enterprise performance engineering",
            "AI-integrated frontend systems"
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