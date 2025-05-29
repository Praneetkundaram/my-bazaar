// In your main layout or page component (e.g., `App` or `Layout`)

import Footer from "./page";

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-700 text-white p-4">Header</header>

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}