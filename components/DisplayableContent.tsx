interface DisplayableContentProps {
    title: string;
    description: string;
    children?: React.ReactNode;
}

export default function DisplayableContent({
    title,
    description,
    children,
}: DisplayableContentProps) {
    return (
        <section className="relative bg-[#0f172a] border-y border-white/5">
            <div className="max-w-6xl mx-auto px-6 py-28">

                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Left Column */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                            {title}
                        </h2>

                        <p className="mt-6 text-white/60 text-lg max-w-xl">
                            {description}
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {children}
                    </div>

                </div>

            </div>
        </section>
    );
}