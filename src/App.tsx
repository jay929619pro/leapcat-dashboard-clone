import { useEffect, useState } from "react";
import { type PageKey, pageTitles } from "./app-data";
import { AmbientGlow, DesktopHeader, MobileTabBar, PageLead, parseHash } from "./app-shell";
import { AiPage, AssetsPage, HomePage, IpoPage, ProfilePage } from "./pages";

function renderPage(page: PageKey) {
  switch (page) {
    case "ipo":
      return <IpoPage />;
    case "ai":
      return <AiPage />;
    case "assets":
      return <AssetsPage />;
    case "profile":
      return <ProfilePage />;
    case "home":
    default:
      return <HomePage />;
  }
}

function App() {
  const [page, setPage] = useState<PageKey>(() => parseHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => setPage(parseHash(window.location.hash));
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    document.title = `Leapcat Dashboard Clone - ${pageTitles[page]}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="min-h-screen bg-[var(--surface-1)] text-[var(--text-primary)]">
      <AmbientGlow />
      <DesktopHeader currentPage={page} />
      <main className="relative mx-auto max-w-5xl px-5 pb-28 pt-7 lg:px-8 lg:py-8">
        <PageLead currentPage={page} />
        {renderPage(page)}
      </main>
      <MobileTabBar currentPage={page} />
    </div>
  );
}

export default App;
