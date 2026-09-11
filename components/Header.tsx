import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-slate-900 text-white py-4 shadow-lg border-b border-slate-800">
            <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
                <div id="header-title" className="text-2xl font-bold tracking-tight">Brian Bavekuno</div>
                <nav>
                    <ul className="flex gap-6">
                        <li><Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/about" className="text-slate-300 hover:text-white transition-colors">About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}