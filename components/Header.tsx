import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-slate-900 text-white py-4 shadow-lg border-b border-slate-800">
            <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
                <div id="header-title" className="text-2xl font-bold tracking-tight min-w-0 truncate">Brian Bavekuno</div>
                <nav className="hidden md:block" aria-label="Main navigation">
                    <ul className="flex gap-6">
                        <li><Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/about" className="text-slate-300 hover:text-white transition-colors">About</Link></li>
                    </ul>
                </nav>
                <details className="md:hidden">
                    <summary className="list-none p-2 cursor-pointer text-slate-300 hover:text-white transition-colors" aria-label="Toggle navigation menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </summary>
                    <nav aria-label="Mobile navigation" className="mt-2 pb-4 border-t border-slate-700 pt-4">
                        <ul className="flex flex-col gap-4">
                            <li><Link href="/" className="block text-slate-300 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="block text-slate-300 hover:text-white transition-colors">About</Link></li>
                        </ul>
                    </nav>
                </details>
            </div>
        </header>
    );
}