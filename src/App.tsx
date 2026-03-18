type NavItem = {
  label: string;
  active?: boolean;
};

type Shortcut = {
  title: string;
  badge?: string;
  accent: string;
  icon: string;
};

type IpoItem = {
  code: string;
  title: string;
  subtitle: string;
  price: string;
  status: string;
  countdown: string;
  icon: string;
};

const desktopNav: NavItem[] = [
  { label: "首頁", active: true },
  { label: "打新" },
  { label: "AI 投顧" },
  { label: "資產" },
];

const quickLinks: Shortcut[] = [
  { title: "打新", badge: "2", accent: "from-[#F7FFF0] to-white", icon: "📈" },
  { title: "AI 投顧", accent: "from-[#F8FFF4] to-white", icon: "🤖" },
  { title: "資產", accent: "from-[#F7FAFF] to-white", icon: "🧾" },
  { title: "KYC", accent: "from-[#FFF8EE] to-white", icon: "🛡️" },
];

const activeIpos: IpoItem[] = [
  {
    code: "002110.HK",
    title: "TEST",
    subtitle: "招股中",
    price: "HK$0.01 - HK$0.01",
    status: "招股中",
    countdown: "剩餘 1 天",
    icon: "T",
  },
  {
    code: "MiNIMAX-WP.HK",
    title: "00100",
    subtitle: "招股中",
    price: "HK$151.00 - HK$165.00",
    status: "招股中",
    countdown: "剩餘 3 天",
    icon: "M",
  },
];

const upcomingIpos: IpoItem[] = [
  {
    code: "01641.HK",
    title: "红星冷链",
    subtitle: "即將招股",
    price: "HK$12.26 - HK$12.26",
    status: "即將招股",
    countdown: "1 天後開放",
    icon: "R",
  },
];

const mobileTabs: NavItem[] = [
  { label: "首頁", active: true },
  { label: "打新" },
  { label: "AI" },
  { label: "資產" },
  { label: "我的" },
];

function App() {
  return (
    <div className="min-h-screen bg-[var(--surface-1)] text-[var(--text-primary)]">
      <AmbientGlow />
      <DesktopHeader />
      <main className="relative mx-auto max-w-5xl px-5 pb-28 pt-7 lg:px-8 lg:py-8">
        <section className="mb-6 lg:mb-8">
          <div className="hidden items-baseline gap-1.5 text-sm font-medium text-[var(--text-secondary)] lg:flex">
            <span className="tracking-[0.18em]">晚安，</span>
            <span className="text-[var(--text-primary)]">harrywork987@outlook.com</span>
          </div>

          <div className="flex items-start justify-between lg:hidden">
            <div className="space-y-1">
              <p className="text-sm font-medium text-[var(--text-secondary)]">晚安</p>
              <h1 className="text-[1.78rem] font-extrabold tracking-[-0.04em]">
                harrywork987@outlook.com
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <CircleButton ariaLabel="Notifications">
                <BellIcon />
              </CircleButton>
              <Avatar />
            </div>
          </div>
        </section>

        <KycBanner />

        <section className="mb-6 grid gap-5 lg:mb-6 lg:grid-cols-5 lg:gap-6">
          <AssetCard />
          <div className="grid gap-3 lg:col-span-2 lg:grid-cols-2 lg:gap-3">
            {quickLinks.map((link, index) => (
              <QuickLinkCard key={link.title} shortcut={link} index={index} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <IpoSection title="正在招股" badge="2" items={activeIpos} />
            <IpoSection title="即將開放" badge="1" items={upcomingIpos} />
          </div>

          <aside className="space-y-6 lg:col-span-2">
            <SectionHeader title="市場資訊" />
            <a
              className="group flex items-center gap-4 rounded-[1.5rem] border border-[rgba(237,237,237,0.8)] bg-white p-5 shadow-[0_12px_40px_rgba(16,24,18,0.05)] transition hover:-translate-y-0.5 hover:border-[rgba(48,183,100,0.2)] hover:shadow-[0_16px_46px_rgba(20,30,22,0.08)]"
              href="#"
            >
              <div className="shortcut-chip shortcut-chip--ai">✦</div>
              <div className="flex-1">
                <h3 className="text-base font-semibold">AI 智能投顧</h3>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  獲取個性化投資建議
                </p>
              </div>
              <ChevronRight className="text-[var(--text-secondary)] transition group-hover:translate-x-0.5 group-hover:text-[var(--brand-dark)]" />
            </a>
          </aside>
        </section>
      </main>

      <MobileTabBar />
    </div>
  );
}

function DesktopHeader() {
  return (
    <header className="sticky top-0 z-50 hidden border-b border-[var(--border)] bg-[rgba(255,255,255,0.82)] backdrop-blur-xl lg:block">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
        <a className="flex items-center gap-3 font-semibold tracking-[-0.03em]" href="#">
          <LogoMark />
          <span className="text-lg">LeapCat</span>
        </a>

        <nav className="ml-10 flex items-center gap-1">
          {desktopNav.map((item) => (
            <a
              key={item.label}
              className={
                item.active
                  ? "rounded-xl bg-[var(--brand-50)] px-4 py-2 text-sm font-semibold text-[var(--brand-dark)] transition"
                  : "rounded-xl px-4 py-2 text-sm font-semibold text-[var(--text-secondary)] transition hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)]"
              }
              href="#"
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
          <button
            className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-white px-2 py-1.5 shadow-[0_10px_24px_rgba(16,24,18,0.04)] transition hover:border-[rgba(48,183,100,0.25)]"
            type="button"
          >
            <Avatar />
            <span className="font-semibold text-[var(--text-primary)]">harrywork987@outlook.com</span>
            <span className="text-xs">▾</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function KycBanner() {
  return (
    <a
      className="section-reveal mb-6 flex items-center gap-4 rounded-[1.45rem] border border-[#f4dfaa] bg-[linear-gradient(90deg,#FFF9EA_0%,#FFF4DB_48%,rgba(255,247,232,0.78)_100%)] px-5 py-4 shadow-[0_14px_30px_rgba(255,182,73,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(255,182,73,0.12)]"
      href="#"
    >
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-[var(--warning)] shadow-[0_8px_20px_rgba(255,188,74,0.12)]">
        🛡
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-[#bc6d0e]">完成 KYC 解鎖交易功能</h3>
        <p className="mt-1 text-xs font-medium text-[#df9b47]">
          完成身份認證以參與打新和交易
        </p>
      </div>
      <ChevronRight className="text-[#d6902d]" />
    </a>
  );
}

function AssetCard() {
  return (
    <section className="section-reveal relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,#1a1f1b_0%,#212924_38%,#2c3831_100%)] p-6 text-white shadow-[0_22px_40px_rgba(20,28,22,0.24)] lg:col-span-3 lg:p-7">
      <div className="asset-ring asset-ring--lg" />
      <div className="asset-ring asset-ring--sm" />
      <div className="asset-grid-lines" />

      <div className="relative z-10">
        <div className="mb-1 flex items-center gap-2 text-sm text-[rgba(216,240,222,0.7)]">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-[rgba(170,232,116,0.14)] text-[var(--brand-light)]">
            ⌘
          </span>
          <span className="font-semibold">總資產</span>
        </div>

        <div className="flex items-end gap-2">
          <span className="text-[2.7rem] font-extrabold tracking-[-0.06em]">0.00</span>
          <span className="pb-2 text-xl font-semibold text-[rgba(236,244,238,0.54)]">USDT</span>
        </div>

        <p className="mt-1 text-sm font-medium text-[rgba(221,235,225,0.48)]">可用: 0.00</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            className="rounded-full bg-[var(--brand-light)] px-6 py-3.5 text-sm font-bold text-[#1f2a20] shadow-[0_14px_24px_rgba(170,232,116,0.24)] transition hover:translate-y-[-1px] hover:shadow-[0_16px_28px_rgba(170,232,116,0.3)]"
            type="button"
          >
            ＋ 入金
          </button>
          <button
            className="rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.02)] px-6 py-3.5 text-sm font-bold text-[rgba(246,249,247,0.76)] backdrop-blur transition hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)]"
            type="button"
          >
            ⇢ 出金
          </button>
        </div>
      </div>
    </section>
  );
}

function QuickLinkCard({ shortcut, index }: { shortcut: Shortcut; index: number }) {
  return (
    <a
      className="section-reveal group relative hidden overflow-hidden rounded-[1.45rem] border border-white/70 bg-white p-4 shadow-[0_18px_34px_rgba(16,24,18,0.06)] transition hover:-translate-y-0.5 hover:border-[rgba(170,232,116,0.6)] hover:shadow-[0_22px_42px_rgba(16,24,18,0.08)] lg:flex"
      href="#"
      style={{ animationDelay: `${index * 70 + 80}ms` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${shortcut.accent} opacity-90`} />
      <div className="relative flex w-full items-center gap-3">
        <div className="shortcut-chip">{shortcut.icon}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-[var(--text-primary)]">{shortcut.title}</h3>
            {shortcut.badge ? (
              <span className="rounded-full bg-[#ff5c5c] px-1.5 py-0.5 text-[10px] font-bold text-white">
                {shortcut.badge}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </a>
  );
}

function IpoSection({
  title,
  badge,
  items,
}: {
  title: string;
  badge: string;
  items: IpoItem[];
}) {
  return (
    <section className="pb-6">
      <SectionHeader title={title} badge={badge} />
      <div className="space-y-4">
        {items.map((item, index) => (
          <IpoCard key={`${title}-${item.code}`} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ title, badge }: { title: string; badge?: string }) {
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
      <a className="text-sm font-semibold text-[var(--text-secondary)] transition hover:text-[var(--brand-dark)]" href="#">
        查看全部 →
      </a>
    </div>
  );
}

function IpoCard({ item, index }: { item: IpoItem; index: number }) {
  return (
    <a
      className="section-reveal group flex flex-col rounded-[1.55rem] border border-[rgba(237,237,237,0.7)] bg-white px-5 py-4 shadow-[0_16px_34px_rgba(16,24,18,0.05)] transition hover:-translate-y-0.5 hover:border-[rgba(170,232,116,0.35)] hover:shadow-[0_20px_38px_rgba(16,24,18,0.07)] md:flex-row md:items-center md:gap-4"
      href="#"
      style={{ animationDelay: `${index * 90 + 110}ms` }}
    >
      <div className="flex items-center">
        <div className="grid h-13 w-13 place-items-center rounded-full bg-[#232723] text-lg font-black text-[var(--brand-light)]">
          {item.icon}
        </div>
        <div className="ml-3 min-w-0 flex-1 md:hidden">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-[15px] font-semibold text-[var(--text-primary)]">{item.title}</h3>
            <span className="rounded-full bg-[rgba(170,232,116,0.95)] px-2 py-1 text-[10px] font-bold text-[#27432d]">
              {item.status}
            </span>
          </div>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.code}</p>
        </div>
      </div>

      <div className="mt-3 hidden min-w-0 flex-1 md:block">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-[15px] font-semibold text-[var(--text-primary)]">{item.title}</h3>
          <span className="rounded-full bg-[rgba(170,232,116,0.95)] px-2 py-1 text-[10px] font-bold text-[#27432d]">
            {item.subtitle}
          </span>
        </div>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.code}</p>
      </div>

      <div className="mt-3 flex items-end justify-between gap-3 md:mt-0 md:min-w-[18rem] md:justify-end">
        <div className="space-y-1 text-sm text-[var(--text-secondary)]">
          <p>{item.price}</p>
        </div>
        <div className="text-sm font-bold text-[#ef8b2b]">{item.countdown}</div>
        <ChevronRight className="hidden text-[var(--text-secondary)] transition group-hover:translate-x-0.5 group-hover:text-[var(--brand-dark)] md:block" />
      </div>
    </a>
  );
}

function MobileTabBar() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-[rgba(255,255,255,0.95)] px-3 py-2 backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-lg items-end justify-around px-2 pb-1 pt-2">
        {mobileTabs.map((item, index) => (
          <a
            key={item.label}
            className={
              item.active
                ? "flex flex-col items-center gap-1 px-3 py-1 text-[11px] font-semibold text-[var(--brand-dark)]"
                : "flex flex-col items-center gap-1 px-3 py-1 text-[11px] font-semibold text-[var(--text-tertiary)] transition hover:text-[var(--text-primary)]"
            }
            href="#"
          >
            <span
              className={
                item.active
                  ? "grid h-10 w-10 place-items-center rounded-full bg-[radial-gradient(circle_at_50%_35%,#d7ffb7_0%,#98df6a_50%,#5dc756_100%)] text-sm text-[#244c29] shadow-[0_12px_20px_rgba(100,209,88,0.24)]"
                  : "text-base"
              }
            >
              {index === 0 ? "⌂" : index === 1 ? "⌁" : index === 2 ? "AI" : index === 3 ? "▥" : "◌"}
            </span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

function AmbientGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-[-10%] top-[-8%] h-72 w-72 rounded-full bg-[radial-gradient(circle,#dcffc4_0%,rgba(220,255,196,0.18)_38%,rgba(220,255,196,0)_72%)] blur-2xl" />
      <div className="absolute right-[-12%] top-[18%] h-96 w-96 rounded-full bg-[radial-gradient(circle,#f9f3d7_0%,rgba(249,243,215,0.16)_44%,rgba(249,243,215,0)_74%)] blur-3xl" />
    </div>
  );
}

function CircleButton({
  children,
  ariaLabel,
}: {
  children: React.ReactNode;
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

function Avatar() {
  return (
    <div className="grid h-11 w-11 place-items-center rounded-full bg-[radial-gradient(circle_at_32%_28%,#e7ffc8_0%,#cbf08c_42%,#a7df71_100%)] text-sm font-black text-[#3d6f38] shadow-[0_10px_20px_rgba(125,209,90,0.2)]">
      H
    </div>
  );
}

function LogoMark() {
  return (
    <svg aria-hidden="true" className="h-9 w-9" viewBox="0 0 48 48">
      <path
        d="M11 14 18 5l8 7 8-7 4 12-3 12-10 7-12-2-6-10 4-10Z"
        fill="#1c211d"
      />
      <path d="m18 5 8 7 8-7-1 11-7 3-8-2V5Z" fill="#121713" opacity=".9" />
      <ellipse cx="18" cy="22.5" rx="4.2" ry="7" fill="#aae874" />
      <ellipse cx="31" cy="22.5" rx="4.2" ry="7" fill="#aae874" />
      <circle cx="19" cy="23" r="1.4" fill="#1c211d" />
      <circle cx="30" cy="23" r="1.4" fill="#1c211d" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg aria-hidden="true" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24">
      <path
        d="M7.5 9a4.5 4.5 0 1 1 9 0v2.54c0 .53.21 1.04.59 1.41l.9.9a1 1 0 0 1-.7 1.71H6.71a1 1 0 0 1-.7-1.7l.9-.91c.38-.37.59-.88.59-1.41V9Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M10 18a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ChevronRight({ className = "" }: { className?: string }) {
  return (
    <span className={`text-lg ${className}`} aria-hidden="true">
      →
    </span>
  );
}

export default App;
