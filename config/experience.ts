export const experienceData = [

    /* ===================== INDEPENDENT ===================== */

    {
        company: "AlgoDuel",
        role: "Senior Staff Engineer / UI Architect",
        period: "Oct 2025 – Present",
        positioning: "AI-Native Frontend Systems & Developer Tooling",

        context: [
            "Focused on AI-native frontend architecture and developer productivity systems.",
            "Exploring integration of LLM-based tooling into frontend engineering workflows."
        ],

        highlights: [
            "Engineering Excellence & Governance: Established RFC (Request for Comments) processes for frontend architectural changes, reducing technical debt and aligning cross-functional teams on long-term UI strategy.",
            "Performance at Scale: Optimized Core Web Vitals across enterprise platforms, achieving a 40% improvement in LCP (Largest Contentful Paint) through advanced code-splitting and asset prioritization strategies.",
            "Design Systems & Tooling: Architected a multi-brand, themeable design system using CSS Variables and Headless UI, reducing front-end development time for new features by 30%.",
            "Security & Compliance: Implemented automated security scanning for frontend dependencies and CSP (Content Security Policy) automation to mitigate XSS risks across micro-frontend micro-apps.",
            "AI Integration: Developed an automated UI testing suite leveraging LLMs to generate visual regression tests based on design-to-code diffs."
        ],

        themes: [
            'Scalable Micro-Frontend Governance: Moving beyond just "using" MFEs to governing how they interact, share state, and maintain version consistency.',
            "Declarative UI Engines: Building systems where UIs are driven by metadata or JSON schemas, allowing non-engineers to modify layouts without code deployments.",
            "Observability & Monitoring: Shifting from standard logging to deep frontend telemetry (tracking user flows, error boundaries, and client-side performance bottlenecks).",
            "Local-First & Offline Architectures: Implementing sophisticated caching and synchronization layers (like IndexedDB or CRDTs) for high-performance, real-time applications.",
            "DX (Developer Experience) Automation: Creating custom CLI tools, scaffolding engines, or CI/CD pipelines specifically tuned for frontend monorepos."
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
        ],

        leadership: {
            directPeopleManagement: true,
            technicalLeadership: true,
            teamsInfluenced: 11,
            engineersImpacted: 110,
            responsibilities: [
                "Mentored engineers across teams.",
                "Influenced architectural decisions across multiple organisations.",
                "Facilitated inter-team architecture sync meetings.",
                "Provided technical direction and delivery oversight.",
                "Contributed to governance and performance accountability."
            ]
        },
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