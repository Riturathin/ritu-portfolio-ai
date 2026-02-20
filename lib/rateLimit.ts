const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

export function checkRateLimit(ip: string) {
    const now = Date.now();
    const windowSize = 60 * 1000; // 1 minute
    const maxRequests = 8;

    const entry = rateLimitMap.get(ip);

    if (!entry) {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
        return true;
    }

    if (now - entry.timestamp > windowSize) {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
        return true;
    }

    if (entry.count < maxRequests) {
        entry.count++;
        return true;
    }

    return false;
}
