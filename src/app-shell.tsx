import { type ReactNode } from "react";
import { navItems, pageTitles, type PageKey, type Shortcut } from "./app-data";

export function parseHash(hash: string): PageKey {
  const normalized = hash.replace(/^#\/?/, "").trim();
  if (normalized === "ipo") return "ipo";
  if (normalized === "ai") return "ai";
  if (normalized === "assets") return "assets";
  if (normalized === "profile") return "profile";
  return "home";
}

export function pageHref(page: PageKey): string {
  return page === "home" ? "#/" : `#/${page}`;
}

export function DashboardHeader({ currentPage }: { currentPage: PageKey }) {
  return (
    <header className="sticky top-0 z-50 hidden border-b border-[var(--border)] bg-[rgba(255,255,255,0.82)] backdrop-blur-xl lg:block">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
        <a className="flex items-center gap-3 font-semibold tracking-[-0.03em]" href={pageHref("home")}>
          <LogoMark />
          <span className="text-lg">LeapCat</span>
        </a>

        <nav className="ml-10 flex items-center gap-1">
          {navItems.slice(0, 4).map((item) => (
            <a
              key={item.key}
              className={
                currentPage === item.key
                  ? "rounded-xl bg-[var(--brand-50)] px-4 py-2 text-sm font-semibold text-[var(--brand-dark)] transition"
                  : "rounded-xl px-4 py-2 text-sm font-semibold text-[var(--text-secondary)] transition hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)]"
              }
              href={pageHref(item.key)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4 text-sm text-[var(--text-secondary)]">
          <button className="font-semibold transition hover:text-[var(--brand-dark)]" type="button">
            HK 繁中
          </button>
          <CircleButton ariaLabel="Notifications">
            <BellIcon />
          </CircleButton>
          <a
            className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-white px-2 py-1.5 shadow-[0_10px_24px_rgba(16,24,18,0.04)] transition hover:border-[rgba(48,183,100,0.25)]"
            href={pageHref("profile")}
          >
            <Avatar />
            <span className="font-semibold text-[var(--text-primary)]">harrywork987@outlook.com</span>
            <span className="text-xs">▾</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export function PublicHeader({ currentPage }: { currentPage: PageKey }) {
  return (
    <header className="sticky top-0 z-50 hidden border-b border-[var(--border)] bg-white/96 backdrop-blur-lg lg:block">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
        <a className="flex items-center gap-3" href={pageHref("home")}>
          <img alt="Leapcat" className="h-8" src="/assets/logo-hor-light.svg" />
        </a>

        <nav className="ml-8 flex items-center gap-1">
          {navItems.slice(0, 4).map((item) => (
            <a
              key={item.key}
              className={
                currentPage === item.key
                  ? "rounded-lg bg-[var(--brand-50)] px-4 py-2 text-sm font-medium text-[var(--brand-dark)] transition"
                  : "rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)]"
              }
              href={pageHref(item.key)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <button className="flex h-9 items-center gap-1 rounded-lg px-2 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--surface-2)]" type="button">
            <span>🇭🇰</span>
            <span>繁中</span>
          </button>
          <a
            className="rounded-full bg-[var(--brand-light)] px-4 py-2 text-sm font-semibold text-[#1d231f] transition hover:brightness-95"
            href={pageHref("profile")}
          >
            登入
          </a>
        </div>
      </div>
    </header>
  );
}

export function PageLead({ currentPage }: { currentPage: PageKey }) {
  const descriptions: Record<PageKey, string> = {
    home: "儀表盤概覽，快速查看資產、熱門打新與市場入口。",
    ipo: "集中查看招股節奏、熱門標的與申購時間窗。",
    ai: "把策略、風險與市場信號整理成可執行的 AI 建議。",
    assets: "用更清晰的結構檢視總資產、倉位分布與資金活動。",
    profile: "管理身份驗證、通知偏好、安全設定與帳戶資料。",
  };

  return (
    <section className="mb-6 lg:mb-8">
      <div className="hidden items-baseline gap-1.5 text-sm font-medium text-[var(--text-secondary)] lg:flex">
        <span className="tracking-[0.18em]">晚安，</span>
        <span className="text-[var(--text-primary)]">harrywork987@outlook.com</span>
        <span className="rounded-full bg-[var(--brand-50)] px-2 py-0.5 text-xs text-[var(--brand-dark)]">
          {pageTitles[currentPage]}
        </span>
      </div>

      <div className="flex items-start justify-between lg:hidden">
        <div className="space-y-1">
          <p className="text-sm font-medium text-[var(--text-secondary)]">晚安</p>
          <h1 className="text-[1.78rem] font-extrabold tracking-[-0.04em]">{pageTitles[currentPage]}</h1>
          <p className="max-w-[22rem] text-sm text-[var(--text-secondary)]">{descriptions[currentPage]}</p>
        </div>
        <div className="flex items-center gap-2">
          <CircleButton ariaLabel="Notifications">
            <BellIcon />
          </CircleButton>
          <Avatar />
        </div>
      </div>
    </section>
  );
}

export function MobileTabBar({ currentPage }: { currentPage: PageKey }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-[rgba(255,255,255,0.95)] px-3 py-2 backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-lg items-end justify-around px-2 pb-1 pt-2">
        {navItems.map((item) => {
          const active = currentPage === item.key;
          return (
            <a
              key={item.key}
              className={
                active
                  ? "flex flex-col items-center gap-1 px-3 py-1 text-[11px] font-semibold text-[var(--brand-dark)]"
                  : "flex flex-col items-center gap-1 px-3 py-1 text-[11px] font-semibold text-[var(--text-tertiary)] transition hover:text-[var(--text-primary)]"
              }
              href={pageHref(item.key)}
            >
              <span
                className={
                  active
                    ? "grid h-10 w-10 place-items-center rounded-full bg-[radial-gradient(circle_at_50%_35%,#d7ffb7_0%,#98df6a_50%,#5dc756_100%)] text-sm text-[#244c29] shadow-[0_12px_20px_rgba(100,209,88,0.24)]"
                    : "text-base"
                }
              >
                {item.icon}
              </span>
              <span>{item.mobileLabel ?? item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export function AmbientGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-[-10%] top-[-8%] h-72 w-72 rounded-full bg-[radial-gradient(circle,#dcffc4_0%,rgba(220,255,196,0.18)_38%,rgba(220,255,196,0)_72%)] blur-2xl" />
      <div className="absolute right-[-12%] top-[18%] h-96 w-96 rounded-full bg-[radial-gradient(circle,#f9f3d7_0%,rgba(249,243,215,0.16)_44%,rgba(249,243,215,0)_74%)] blur-3xl" />
    </div>
  );
}

export function HeroCard({
  eyebrow,
  title,
  description,
  aside,
}: {
  eyebrow: string;
  title: string;
  description: string;
  aside: ReactNode;
}) {
  return (
    <section className="section-reveal overflow-hidden rounded-[1.8rem] border border-[rgba(255,255,255,0.7)] bg-[linear-gradient(135deg,rgba(36,46,38,0.96)_0%,rgba(36,48,39,0.92)_38%,rgba(63,88,61,0.86)_100%)] p-6 text-white shadow-[0_24px_42px_rgba(18,28,20,0.18)]">
      <div className="mb-6 max-w-2xl">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(216,240,222,0.74)]">{eyebrow}</div>
        <h2 className="text-[2.1rem] font-extrabold tracking-[-0.06em]">{title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[rgba(234,242,237,0.74)]">{description}</p>
      </div>
      {aside}
    </section>
  );
}

export function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.2rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.06)] px-4 py-3 backdrop-blur">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[rgba(216,240,222,0.66)]">{label}</div>
      <div className="mt-2 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-[1.55rem] border border-[rgba(237,237,237,0.78)] bg-white p-5 shadow-[0_16px_36px_rgba(16,24,18,0.05)] ${className}`}>
      {children}
    </section>
  );
}

export function PanelLink({
  href,
  title,
  description,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <a
      className="group section-reveal flex items-center gap-4 rounded-[1.5rem] border border-[rgba(237,237,237,0.8)] bg-white p-5 shadow-[0_12px_40px_rgba(16,24,18,0.05)] transition hover:-translate-y-0.5 hover:border-[rgba(48,183,100,0.2)] hover:shadow-[0_16px_46px_rgba(20,30,22,0.08)]"
      href={href}
    >
      <div className="shortcut-chip shortcut-chip--ai">{icon}</div>
      <div className="flex-1">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">{description}</p>
      </div>
      <ChevronRight className="text-[var(--text-secondary)] transition group-hover:translate-x-0.5 group-hover:text-[var(--brand-dark)]" />
    </a>
  );
}

export function SectionHeader({
  title,
  badge,
  href,
}: {
  title: string;
  badge?: string;
  href?: string;
}) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <h2 className="text-[1.55rem] font-extrabold tracking-[-0.05em] lg:text-[1.3rem]">{title}</h2>
        {badge ? (
          <span className="grid h-6 min-w-6 place-items-center rounded-full bg-[var(--brand-50)] px-1.5 text-xs font-bold text-[var(--brand-dark)]">
            {badge}
          </span>
        ) : null}
      </div>
      {href ? (
        <a className="text-sm font-semibold text-[var(--text-secondary)] transition hover:text-[var(--brand-dark)]" href={href}>
          查看全部 →
        </a>
      ) : null}
    </div>
  );
}

export function TimelineRow({
  time,
  label,
  accent = false,
}: {
  time: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className={`grid h-9 w-18 place-items-center rounded-full text-xs font-semibold ${accent ? "bg-[var(--brand-50)] text-[var(--brand-dark)]" : "bg-[var(--surface-1)] text-[var(--text-secondary)]"}`}>
        {time}
      </div>
      <div className="text-sm text-[var(--text-secondary)]">{label}</div>
    </div>
  );
}

export function RadarLine({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div className="mb-4">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-[var(--text-secondary)]">{label}</span>
        <span className="font-semibold text-[var(--text-primary)]">{value}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-2)]">
        <div className="h-full rounded-full bg-[linear-gradient(90deg,#c7ec9d_0%,#30b764_100%)]" style={{ width }} />
      </div>
    </div>
  );
}

export function ActionRow({ title, note }: { title: string; note: string }) {
  return (
    <div className="rounded-[1.2rem] bg-[var(--surface-1)] px-4 py-3">
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-sm text-[var(--text-secondary)]">{note}</div>
    </div>
  );
}

export function ActionButton({ label }: { label: string }) {
  return (
    <button
      className="mb-3 w-full rounded-full border border-[rgba(48,183,100,0.18)] bg-[var(--brand-50)] px-4 py-3 text-sm font-semibold text-[var(--brand-dark)] transition hover:bg-[rgba(170,232,116,0.32)]"
      type="button"
    >
      {label}
    </button>
  );
}

export function DonutLegend({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: string;
}) {
  return (
    <div className="mb-3 flex items-center justify-between rounded-[1.1rem] bg-[var(--surface-1)] px-4 py-3">
      <div className="flex items-center gap-3">
        <span className={`h-3 w-3 rounded-full ${tone}`} />
        <span className="text-sm font-medium">{label}</span>
      </div>
      <span className="text-sm font-semibold text-[var(--text-secondary)]">{value}</span>
    </div>
  );
}

export function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.2rem] bg-[var(--surface-1)] px-4 py-3">
      <div className="text-sm font-medium text-[var(--text-secondary)]">{label}</div>
      <div className="mt-1 font-semibold">{value}</div>
    </div>
  );
}

export function PreferenceRow({
  title,
  description,
  enabled = false,
}: {
  title: string;
  description: string;
  enabled?: boolean;
}) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4 rounded-[1.3rem] bg-[var(--surface-1)] px-4 py-3">
      <div>
        <div className="font-semibold">{title}</div>
        <div className="mt-1 text-sm text-[var(--text-secondary)]">{description}</div>
      </div>
      <div className={`flex h-8 w-14 items-center rounded-full p-1 transition ${enabled ? "justify-end bg-[var(--brand)]" : "justify-start bg-[#d7dbd5]"}`}>
        <span className="h-6 w-6 rounded-full bg-white shadow-[0_4px_10px_rgba(16,24,18,0.1)]" />
      </div>
    </div>
  );
}

export function CircleButton({
  children,
  ariaLabel,
}: {
  children: ReactNode;
  ariaLabel: string;
}) {
  return (
    <button
      aria-label={ariaLabel}
      className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-white text-[var(--text-secondary)] shadow-[0_10px_24px_rgba(16,24,18,0.04)] transition hover:border-[rgba(48,183,100,0.25)] hover:text-[var(--brand-dark)]"
      type="button"
    >
      {children}
    </button>
  );
}

export function Avatar() {
  return (
    <div className="grid h-11 w-11 place-items-center rounded-full bg-[radial-gradient(circle_at_32%_28%,#e7ffc8_0%,#cbf08c_42%,#a7df71_100%)] text-sm font-black text-[#3d6f38] shadow-[0_10px_20px_rgba(125,209,90,0.2)]">
      H
    </div>
  );
}

export function LogoMark() {
  return (
    <svg aria-hidden="true" className="h-9 w-9" viewBox="0 0 48 48">
      <path d="M11 14 18 5l8 7 8-7 4 12-3 12-10 7-12-2-6-10 4-10Z" fill="#1c211d" />
      <path d="m18 5 8 7 8-7-1 11-7 3-8-2V5Z" fill="#121713" opacity=".9" />
      <ellipse cx="18" cy="22.5" rx="4.2" ry="7" fill="#aae874" />
      <ellipse cx="31" cy="22.5" rx="4.2" ry="7" fill="#aae874" />
      <circle cx="19" cy="23" r="1.4" fill="#1c211d" />
      <circle cx="30" cy="23" r="1.4" fill="#1c211d" />
    </svg>
  );
}

export function BellIcon() {
  return (
    <svg aria-hidden="true" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24">
      <path
        d="M7.5 9a4.5 4.5 0 1 1 9 0v2.54c0 .53.21 1.04.59 1.41l.9.9a1 1 0 0 1-.7 1.71H6.71a1 1 0 0 1-.7-1.7l.9-.91c.38-.37.59-.88.59-1.41V9Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path d="M10 18a2 2 0 0 0 4 0" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

export function ChevronRight({ className = "" }: { className?: string }) {
  return (
    <span className={`text-lg ${className}`} aria-hidden="true">
      →
    </span>
  );
}

export function QuickLinkCard({
  shortcut,
  index,
}: {
  shortcut: Shortcut;
  index: number;
}) {
  return (
    <a
      className="section-reveal group relative hidden overflow-hidden rounded-[1.45rem] border border-white/70 bg-white p-4 shadow-[0_18px_34px_rgba(16,24,18,0.06)] transition hover:-translate-y-0.5 hover:border-[rgba(170,232,116,0.6)] hover:shadow-[0_22px_42px_rgba(16,24,18,0.08)] lg:flex"
      href={pageHref(shortcut.key)}
      style={{ animationDelay: `${index * 70 + 80}ms` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${shortcut.accent} opacity-90`} />
      <div className="relative flex w-full items-center gap-3">
        <div className="shortcut-chip">{shortcut.icon}</div>
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <h3 className="font-semibold text-[var(--text-primary)]">{shortcut.title}</h3>
            {shortcut.badge ? (
              <span className="rounded-full bg-[#ff5c5c] px-1.5 py-0.5 text-[10px] font-bold text-white">{shortcut.badge}</span>
            ) : null}
          </div>
          <p className="text-sm text-[var(--text-secondary)]">{shortcut.description}</p>
        </div>
      </div>
    </a>
  );
}
