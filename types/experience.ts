export interface Leadership {
    directPeopleManagement: boolean;
    technicalLeadership: boolean;
    teamsInfluenced: number;
    engineersImpacted: number;
    responsibilities: string[];
}

export interface Experience {
    company: string;
    role: string;
    location?: string;
    period: string;
    positioning: string;

    technologies?: string[];
    context?: string[];
    highlights: string[];
    metrics?: string[];
    themes?: string[];
    beforeAfter?: {
        before: string[];
        after: string[];
    };
    tradeoffs?: string[];
    leadership?: Leadership;
}