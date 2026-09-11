import SkillCard, { Typeface } from '@/components/SkillCard';

const typeface: Typeface = {
    fontFamily: 'system-ui, sans-serif',
    fontWeight: '700',
    fontSize: '1.25rem',
    letterSpacing: '0.025em',
};

const skills = {
    'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    'Backend': ['Node.js', 'Express', 'Python', 'PostgreSQL'],
    'Tools': ['Git', 'VS Code', 'Figma', 'Docker'],
};

export default function About() {
    return (
        <main className="min-h-screen bg-slate-900">
            <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-lg text-slate-200 mb-10">
                This about page shares more information about my background and work.
            </p>

            <h3 className="text-2xl font-semibold mb-6 text-white">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                    <SkillCard
                        key={category}
                        title={category}
                        skills={skillList}
                        typeface={typeface}
                    />
                ))}
            </div>
            </div>
        </main>
    );
}
