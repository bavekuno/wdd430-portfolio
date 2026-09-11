export interface Typeface {
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
    letterSpacing: string;
}

interface SkillCardProps {
    title: string;
    skills: string[];
    typeface: Typeface;
}

export default function SkillCard({ title, skills, typeface }: SkillCardProps) {
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden hover:shadow-lg hover:shadow-slate-200/80 hover:border-blue-300 transition-all duration-300">
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 px-6 py-4">
                <h3
                    className="text-white"
                    style={{
                        fontFamily: typeface.fontFamily,
                        fontWeight: typeface.fontWeight,
                        fontSize: typeface.fontSize,
                        letterSpacing: typeface.letterSpacing,
                    }}
                >
                    {title}
                </h3>
            </div>
            <div className="p-6">
                <ul className="space-y-3">
                    {skills.map((skill, index) => (
                        <li key={index} className="flex items-center">
                            <span className="flex-shrink-0 w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
                            <span className="text-slate-700">{skill}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
