export type PageKey = "home" | "ipo" | "ai" | "assets" | "profile";

export type NavItem = {
  key: PageKey;
  label: string;
  mobileLabel?: string;
  icon: string;
};

export type Shortcut = {
  key: PageKey;
  title: string;
  badge?: string;
  icon: string;
  accent: string;
  description: string;
};

export type IpoItem = {
  code: string;
  title: string;
  subtitle: string;
  price: string;
  status: string;
  countdown: string;
  icon: string;
  bookMultiple?: string;
};

export type Holding = {
  name: string;
  symbol: string;
  weight: string;
  change: string;
  value: string;
};

export type AiInsight = {
  title: string;
  score: string;
  tone: string;
  summary: string;
};

export const navItems: NavItem[] = [
  { key: "home", label: "首頁", mobileLabel: "首頁", icon: "⌂" },
  { key: "ipo", label: "打新", mobileLabel: "打新", icon: "⌁" },
  { key: "ai", label: "AI 投顧", mobileLabel: "AI", icon: "AI" },
  { key: "assets", label: "資產", mobileLabel: "資產", icon: "▥" },
  { key: "profile", label: "我的", mobileLabel: "我的", icon: "◌" },
];

export const quickLinks: Shortcut[] = [
  {
    key: "ipo",
    title: "打新",
    badge: "2",
    icon: "📈",
    accent: "from-[#F7FFF0] to-white",
    description: "查看正在招股與即將開放項目",
  },
  {
    key: "ai",
    title: "AI 投顧",
    icon: "🤖",
    accent: "from-[#F8FFF4] to-white",
    description: "獲取策略洞察與風險提示",
  },
  {
    key: "assets",
    title: "資產",
    icon: "🧾",
    accent: "from-[#F7FAFF] to-white",
    description: "追蹤總資產、倉位與資金動態",
  },
  {
    key: "profile",
    title: "KYC",
    icon: "🛡️",
    accent: "from-[#FFF8EE] to-white",
    description: "完成驗證解鎖完整交易能力",
  },
];

export const activeIpos: IpoItem[] = [
  {
    code: "002110.HK",
    title: "TEST",
    subtitle: "招股中",
    price: "HK$0.01 - HK$0.01",
    status: "招股中",
    countdown: "剩餘 1 天",
    icon: "T",
    bookMultiple: "超額認購 18.4x",
  },
  {
    code: "MiNIMAX-WP.HK",
    title: "00100",
    subtitle: "招股中",
    price: "HK$151.00 - HK$165.00",
    status: "招股中",
    countdown: "剩餘 3 天",
    icon: "M",
    bookMultiple: "超額認購 5.7x",
  },
];

export const upcomingIpos: IpoItem[] = [
  {
    code: "01641.HK",
    title: "紅星冷鏈",
    subtitle: "即將招股",
    price: "HK$12.26 - HK$12.26",
    status: "即將招股",
    countdown: "1 天後開放",
    icon: "R",
    bookMultiple: "預熱名單開啟",
  },
  {
    code: "08331.HK",
    title: "Silver Grid",
    subtitle: "即將招股",
    price: "HK$3.72 - HK$4.08",
    status: "即將招股",
    countdown: "4 天後開放",
    icon: "S",
    bookMultiple: "關注度 72%",
  },
];

export const holdings: Holding[] = [
  {
    name: "USDT 現金倉",
    symbol: "CASH",
    weight: "52%",
    change: "+0.00%",
    value: "12,840.00 USDT",
  },
  {
    name: "港股新股策略",
    symbol: "IPO-BASKET",
    weight: "24%",
    change: "+2.34%",
    value: "5,920.30 USDT",
  },
  {
    name: "AI 趨勢組合",
    symbol: "AI-SELECT",
    weight: "15%",
    change: "+4.81%",
    value: "3,540.12 USDT",
  },
  {
    name: "低波動收息",
    symbol: "DEFENSE",
    weight: "9%",
    change: "-0.42%",
    value: "2,102.04 USDT",
  },
];

export const aiInsights: AiInsight[] = [
  {
    title: "港股打新情緒回暖",
    score: "82",
    tone: "偏多",
    summary: "近三日新股搜索熱度上升，資金偏好重新回到中小盤高話題標的。",
  },
  {
    title: "資金面維持防守",
    score: "61",
    tone: "中性",
    summary: "短期建議保留較高現金比重，優先參與確定性更高的申購機會。",
  },
  {
    title: "AI 主題波動擴大",
    score: "74",
    tone: "謹慎偏多",
    summary: "板塊仍具想像力，但倉位需要更細的止盈止損規則來控制回撤。",
  },
];

export const pageTitles: Record<PageKey, string> = {
  home: "首頁",
  ipo: "打新",
  ai: "AI 投顧",
  assets: "資產",
  profile: "我的",
};
