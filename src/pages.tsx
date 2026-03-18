import {
  ActionButton,
  ActionRow,
  ChevronRight,
  DonutLegend,
  HeroCard,
  InfoField,
  MetricPill,
  pageHref,
  Panel,
  PanelLink,
  PreferenceRow,
  QuickLinkCard,
  RadarLine,
  SectionHeader,
  TimelineRow,
} from "./app-shell";
import {
  activeIpos,
  aiInsights,
  holdings,
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
          <PanelLink href={pageHref("ai")} icon="✦" title="AI 智能投顧" description="獲取個性化投資建議與風險提示" />
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
  return (
    <div className="space-y-6">
      <HeroCard
        eyebrow="Primary Market"
        title="打新中樞"
        description="把正在招股、即將開放與觀察名單放到同一個時間軸裡，方便你快速比較參與優先級。"
        aside={
          <div className="grid gap-3 sm:grid-cols-3">
            <MetricPill label="正在招股" value="2 檔" />
            <MetricPill label="即將開放" value="2 檔" />
            <MetricPill label="熱門關注" value="684 人" />
          </div>
        }
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          <IpoSection title="正在招股" badge="2" items={activeIpos} />
          <IpoSection title="即將開放" badge="2" items={upcomingIpos} />
        </div>

        <div className="space-y-6 lg:col-span-2">
          <Panel className="section-reveal">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">申購節奏</h3>
              <span className="text-sm font-semibold text-[var(--text-secondary)]">本週</span>
            </div>
            <div className="space-y-4">
              <TimelineRow time="今天" label="TEST 最後申購日" accent />
              <TimelineRow time="明天" label="紅星冷鏈 開始招股" />
              <TimelineRow time="週五" label="MiNIMAX-WP 結束申購" />
              <TimelineRow time="下週一" label="Silver Grid 公布招股書" />
            </div>
          </Panel>

          <Panel className="section-reveal">
            <h3 className="mb-4 text-lg font-semibold">觀察清單</h3>
            <div className="space-y-3">
              {[
                ["Nova Battery", "新能源 / 估值偏高"],
                ["Harbor Pharma", "醫療 / 故事性強"],
                ["Cloud Paper", "消費 / 防守型"],
              ].map(([name, note]) => (
                <div key={name} className="rounded-2xl border border-[rgba(237,237,237,0.8)] bg-[var(--surface-1)] px-4 py-3">
                  <div className="font-semibold">{name}</div>
                  <div className="mt-1 text-sm text-[var(--text-secondary)]">{note}</div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

export function AiPage() {
  return (
    <div className="space-y-6">
      <HeroCard
        eyebrow="AI Advisor"
        title="策略驾驶舱"
        description="把市场情绪、仓位建议与风险提示聚合成可执行的操作建议，让你像看控制台一样看投资。"
        aside={
          <div className="grid gap-3 sm:grid-cols-3">
            <MetricPill label="综合情绪" value="68 / 100" />
            <MetricPill label="风险偏好" value="中性偏多" />
            <MetricPill label="建议现金比" value="42%" />
          </div>
        }
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          <Panel className="section-reveal">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold">今日 AI 洞察</h3>
              <span className="rounded-full bg-[var(--brand-50)] px-2 py-1 text-xs font-semibold text-[var(--brand-dark)]">每 30 分鐘更新</span>
            </div>
            <div className="space-y-4">
              {aiInsights.map((insight) => (
                <div key={insight.title} className="rounded-[1.35rem] border border-[rgba(237,237,237,0.85)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,251,250,0.95))] px-5 py-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-semibold">{insight.title}</h4>
                    <span className="rounded-full bg-[#1f2a20] px-2.5 py-1 text-xs font-semibold text-[var(--brand-light)]">{insight.score}</span>
                  </div>
                  <div className="mb-2 text-sm font-semibold text-[var(--brand-dark)]">{insight.tone}</div>
                  <p className="text-sm leading-6 text-[var(--text-secondary)]">{insight.summary}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="section-reveal">
            <h3 className="mb-4 text-lg font-semibold">策略提示词</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "比较本周新股的申购优先级",
                "根据现有仓位给出现金管理建议",
                "总结今日 AI 板块风险",
                "生成一份保守型打新计划",
              ].map((prompt) => (
                <button key={prompt} className="rounded-full border border-[rgba(48,183,100,0.18)] bg-[var(--brand-50)] px-4 py-2 text-sm font-semibold text-[var(--brand-dark)] transition hover:bg-[rgba(170,232,116,0.35)]" type="button">
                  {prompt}
                </button>
              ))}
            </div>
          </Panel>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <Panel className="section-reveal">
            <h3 className="mb-4 text-lg font-semibold">风险雷达</h3>
            <RadarLine label="波动风险" value="中" width="58%" />
            <RadarLine label="流动性风险" value="低" width="34%" />
            <RadarLine label="主题拥挤" value="中高" width="73%" />
            <RadarLine label="仓位集中" value="可控" width="46%" />
          </Panel>

          <Panel className="section-reveal">
            <h3 className="mb-4 text-lg font-semibold">推荐动作</h3>
            <div className="space-y-3 text-sm text-[var(--text-secondary)]">
              <ActionRow title="降低单一主题仓位" note="将 AI 相关持仓上限控制在 18%" />
              <ActionRow title="优先参与高热度新股" note="对 TEST 保持高优先级关注" />
              <ActionRow title="保留机动现金" note="在申购窗口前维持至少 40% 现金" />
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

export function AssetsPage() {
  return (
    <div className="space-y-6">
      <HeroCard
        eyebrow="Portfolio"
        title="资产全景"
        description="从总资产到单笔持仓，再到资金流向，把所有变化拆得足够清楚，方便你快速判断下一步。"
        aside={
          <div className="grid gap-3 sm:grid-cols-3">
            <MetricPill label="总资产" value="24,402.46 USDT" />
            <MetricPill label="日内变化" value="+1.84%" />
            <MetricPill label="可用余额" value="12,840.00 USDT" />
          </div>
        }
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          <Panel className="section-reveal">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold">持仓构成</h3>
              <span className="text-sm font-semibold text-[var(--text-secondary)]">按策略</span>
            </div>
            <div className="space-y-4">
              {holdings.map((holding) => (
                <div key={holding.symbol} className="rounded-[1.35rem] bg-[var(--surface-1)] px-4 py-4">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <div>
                      <div className="font-semibold">{holding.name}</div>
                      <div className="text-sm text-[var(--text-secondary)]">{holding.symbol}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{holding.value}</div>
                      <div className={`text-sm font-semibold ${holding.change.startsWith("-") ? "text-[#d46b63]" : "text-[var(--brand-dark)]"}`}>{holding.change}</div>
                    </div>
                  </div>
                  <div className="mb-2 h-2 overflow-hidden rounded-full bg-white">
                    <div className="h-full rounded-full bg-[linear-gradient(90deg,#88d856_0%,#30b764_100%)]" style={{ width: holding.weight }} />
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">权重 {holding.weight}</div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="section-reveal">
            <h3 className="mb-4 text-lg font-semibold">近期活动</h3>
            <div className="space-y-4">
              <TimelineRow time="今天 14:10" label="补充 1,000 USDT 入金" accent />
              <TimelineRow time="今天 10:35" label="AI 趋势组合调仓建议已生成" />
              <TimelineRow time="昨天 16:00" label="完成一次 MiNIMAX-WP 申购准备" />
            </div>
          </Panel>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <Panel className="section-reveal">
            <h3 className="mb-4 text-lg font-semibold">资金分布</h3>
            <DonutLegend label="现金" value="52%" tone="bg-[var(--brand-light)]" />
            <DonutLegend label="打新策略" value="24%" tone="bg-[#89d36b]" />
            <DonutLegend label="AI 主题" value="15%" tone="bg-[#cbeeb2]" />
            <DonutLegend label="防守仓位" value="9%" tone="bg-[#dfe6d7]" />
          </Panel>

          <Panel className="section-reveal">
            <h3 className="mb-4 text-lg font-semibold">资金动作</h3>
            <ActionButton label="新增入金" />
            <ActionButton label="申请出金" />
            <ActionButton label="导出账单" />
          </Panel>
        </div>
      </div>
    </div>
  );
}

export function ProfilePage() {
  return (
    <div className="space-y-6">
      <HeroCard
        eyebrow="Account"
        title="我的设置"
        description="把身份验证、安全、通知偏好与账户资料集中到同一层级，保持产品感一致。"
        aside={
          <div className="grid gap-3 sm:grid-cols-3">
            <MetricPill label="KYC 状态" value="待完成" />
            <MetricPill label="登录方式" value="Google + Email" />
            <MetricPill label="安全等级" value="良好" />
          </div>
        }
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          <Panel className="section-reveal">
            <h3 className="mb-4 text-lg font-semibold">账户资料</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <InfoField label="邮箱" value="harrywork987@outlook.com" />
              <InfoField label="地区" value="Hong Kong SAR" />
              <InfoField label="默认语言" value="繁體中文" />
              <InfoField label="账户类型" value="个人账户" />
            </div>
          </Panel>

          <Panel className="section-reveal">
            <h3 className="mb-4 text-lg font-semibold">通知偏好</h3>
            <PreferenceRow title="招股提醒" description="在关键申购窗口与截止时间发送提醒" enabled />
            <PreferenceRow title="AI 风险提示" description="当策略评分恶化时推送提醒" enabled />
            <PreferenceRow title="营销更新" description="接收产品动态和活动公告" />
          </Panel>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <Panel className="section-reveal">
            <h3 className="mb-4 text-lg font-semibold">安全中心</h3>
            <ActionRow title="兩步驗證" note="尚未啟用，建議立刻開啟" />
            <ActionRow title="設備管理" note="最近登入裝置 3 台" />
            <ActionRow title="登入記錄" note="最後登入：今天 20:47" />
          </Panel>

          <Panel className="section-reveal">
            <h3 className="mb-4 text-lg font-semibold">KYC 進度</h3>
            <div className="mb-3 h-2 overflow-hidden rounded-full bg-[var(--surface-2)]">
              <div className="h-full w-[46%] rounded-full bg-[linear-gradient(90deg,#ffcd73_0%,#ffad45_100%)]" />
            </div>
            <p className="mb-4 text-sm text-[var(--text-secondary)]">已完成基本資料與聯絡方式驗證，尚需提交證件與地址證明。</p>
            <a className="inline-flex rounded-full bg-[var(--brand-light)] px-4 py-2 text-sm font-semibold text-[#1f2a20]" href={pageHref("profile")}>
              繼續完成 KYC
            </a>
          </Panel>
        </div>
      </div>
    </div>
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
          <a className="rounded-full bg-[var(--brand-light)] px-6 py-3.5 text-center text-sm font-bold text-[#1f2a20] shadow-[0_14px_24px_rgba(170,232,116,0.24)] transition hover:translate-y-[-1px] hover:shadow-[0_16px_28px_rgba(170,232,116,0.3)]" href={pageHref("assets")}>
            ＋ 入金
          </a>
          <a className="rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.02)] px-6 py-3.5 text-center text-sm font-bold text-[rgba(246,249,247,0.76)] backdrop-blur transition hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)]" href={pageHref("assets")}>
            ⇢ 出金
          </a>
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
          <IpoCard key={`${title}-${item.code}`} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function IpoCard({ item, index }: { item: IpoItem; index: number }) {
  return (
    <a
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
          <p>{item.bookMultiple}</p>
        </div>
        <div className="text-sm font-bold text-[#ef8b2b]">{item.countdown}</div>
        <ChevronRight className="hidden text-[var(--text-secondary)] transition group-hover:translate-x-0.5 group-hover:text-[var(--brand-dark)] md:block" />
      </div>
    </a>
  );
}
