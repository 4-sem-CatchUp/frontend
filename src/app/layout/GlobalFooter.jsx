import React from "react";
import GradientDivider from "../../components/ui/FooterTopDivider";
import { Github } from "lucide-react";

export default function GlobalFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-stone-50 dark:bg-gray-900">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600" />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left side: logo + catchup name */}
          <div className="flex items-center space-x-3">
            {/* Placeholder logo */}
            <div className="w-8 h-8 bg-stone-50 rounded-full flex items-center justify-center text-gray-900 font-bold">
              C
            </div>
            <span className="text-3xl font-bold font-heading text-gray-900 dark:text-stone-50">
              CatchUp
            </span>
          </div>

          {/* Right side: nav links */}
          <ul className="flex space-x-6 text-sm text-gray-900 dark:text-stone-50">
            <li>
              <a href="/about" className="hover:text-sky-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="/help" className="hover:text-sky-500 transition">
                Help / FAQ
              </a>
            </li>
            <li>
              <a href="/guidelines" className="hover:text-sky-500 transition">
                Community Guidelines
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-sky-500 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-sky-500 transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/docs" className="hover:text-sky-500 transition">
                Docs
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yourrepo"
                className="hover:text-sky-500 transition"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Second Row – left/right aligned */}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 items-center text-sm">
          {/* Left aligned */}
          <div className="text-left text-xs opacity-70 text-gray-900 dark:text-stone-50">
            Insert Dark/Light mode Toggle here + social icons
          </div>

          {/* Centered */}
          <div className="text-center text-xs opacity-70 text-gray-900 dark:text-stone-50">
            Made with ❤️ in React
          </div>

          {/* Right aligned */}
          <div className="text-right text-xs opacity-70 text-gray-900 dark:text-stone-50">
            Copyright &copy; {year} CatchUp
          </div>
        </div>
      </div>
    </footer>
  );
}
