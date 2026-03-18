import {
  ActionButton,
  ChevronRight,
  HeroCard,
  MetricPill,
  pageHref,
  Panel,
  QuickLinkCard,
  SectionHeader,
  TimelineRow,
} from "./app-shell";
import {
  activeIpos,
  aiInsights,
  listedIpos,
  quickLinks,
  upcomingIpos,
  type IpoItem,
} from "./app-data";

export function HomePage() {
  return (
    <>
      <KycBanner />
      <section className="mb-6 grid gap-5 lg:grid-cols-5 lg:gap-6">
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
          <IpoSection title="即將開放" badge="2" items={upcomingIpos} />
        </div>

        <aside className="space-y-6 lg:col-span-2">
          <SectionHeader title="市場資訊" />
          <a
            className="group section-reveal flex items-center gap-4 rounded-[1.5rem] border border-[rgba(237,237,237,0.8)] bg-white p-5 shadow-[0_12px_40px_rgba(16,24,18,0.05)] transition hover:-translate-y-0.5 hover:border-[rgba(48,183,100,0.2)] hover:shadow-[0_16px_46px_rgba(20,30,22,0.08)]"
            href={pageHref("ai")}
          >
            <img alt="AI" className="h-[38px] w-[38px] rounded-full" src="/assets/icons/leapcat-ai-2.svg" />
            <div className="flex-1">
              <h3 className="text-base font-semibold">AI 智能投顧</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">獲取個性化投資建議</p>
            </div>
            <ChevronRight className="text-[var(--text-secondary)] transition group-hover:translate-x-0.5 group-hover:text-[var(--brand-dark)]" />
          </a>
          <Panel className="section-reveal">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">今日節奏</h3>
              <span className="rounded-full bg-[var(--brand-50)] px-2 py-1 text-xs font-semibold text-[var(--brand-dark)]">市場開啟</span>
            </div>
            <div className="space-y-3 text-sm text-[var(--text-secondary)]">
              <TimelineRow time="08:30" label="AI 掃描完成" />
              <TimelineRow time="10:00" label="招股標的更新" />
              <TimelineRow time="15:40" label="尾盤倉位提醒" />
            </div>
          </Panel>
        </aside>
      </section>
    </>
  );
}

export function IpoPage() {
  const cards = [...activeIpos, ...upcomingIpos.slice(0, 1), ...listedIpos, activeIpos[1]];

  return (
    <div className="pb-8">
      <section className="relative mx-[calc(50%-50vw)] mb-4 overflow-hidden bg-[#aeea6f] px-5">
        <div className="mx-auto flex min-h-[92px] max-w-5xl items-center justify-between overflow-hidden py-5 lg:min-h-[136px] lg:px-6">
          <div className="relative z-10">
            <h1 className="text-2xl font-bold tracking-tight text-[#1E2420] lg:text-[32px]">港股打新</h1>
            <p className="mt-2 text-sm text-[#5c7c4f]">目前有 2 檔正在招股</p>
          </div>
          <img alt="" className="absolute top-0 -right-16 h-full lg:right-0" src="/assets/ipo-banner-bg.svg" />
        </div>
      </section>

      <div className="py-4">
        <div className="flex items-center gap-2.5 rounded-xl border border-[rgba(237,237,237,0.8)] bg-white px-4 py-2.5 transition focus-within:border-[rgba(170,232,116,0.5)] focus-within:shadow-[0_0_0_3px_rgba(170,232,116,0.08)]">
          <span className="text-[var(--text-tertiary)]">⌕</span>
          <input
            className="flex-1 bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none"
            placeholder="搜尋公司名稱、代碼或行業..."
            readOnly
            value=""
          />
        </div>
      </div>

      <div className="mb-5 flex flex-wrap items-center gap-1 border-b border-[var(--surface-3)] pb-2">
        {[
          { label: "全部", count: "4", active: true },
          { label: "招股中", count: "2" },
          { label: "即將招股", count: "1" },
          { label: "已上市", count: "1" },
          { label: "已截止", count: "" },
        ].map(({ label, count, active }) => (
          <button
            key={label}
            className={
              active
                ? "relative rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-primary)] after:absolute after:bottom-[-9px] after:left-1/2 after:h-[2px] after:w-8 after:-translate-x-1/2 after:rounded-full after:bg-[var(--brand-light)]"
                : "rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-tertiary)] transition hover:text-[var(--text-secondary)]"
            }
            type="button"
          >
            {label}
            {count ? <span className="ml-1 text-[var(--text-secondary)]">{count}</span> : null}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((item, index) => (
          <IpoLandingCard key={`${item.code}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function AiPage() {
  return (
    <div className="pb-8">
      <section className="relative mx-[calc(50%-50vw)] mb-5 overflow-hidden bg-[#aeea6f] px-5">
        <div className="mx-auto flex min-h-[92px] max-w-5xl items-center justify-between py-5 lg:min-h-[136px] lg:px-6">
          <div className="relative z-10">
            <h1 className="text-2xl font-bold text-[#1A2E1A]">AI 投顧</h1>
            <p className="mt-2 text-sm text-[#5c7c4f]">AI 驅動的投資洞察與自動化交易策略</p>
          </div>
          <img alt="" className="absolute top-0 right-0 h-full translate-x-8 sm:translate-x-0" src="/assets/ai-banner-bg.svg" />
        </div>
      </section>

      <div className="mb-5 grid gap-4 md:grid-cols-3">
        <MetricCard value="87%" label="信號準確率（30日）" />
        <MetricCard value="142" label="自上線以來" />
        <MetricCard value="12" label="投資大師角色" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.06fr_1fr]">
        <div className="space-y-4">
          <h2 className="text-[28px] font-bold tracking-tight">LeapCat AI</h2>

          <AiFeatureCard
            action="進入智囊團 →"
            description="12 位 AI 投資大師（巴菲特、芒格、大空頭伯里、中本聰等）圓桌討論，多角度深度分析。"
            icon="/assets/icons/think-tank.svg"
            title="AI 智囊團"
          />

          <AiFeatureCard
            action="開始對話 →"
            description="隨時提問市場、個股和投資策略。支援持倉數據上下文，智能分析。"
            icon="/assets/icons/leapcat-ai.svg"
            title="AI 對話"
          />

          <Panel className="section-reveal">
            <div className="mb-3 text-lg font-semibold">快問快答</div>
            <div className="flex flex-wrap gap-2">
              {["本週最佳打新？", "市場展望", "風險分析", "如何申購 IPO?"].map((item) => (
                <button
                  key={item}
                  className="rounded-full border border-[#e3eadb] bg-[#fbfcf9] px-4 py-2 text-sm text-[var(--text-secondary)] transition hover:border-[var(--brand-light)] hover:text-[var(--text-primary)]"
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>
          </Panel>
        </div>

        <div className="space-y-4">
          <h2 className="text-[28px] font-bold tracking-tight">AI 交易等級</h2>
          <AiLevelCard
            accent
            badge="進行中"
            description="AI 提供市場分析、圖表形態及交易建議供您參考。"
            title="分析與洞察"
            tone="等級 1"
          />
          <AiLevelCard
            badge="即將推出"
            description="AI 生成交易策略，您確認後再執行。"
            title="策略執行"
            tone="等級 2"
          />
          <AiLevelCard
            badge="即將推出"
            description="AI 在您設定的風險限額和預算內自動執行交易。"
            title="自動交易"
            tone="等級 3"
          />
          <Panel className="section-reveal !rounded-[1.2rem] !bg-[#fbfcfa] !p-4">
            <p className="text-xs leading-6 text-[var(--text-secondary)]">
              AI 生成的投資建議僅供參考，不構成投資意見。過往表現不代表未來結果。投資前請諮詢您的財務顧問。
            </p>
          </Panel>
        </div>
      </div>
    </div>
  );
}

export function AssetsPage() {
  return <AuthPage />;
}

export function ProfilePage() {
  return <AuthPage />;
}

function AuthPage() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        <img alt="Leapcat" className="mx-auto mb-4 h-16" src="/assets/logo-notext-light.svg" />
        <h1 className="text-2xl font-bold text-[var(--text-primary)]">歡迎使用 Leapcat</h1>
        <p className="mt-3 text-[15px] text-[var(--text-secondary)]">登入以參與港股打新、AI 交易及全球資產投資</p>

        <button
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-full border border-[var(--border)] bg-white py-3.5 text-base font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-1)]"
          type="button"
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[#fff] text-[15px] shadow-[0_1px_6px_rgba(16,24,18,0.12)]">G</span>
          <span>使用 Google 繼續</span>
        </button>

        <div className="my-5 flex items-center gap-4 text-[var(--text-tertiary)]">
          <div className="h-px flex-1 bg-[var(--border)]" />
          <span className="text-sm">或</span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>

        <input
          className="w-full rounded-lg border border-transparent bg-[var(--surface-2)] px-4 py-3.5 text-base text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none"
          placeholder="請輸入電子郵件地址"
          readOnly
          value=""
        />

        <button
          className="mt-4 w-full rounded-full bg-[linear-gradient(90deg,#d0f1a0_0%,#c7f091_100%)] py-3.5 text-base font-semibold text-[var(--text-secondary)]"
          type="button"
        >
          使用電子郵件繼續
        </button>

        <p className="mt-6 text-xs leading-6 text-[var(--text-secondary)]">
          繼續即表示您同意我們的 <span className="text-[var(--brand-dark)]">服務條款</span> 和 <span className="text-[var(--brand-dark)]">隱私政策</span>
        </p>
      </div>
    </section>
  );
}

function KycBanner() {
  return (
    <a
      className="section-reveal mb-6 flex items-center gap-4 rounded-[1.45rem] border border-[#f4dfaa] bg-[linear-gradient(90deg,#FFF9EA_0%,#FFF4DB_48%,rgba(255,247,232,0.78)_100%)] px-5 py-4 shadow-[0_14px_30px_rgba(255,182,73,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(255,182,73,0.12)]"
      href={pageHref("profile")}
    >
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-[var(--warning)] shadow-[0_8px_20px_rgba(255,188,74,0.12)]">🛡</div>
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-[#bc6d0e]">完成 KYC 解鎖交易功能</h3>
        <p className="mt-1 text-xs font-medium text-[#df9b47]">完成身份認證以參與打新和交易</p>
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
          <span className="grid h-5 w-5 place-items-center rounded-md bg-[rgba(170,232,116,0.14)] text-[var(--brand-light)]">⌘</span>
          <span className="font-semibold">總資產</span>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-[2.7rem] font-extrabold tracking-[-0.06em]">24,402.46</span>
          <span className="pb-2 text-xl font-semibold text-[rgba(236,244,238,0.54)]">USDT</span>
        </div>
        <p className="mt-1 text-sm font-medium text-[rgba(221,235,225,0.48)]">可用: 12,840.00</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a className="rounded-full bg-[var(--brand-light)] px-6 py-3.5 text-center text-sm font-bold text-[#1f2a20] shadow-[0_14px_24px_rgba(170,232,116,0.24)] transition hover:translate-y-[-1px] hover:shadow-[0_16px_28px_rgba(170,232,116,0.3)]" href={pageHref("assets")}>＋ 入金</a>
          <a className="rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.02)] px-6 py-3.5 text-center text-sm font-bold text-[rgba(246,249,247,0.76)] backdrop-blur transition hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)]" href={pageHref("assets")}>⇢ 出金</a>
        </div>
      </div>
    </section>
  );
}

function IpoSection({ title, badge, items }: { title: string; badge: string; items: IpoItem[] }) {
  return (
    <section className="pb-6">
      <SectionHeader title={title} badge={badge} href={pageHref("ipo")} />
      <div className="space-y-4">
        {items.map((item, index) => (
          <a
            key={`${title}-${item.code}`}
            className="section-reveal group flex flex-col rounded-[1.55rem] border border-[rgba(237,237,237,0.7)] bg-white px-5 py-4 shadow-[0_16px_34px_rgba(16,24,18,0.05)] transition hover:-translate-y-0.5 hover:border-[rgba(170,232,116,0.35)] hover:shadow-[0_20px_38px_rgba(16,24,18,0.07)] md:flex-row md:items-center md:gap-4"
            href={pageHref("ipo")}
            style={{ animationDelay: `${index * 90 + 110}ms` }}
          >
            <div className="flex items-center">
              <div className="grid h-13 w-13 place-items-center rounded-full bg-[#232723] text-lg font-black text-[var(--brand-light)]">{item.icon}</div>
              <div className="ml-3 min-w-0 flex-1 md:hidden">
                <div className="flex items-center gap-2">
                  <h3 className="truncate text-[15px] font-semibold text-[var(--text-primary)]">{item.title}</h3>
                  <span className="rounded-full bg-[rgba(170,232,116,0.95)] px-2 py-1 text-[10px] font-bold text-[#27432d]">{item.status}</span>
                </div>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.code}</p>
              </div>
            </div>
            <div className="mt-3 hidden min-w-0 flex-1 md:block">
              <div className="flex items-center gap-2">
                <h3 className="truncate text-[15px] font-semibold text-[var(--text-primary)]">{item.title}</h3>
                <span className="rounded-full bg-[rgba(170,232,116,0.95)] px-2 py-1 text-[10px] font-bold text-[#27432d]">{item.subtitle}</span>
              </div>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.code}</p>
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 md:mt-0 md:min-w-[20rem] md:justify-end">
              <div className="space-y-1 text-sm text-[var(--text-secondary)]">
                <p>{item.price}</p>
              </div>
              <div className="text-sm font-bold text-[#ef8b2b]">{item.countdown}</div>
              <ChevronRight className="hidden text-[var(--text-secondary)] transition group-hover:translate-x-0.5 group-hover:text-[var(--brand-dark)] md:block" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function IpoLandingCard({ item }: { item: IpoItem }) {
  const isOpen = item.status === "招股中";
  const isUpcoming = item.status === "即將招股";
  const isListed = item.status === "已上市";

  return (
    <a className="rounded-[1.3rem] border border-[rgba(237,237,237,0.8)] bg-white px-5 py-4 shadow-[0_12px_28px_rgba(16,24,18,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(16,24,18,0.07)]" href={pageHref("ipo")}>
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`grid h-12 w-12 place-items-center rounded-full text-base font-bold ${isListed ? "bg-[#fff4f4] text-[#e85d5d]" : "bg-[#232723] text-[var(--brand-light)]"}`}>
            {item.icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-[26px] font-semibold leading-none tracking-[-0.05em] text-[var(--text-primary)]">{item.title}</h3>
              <span className={`rounded-full px-2 py-1 text-[10px] font-bold ${isOpen ? "bg-[#aeea6f] text-[#27432d]" : isUpcoming ? "bg-[#ffd886] text-[#9d6212]" : "bg-[#dfe9ff] text-[#4b6cb8]"}`}>{item.status}</span>
            </div>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.code}</p>
          </div>
        </div>
      </div>

      <p className="min-h-[74px] text-sm leading-6 text-[var(--text-secondary)]">
        {item.title === "TEST"
          ? "TEST"
          : item.title === "紅星冷鏈"
            ? "紅星冷鏈是一家總部位於湖南省長沙市的冷凍食品倉儲服務及冷凍食品門店租賃服務提供商。"
            : item.title === "BBSB INTL"
              ? "BBSB INTL 是一家於馬來西亞擁有超過 16 年經驗的土木工程承包商。"
              : "MiniMax 是全球領先的通用人工智能科技公司。"}
      </p>

      <div className="mt-5 grid gap-3 text-sm text-[var(--text-secondary)]">
        <div className="flex items-center justify-between">
          <span>{isListed ? "招股價" : "招股價"}</span>
          <span className="font-semibold text-[var(--text-primary)]">{item.price}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>{isListed ? "上市價" : isUpcoming ? "開放倒數" : "截止倒數"}</span>
          <span className={`font-semibold ${isListed ? "text-[var(--brand-dark)]" : "text-[var(--brand-dark)]"}`}>{item.bookMultiple ?? item.countdown}</span>
        </div>
      </div>

      <div className={`mt-5 rounded-full border py-3 text-center text-sm font-semibold ${isOpen ? "border-transparent bg-[var(--brand-light)] text-[#1d231f]" : "border-[var(--surface-3)] text-[var(--text-secondary)]"}`}>
        {isOpen ? "立即申購" : "查看詳情"}
      </div>
    </a>
  );
}

function AiFeatureCard({
  title,
  description,
  icon,
  action,
}: {
  title: string;
  description: string;
  icon: string;
  action: string;
}) {
  return (
    <Panel className="section-reveal">
      <div className="flex items-start gap-4">
        <img alt="" className="relative h-16 w-16 object-contain" src={icon} />
        <div className="flex-1">
          <h3 className="text-[28px] font-semibold tracking-[-0.05em]">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
          <button className="mt-5 rounded-full bg-[var(--brand-light)] px-5 py-2.5 text-sm font-semibold text-[#1d231f]" type="button">
            {action}
          </button>
        </div>
      </div>
    </Panel>
  );
}

function AiLevelCard({
  tone,
  title,
  description,
  badge,
  accent = false,
}: {
  tone: string;
  title: string;
  description: string;
  badge: string;
  accent?: boolean;
}) {
  return (
    <Panel className={`section-reveal ${accent ? "!border-[#dcefc6] !bg-[linear-gradient(180deg,#ffffff_0%,#fcfff8_100%)]" : "!shadow-none"}`}>
      <div className="flex items-start gap-4">
        <img alt="AI" className="h-[38px] w-[38px] rounded-full" src="/assets/icons/leapcat-ai-2.svg" />
        <div className="flex-1">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-sm font-semibold text-[var(--text-secondary)]">{tone}</span>
            <span className={`rounded-full px-2 py-1 text-[10px] font-bold ${accent ? "bg-[#aeea6f] text-[#27432d]" : "bg-[var(--surface-2)] text-[var(--text-tertiary)]"}`}>{badge}</span>
          </div>
          <h3 className="text-[26px] font-semibold tracking-[-0.05em]">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
          {accent ? (
            <div className="mt-4 text-sm font-semibold text-[var(--brand-dark)]">在 AI 對話中體驗 →</div>
          ) : null}
        </div>
      </div>
    </Panel>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.2rem] border border-[rgba(237,237,237,0.8)] bg-white px-5 py-4 text-center shadow-[0_10px_24px_rgba(16,24,18,0.04)]">
      <div className="text-[36px] font-bold tracking-[-0.06em] text-[var(--brand-dark)]">{value}</div>
      <div className="mt-1 text-sm text-[var(--text-secondary)]">{label}</div>
    </div>
  );
}
