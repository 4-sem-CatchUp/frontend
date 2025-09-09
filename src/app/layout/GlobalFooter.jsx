import React from "react";

export default function GlobalFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-stone-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* First Row – 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h2 className="text-2xl pb-5">CatchUp</h2>
            <p>
              CatchUp — a decentralized social media platform built for
              community and control.
            </p>
          </div>
          <div>
            <h2 className="text-2xl pb-5">Links</h2>
            <p>About</p>
            <p>Help / FAQ</p>
            <p>Back To Top</p>
          </div>
          <div>
            <h2 className="text-2xl pb-5">Resources</h2>
            <p>Docs</p>
            <p>Blog</p>
          </div>
          <div>
            <h2 className="text-2xl pb-5">Credits</h2>
            <p>Made with ❤️ in React</p>
            <p>by Bo & Burak</p>
          </div>
        </div>

        {/* Second Row – left/right aligned */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>Insert Dark/Light mode Toggle here</p>
          <p>Copyright &copy; {year} CatchUp</p>
        </div>
      </div>
    </footer>
  );
}
