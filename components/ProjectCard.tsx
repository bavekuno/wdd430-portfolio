interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
    return (
        <article className="p-6 border-l-4 border-blue-700 bg-slate-50 rounded-lg hover:bg-white hover:shadow-md hover:shadow-slate-200/80 hover:border-blue-800 transition-all duration-200">
            <h3 className="text-xl font-bold mb-2 text-slate-900">{title}</h3>
            <p className="text-slate-700 mb-3 leading-relaxed">{description}</p>
            <p className="text-sm text-slate-600">
                <strong className="text-slate-800">Technologies:</strong> {technologies.join(', ')}
            </p>
            {link && (
                <p className="mt-3">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">View Project →</a>
                </p>
            )}
        </article>
    );
}