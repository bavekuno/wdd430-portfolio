import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A full-stack Next.js app for managing products.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/bavekuno/project1'
  },
  {
    title: 'Weather Application',
    description: 'A React app that fetches and displays weather data.',
    technologies: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/bavekuno/project2'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="text-center py-12 md:py-16 bg-white border-b border-slate-200">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">My Portfolio</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto px-4">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <ProjectList projects={projects} />
      </div>
    </main>
  );
}