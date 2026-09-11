export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-6 mt-16 border-t border-slate-800">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm">Copyright &copy; {new Date().getFullYear()} | Brian Bavekuno | All rights reserved</p>
            </div>
        </footer>
    );
}