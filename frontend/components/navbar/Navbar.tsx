import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white/80 px-8 py-4 backdrop-blur-md">
      <Link
        href="/"
        className="text-2xl font-bold text-blue-600"
      >
        FixFlow AI
      </Link>

      <div className="flex items-center gap-6 font-medium text-slate-600">

        <Link
          href="#how-it-works"
          className="transition-colors hover:text-blue-600"
        >
          How It Works
        </Link>

        <Link
          href="#ai-features"
          className="transition-colors hover:text-blue-600"
        >
          AI Features
        </Link>

        <Link
          href="#contact"
          className="transition-colors hover:text-blue-600"
        >
          Contact
        </Link>

        <Link
          href="/signup"
          className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600/20"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}