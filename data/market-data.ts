// ─────────────────────────────────────────────────────────────────────────────
// India Equity Market Intelligence Tracker — Master Data Store
// Sources: AMFI, SEBI SCORES, NSE/BSE bulk deals, NSDL FII data, Prime Database
// Period: FY2022 – FY2025 (Apr 2021 – Mar 2025)
// ─────────────────────────────────────────────────────────────────────────────

export type InvestorType = "MF" | "FII" | "Insurance" | "AIF";
export type MarketCap = "Large" | "Mid" | "Small" | "Micro";

// ── 1. INSTITUTIONAL INVESTORS ────────────────────────────────────────────────
export interface Investor {
  rank: number;
  name: string;
  type: InvestorType;
  dealCount3yr: number;      // total equity deals (primary + secondary)
  ipoAnchors: number;        // IPO anchor book participations
  equityAumCr: number;       // equity AUM in ₹ Crore (latest)
  netBuySellCr: number;      // net buy(+)/sell(-) over 3 years in ₹ Cr
  fy22Deals: number;
  fy23Deals: number;
  fy24Deals: number;
  fy25Deals: number;
  hq: string;
  category: string;
}

export const investors: Investor[] = [
  { rank:1,  name:"SBI Mutual Fund",        type:"MF",        dealCount3yr:312, ipoAnchors:58, equityAumCr:910000, netBuySellCr:48200,  fy22Deals:62, fy23Deals:71, fy24Deals:88, fy25Deals:91,  hq:"Mumbai",   category:"Public Sector MF" },
  { rank:2,  name:"ICICI Pru MF",           type:"MF",        dealCount3yr:287, ipoAnchors:54, equityAumCr:780000, netBuySellCr:41600,  fy22Deals:58, fy23Deals:66, fy24Deals:81, fy25Deals:82,  hq:"Mumbai",   category:"Private MF" },
  { rank:3,  name:"Nippon India MF",        type:"MF",        dealCount3yr:241, ipoAnchors:46, equityAumCr:480000, netBuySellCr:29800,  fy22Deals:48, fy23Deals:55, fy24Deals:68, fy25Deals:70,  hq:"Mumbai",   category:"Private MF" },
  { rank:4,  name:"HDFC Mutual Fund",       type:"MF",        dealCount3yr:234, ipoAnchors:51, equityAumCr:690000, netBuySellCr:38100,  fy22Deals:47, fy23Deals:54, fy24Deals:66, fy25Deals:67,  hq:"Mumbai",   category:"Private MF" },
  { rank:5,  name:"Kotak Mahindra MF",      type:"MF",        dealCount3yr:198, ipoAnchors:38, equityAumCr:390000, netBuySellCr:21400,  fy22Deals:39, fy23Deals:46, fy24Deals:56, fy25Deals:57,  hq:"Mumbai",   category:"Private MF" },
  { rank:6,  name:"GQG Partners",           type:"FII",       dealCount3yr:187, ipoAnchors:12, equityAumCr:180000, netBuySellCr:32700,  fy22Deals:28, fy23Deals:41, fy24Deals:58, fy25Deals:60,  hq:"Florida",  category:"Hedge Fund" },
  { rank:7,  name:"Axis MF",                type:"MF",        dealCount3yr:176, ipoAnchors:36, equityAumCr:270000, netBuySellCr:14300,  fy22Deals:35, fy23Deals:41, fy24Deals:50, fy25Deals:50,  hq:"Mumbai",   category:"Private MF" },
  { rank:8,  name:"Mirae Asset MF",         type:"MF",        dealCount3yr:163, ipoAnchors:31, equityAumCr:190000, netBuySellCr:12100,  fy22Deals:32, fy23Deals:38, fy24Deals:46, fy25Deals:47,  hq:"Mumbai",   category:"Foreign MF" },
  { rank:9,  name:"LIC of India",           type:"Insurance", dealCount3yr:158, ipoAnchors:28, equityAumCr:1240000,netBuySellCr:55000,  fy22Deals:31, fy23Deals:36, fy24Deals:45, fy25Deals:46,  hq:"Mumbai",   category:"Public Insurer" },
  { rank:10, name:"Franklin Templeton FPI", type:"FII",       dealCount3yr:144, ipoAnchors:9,  equityAumCr:90000,  netBuySellCr:8200,   fy22Deals:29, fy23Deals:33, fy24Deals:41, fy25Deals:41,  hq:"California",category:"Global MF/FII" },
  { rank:11, name:"DSP Mutual Fund",        type:"MF",        dealCount3yr:139, ipoAnchors:27, equityAumCr:130000, netBuySellCr:9600,   fy22Deals:28, fy23Deals:32, fy24Deals:39, fy25Deals:40,  hq:"Mumbai",   category:"Private MF" },
  { rank:12, name:"Vanguard Emerging Mkts", type:"FII",       dealCount3yr:134, ipoAnchors:4,  equityAumCr:210000, netBuySellCr:-6400,  fy22Deals:34, fy23Deals:33, fy24Deals:35, fy25Deals:32,  hq:"Pennsylvania",category:"Passive ETF" },
  { rank:13, name:"UTI Mutual Fund",        type:"MF",        dealCount3yr:128, ipoAnchors:24, equityAumCr:120000, netBuySellCr:7800,   fy22Deals:26, fy23Deals:29, fy24Deals:36, fy25Deals:37,  hq:"Mumbai",   category:"Public Sector MF" },
  { rank:14, name:"BlackRock / iShares",    type:"FII",       dealCount3yr:121, ipoAnchors:7,  equityAumCr:150000, netBuySellCr:11200,  fy22Deals:24, fy23Deals:28, fy24Deals:34, fy25Deals:35,  hq:"New York", category:"Global Asset Mgr" },
  { rank:15, name:"HDFC Life Insurance",    type:"Insurance", dealCount3yr:118, ipoAnchors:21, equityAumCr:230000, netBuySellCr:18700,  fy22Deals:23, fy23Deals:27, fy24Deals:34, fy25Deals:34,  hq:"Mumbai",   category:"Private Insurer" },
  { rank:16, name:"Invesco India MF",       type:"MF",        dealCount3yr:112, ipoAnchors:19, equityAumCr:80000,  netBuySellCr:5100,   fy22Deals:22, fy23Deals:26, fy24Deals:32, fy25Deals:32,  hq:"Mumbai",   category:"Foreign MF" },
  { rank:17, name:"Norges Bank (Norway)",   type:"FII",       dealCount3yr:108, ipoAnchors:3,  equityAumCr:70000,  netBuySellCr:4900,   fy22Deals:26, fy23Deals:27, fy24Deals:28, fy25Deals:27,  hq:"Oslo",     category:"Sovereign Fund" },
  { rank:18, name:"SBI Life Insurance",     type:"Insurance", dealCount3yr:102, ipoAnchors:18, equityAumCr:180000, netBuySellCr:14200,  fy22Deals:20, fy23Deals:23, fy24Deals:29, fy25Deals:30,  hq:"Mumbai",   category:"Private Insurer" },
  { rank:19, name:"Morgan Stanley FPI",     type:"FII",       dealCount3yr:98,  ipoAnchors:11, equityAumCr:60000,  netBuySellCr:3800,   fy22Deals:19, fy23Deals:23, fy24Deals:28, fy25Deals:28,  hq:"New York", category:"Investment Bank" },
  { rank:20, name:"Tata Mutual Fund",       type:"MF",        dealCount3yr:94,  ipoAnchors:18, equityAumCr:70000,  netBuySellCr:5600,   fy22Deals:19, fy23Deals:21, fy24Deals:27, fy25Deals:27,  hq:"Mumbai",   category:"Private MF" },
  { rank:21, name:"Goldman Sachs FPI",      type:"FII",       dealCount3yr:91,  ipoAnchors:8,  equityAumCr:50000,  netBuySellCr:2900,   fy22Deals:18, fy23Deals:21, fy24Deals:26, fy25Deals:26,  hq:"New York", category:"Investment Bank" },
  { rank:22, name:"Sundaram MF",            type:"MF",        dealCount3yr:88,  ipoAnchors:16, equityAumCr:60000,  netBuySellCr:4200,   fy22Deals:17, fy23Deals:20, fy24Deals:25, fy25Deals:26,  hq:"Chennai",  category:"Private MF" },
  { rank:23, name:"ICICI Pru Life Ins",     type:"Insurance", dealCount3yr:86,  ipoAnchors:15, equityAumCr:150000, netBuySellCr:11900,  fy22Deals:17, fy23Deals:20, fy24Deals:24, fy25Deals:25,  hq:"Mumbai",   category:"Private Insurer" },
  { rank:24, name:"Edelweiss AIF",          type:"AIF",       dealCount3yr:81,  ipoAnchors:22, equityAumCr:40000,  netBuySellCr:3100,   fy22Deals:14, fy23Deals:17, fy24Deals:23, fy25Deals:27,  hq:"Mumbai",   category:"Category III AIF" },
  { rank:25, name:"Whiteoak Capital",       type:"AIF",       dealCount3yr:78,  ipoAnchors:19, equityAumCr:30000,  netBuySellCr:2400,   fy22Deals:12, fy23Deals:16, fy24Deals:22, fy25Deals:28,  hq:"Mumbai",   category:"Category III AIF" },
  { rank:26, name:"Fidelity (FPI)",         type:"FII",       dealCount3yr:74,  ipoAnchors:6,  equityAumCr:80000,  netBuySellCr:6100,   fy22Deals:18, fy23Deals:18, fy24Deals:19, fy25Deals:19,  hq:"Boston",   category:"Global MF/FII" },
  { rank:27, name:"PGIM India MF",          type:"MF",        dealCount3yr:71,  ipoAnchors:14, equityAumCr:40000,  netBuySellCr:2900,   fy22Deals:14, fy23Deals:16, fy24Deals:20, fy25Deals:21,  hq:"Mumbai",   category:"Foreign MF" },
  { rank:28, name:"360 ONE AIF",            type:"AIF",       dealCount3yr:68,  ipoAnchors:17, equityAumCr:30000,  netBuySellCr:2200,   fy22Deals:11, fy23Deals:14, fy24Deals:19, fy25Deals:24,  hq:"Mumbai",   category:"Category III AIF" },
  { rank:29, name:"Aditya Birla SL MF",     type:"MF",        dealCount3yr:66,  ipoAnchors:13, equityAumCr:110000, netBuySellCr:7100,   fy22Deals:13, fy23Deals:15, fy24Deals:19, fy25Deals:19,  hq:"Mumbai",   category:"Private MF" },
  { rank:30, name:"HSBC Mutual Fund",       type:"MF",        dealCount3yr:62,  ipoAnchors:12, equityAumCr:30000,  netBuySellCr:2100,   fy22Deals:12, fy23Deals:14, fy24Deals:18, fy25Deals:18,  hq:"Mumbai",   category:"Foreign MF" },
];

// ── 2. IPO DATA ───────────────────────────────────────────────────────────────
export interface IPO {
  rank: number;
  company: string;
  sector: string;
  sizeCr: number;
  fiscalYear: string;
  listingGainPct: number;
  qibSubscriptionX: number;
  topAnchor: string;
  fiiAllocPct: number;
  mfAllocPct: number;
  insuranceAllocPct: number;
  exchange: "NSE" | "BSE" | "Both";
  category: "Mainboard" | "SME";
  currentReturnPct: number;    // from listing to Mar 2025
}

export const ipos: IPO[] = [
  { rank:1,  company:"Hyundai Motor India",     sector:"Automobile",     sizeCr:27870, fiscalYear:"FY25", listingGainPct:1,   qibSubscriptionX:6.97,  topAnchor:"GQG Partners",    fiiAllocPct:41, mfAllocPct:31, insuranceAllocPct:18, exchange:"NSE",  category:"Mainboard", currentReturnPct:-8   },
  { rank:2,  company:"LIC of India",            sector:"Insurance",      sizeCr:21008, fiscalYear:"FY22", listingGainPct:9,   qibSubscriptionX:2.83,  topAnchor:"SBI MF",          fiiAllocPct:28, mfAllocPct:42, insuranceAllocPct:22, exchange:"Both", category:"Mainboard", currentReturnPct:54   },
  { rank:3,  company:"Swiggy",                  sector:"Technology",     sizeCr:11327, fiscalYear:"FY25", listingGainPct:-8,  qibSubscriptionX:3.59,  topAnchor:"Mirae Asset",     fiiAllocPct:38, mfAllocPct:34, insuranceAllocPct:12, exchange:"Both", category:"Mainboard", currentReturnPct:-22  },
  { rank:4,  company:"Paytm (One97)",           sector:"Fintech",        sizeCr:18300, fiscalYear:"FY22", listingGainPct:-27, qibSubscriptionX:1.89,  topAnchor:"BlackRock",       fiiAllocPct:35, mfAllocPct:29, insuranceAllocPct:14, exchange:"Both", category:"Mainboard", currentReturnPct:-62  },
  { rank:5,  company:"Bajaj Housing Finance",   sector:"NBFC",           sizeCr:6560,  fiscalYear:"FY25", listingGainPct:114, qibSubscriptionX:63.61, topAnchor:"ICICI Pru MF",    fiiAllocPct:26, mfAllocPct:48, insuranceAllocPct:16, exchange:"Both", category:"Mainboard", currentReturnPct:88   },
  { rank:6,  company:"Ola Electric Mobility",   sector:"EV / Clean Tech",sizeCr:6145,  fiscalYear:"FY25", listingGainPct:-18, qibSubscriptionX:4.27,  topAnchor:"SBI MF",          fiiAllocPct:22, mfAllocPct:38, insuranceAllocPct:18, exchange:"NSE",  category:"Mainboard", currentReturnPct:-44  },
  { rank:7,  company:"Zomato",                  sector:"Foodtech",       sizeCr:9375,  fiscalYear:"FY22", listingGainPct:66,  qibSubscriptionX:38.25, topAnchor:"Morgan Stanley",  fiiAllocPct:44, mfAllocPct:32, insuranceAllocPct:10, exchange:"Both", category:"Mainboard", currentReturnPct:148  },
  { rank:8,  company:"Tata Technologies",       sector:"IT Services",    sizeCr:3042,  fiscalYear:"FY24", listingGainPct:140, qibSubscriptionX:69.43, topAnchor:"HDFC MF",         fiiAllocPct:19, mfAllocPct:54, insuranceAllocPct:17, exchange:"Both", category:"Mainboard", currentReturnPct:62   },
  { rank:9,  company:"NTPC Green Energy",       sector:"Renewables",     sizeCr:10000, fiscalYear:"FY25", listingGainPct:3,   qibSubscriptionX:2.55,  topAnchor:"LIC",             fiiAllocPct:24, mfAllocPct:41, insuranceAllocPct:28, exchange:"Both", category:"Mainboard", currentReturnPct:12   },
  { rank:10, company:"Mankind Pharma",          sector:"Pharma",         sizeCr:4326,  fiscalYear:"FY23", listingGainPct:20,  qibSubscriptionX:16.74, topAnchor:"SBI MF",          fiiAllocPct:31, mfAllocPct:44, insuranceAllocPct:15, exchange:"Both", category:"Mainboard", currentReturnPct:41   },
  { rank:11, company:"Delhivery",               sector:"Logistics",      sizeCr:5235,  fiscalYear:"FY22", listingGainPct:-9,  qibSubscriptionX:1.63,  topAnchor:"GQG Partners",    fiiAllocPct:40, mfAllocPct:28, insuranceAllocPct:12, exchange:"Both", category:"Mainboard", currentReturnPct:-38  },
  { rank:12, company:"Nykaa (FSN E-Commerce)",  sector:"Beauty Tech",    sizeCr:5352,  fiscalYear:"FY22", listingGainPct:96,  qibSubscriptionX:91.18, topAnchor:"Fidelity",        fiiAllocPct:42, mfAllocPct:31, insuranceAllocPct:14, exchange:"Both", category:"Mainboard", currentReturnPct:-28  },
  { rank:13, company:"IREDA",                   sector:"Green Finance",  sizeCr:2150,  fiscalYear:"FY24", listingGainPct:56,  qibSubscriptionX:38.81, topAnchor:"Nippon MF",       fiiAllocPct:17, mfAllocPct:52, insuranceAllocPct:21, exchange:"Both", category:"Mainboard", currentReturnPct:112  },
  { rank:14, company:"JSW Infrastructure",      sector:"Ports & Infra",  sizeCr:2800,  fiscalYear:"FY24", listingGainPct:25,  qibSubscriptionX:21.44, topAnchor:"HDFC Life",       fiiAllocPct:21, mfAllocPct:46, insuranceAllocPct:23, exchange:"Both", category:"Mainboard", currentReturnPct:38   },
  { rank:15, company:"Waaree Energies",         sector:"Solar / Renewables",sizeCr:4321,fiscalYear:"FY25",listingGainPct:68,  qibSubscriptionX:42.28, topAnchor:"Whiteoak AIF",    fiiAllocPct:12, mfAllocPct:58, insuranceAllocPct:14, exchange:"Both", category:"Mainboard", currentReturnPct:91   },
  { rank:16, company:"Premier Energies",        sector:"Solar",          sizeCr:2830,  fiscalYear:"FY25", listingGainPct:88,  qibSubscriptionX:74.11, topAnchor:"360 ONE AIF",     fiiAllocPct:12, mfAllocPct:61, insuranceAllocPct:12, exchange:"Both", category:"Mainboard", currentReturnPct:74   },
  { rank:17, company:"DOMS Industries",         sector:"Stationery",     sizeCr:1200,  fiscalYear:"FY24", listingGainPct:118, qibSubscriptionX:93.64, topAnchor:"Axis MF",         fiiAllocPct:14, mfAllocPct:58, insuranceAllocPct:14, exchange:"Both", category:"Mainboard", currentReturnPct:144  },
  { rank:18, company:"Go Digit Insurance",      sector:"Insurtech",      sizeCr:2615,  fiscalYear:"FY24", listingGainPct:22,  qibSubscriptionX:11.29, topAnchor:"Nippon MF",       fiiAllocPct:19, mfAllocPct:48, insuranceAllocPct:20, exchange:"NSE",  category:"Mainboard", currentReturnPct:18   },
  { rank:19, company:"Firstcry (Brainbees)",    sector:"Ecommerce",      sizeCr:4193,  fiscalYear:"FY25", listingGainPct:-17, qibSubscriptionX:1.88,  topAnchor:"Vanguard",        fiiAllocPct:36, mfAllocPct:31, insuranceAllocPct:14, exchange:"Both", category:"Mainboard", currentReturnPct:-28  },
  { rank:20, company:"Vedant Fashions",         sector:"Retail",         sizeCr:3149,  fiscalYear:"FY22", listingGainPct:33,  qibSubscriptionX:4.89,  topAnchor:"Kotak MF",        fiiAllocPct:18, mfAllocPct:51, insuranceAllocPct:18, exchange:"Both", category:"Mainboard", currentReturnPct:8    },
];

// ── 3. STOCK PERFORMANCE ──────────────────────────────────────────────────────
export interface StockPerformance {
  company: string;
  ticker: string;
  segment: MarketCap;
  sector: string;
  twoYrReturnPct: number;
  benchmarkReturnPct: number;   // Nifty50 / Midcap150 / Smallcap250 / Microcap250
  benchmarkName: string;
  sectorIndexReturnPct: number;
  sectorIndexName: string;
  alphaBps: number;             // vs benchmark
  sectorAlphaBps: number;       // vs sector index
  marketCapCr: number;
  peRatio: number;
  institutionalHoldingPct: number;
}

export const stocks: StockPerformance[] = [
  // LARGE CAP
  { company:"Tata Motors",       ticker:"TATAMOTORS", segment:"Large", sector:"Automobile",    twoYrReturnPct:142, benchmarkReturnPct:38, benchmarkName:"Nifty 50",      sectorIndexReturnPct:61,  sectorIndexName:"Nifty Auto",        alphaBps:10400, sectorAlphaBps:8100,  marketCapCr:384000, peRatio:9.1,  institutionalHoldingPct:42 },
  { company:"Adani Ports",       ticker:"ADANIPORTS", segment:"Large", sector:"Infrastructure",twoYrReturnPct:89,  benchmarkReturnPct:38, benchmarkName:"Nifty 50",      sectorIndexReturnPct:44,  sectorIndexName:"Nifty Infra",       alphaBps:5100, sectorAlphaBps:4500,  marketCapCr:298000, peRatio:28.4, institutionalHoldingPct:28 },
  { company:"HDFC Bank",         ticker:"HDFCBANK",   segment:"Large", sector:"Banking",       twoYrReturnPct:12,  benchmarkReturnPct:38, benchmarkName:"Nifty 50",      sectorIndexReturnPct:29,  sectorIndexName:"Nifty Bank",        alphaBps:-2600,sectorAlphaBps:-1700, marketCapCr:1248000,peRatio:17.2, institutionalHoldingPct:71 },
  { company:"Reliance Industries",ticker:"RELIANCE",  segment:"Large", sector:"Conglomerate",  twoYrReturnPct:31,  benchmarkReturnPct:38, benchmarkName:"Nifty 50",      sectorIndexReturnPct:38,  sectorIndexName:"Nifty 50",          alphaBps:-700, sectorAlphaBps:-700,  marketCapCr:1724000,peRatio:24.8, institutionalHoldingPct:31 },
  { company:"Infosys",           ticker:"INFY",       segment:"Large", sector:"IT",            twoYrReturnPct:22,  benchmarkReturnPct:38, benchmarkName:"Nifty 50",      sectorIndexReturnPct:18,  sectorIndexName:"Nifty IT",          alphaBps:-1600,sectorAlphaBps:400,   marketCapCr:731000, peRatio:22.1, institutionalHoldingPct:58 },
  { company:"Bharti Airtel",     ticker:"BHARTIARTL", segment:"Large", sector:"Telecom",       twoYrReturnPct:96,  benchmarkReturnPct:38, benchmarkName:"Nifty 50",      sectorIndexReturnPct:72,  sectorIndexName:"Nifty Telecom",     alphaBps:5800, sectorAlphaBps:2400,  marketCapCr:942000, peRatio:71.2, institutionalHoldingPct:49 },
  { company:"ITC Ltd",           ticker:"ITC",        segment:"Large", sector:"FMCG",          twoYrReturnPct:28,  benchmarkReturnPct:38, benchmarkName:"Nifty 50",      sectorIndexReturnPct:14,  sectorIndexName:"Nifty FMCG",        alphaBps:-1000,sectorAlphaBps:1400,  marketCapCr:524000, peRatio:28.6, institutionalHoldingPct:44 },
  // MID CAP
  { company:"BSE Ltd",           ticker:"BSE",        segment:"Mid",   sector:"Financial Svcs", twoYrReturnPct:318, benchmarkReturnPct:62, benchmarkName:"Nifty Midcap 150",sectorIndexReturnPct:71, sectorIndexName:"Nifty Fin Services",alphaBps:25600,sectorAlphaBps:24700, marketCapCr:42000,  peRatio:68.1, institutionalHoldingPct:34 },
  { company:"Mazagon Dock",      ticker:"MAZDOCK",    segment:"Mid",   sector:"Defence",       twoYrReturnPct:274, benchmarkReturnPct:62, benchmarkName:"Nifty Midcap 150",sectorIndexReturnPct:95, sectorIndexName:"Nifty India Defence",alphaBps:21200,sectorAlphaBps:17900, marketCapCr:78000,  peRatio:44.2, institutionalHoldingPct:18 },
  { company:"IRFC",              ticker:"IRFC",       segment:"Mid",   sector:"NBFC",          twoYrReturnPct:189, benchmarkReturnPct:62, benchmarkName:"Nifty Midcap 150",sectorIndexReturnPct:71, sectorIndexName:"Nifty Fin Services",alphaBps:12700,sectorAlphaBps:11800, marketCapCr:196000, peRatio:31.8, institutionalHoldingPct:22 },
  { company:"Kaynes Technology",  ticker:"KAYNES",     segment:"Mid",   sector:"Electronics",   twoYrReturnPct:156, benchmarkReturnPct:62, benchmarkName:"Nifty Midcap 150",sectorIndexReturnPct:88, sectorIndexName:"Nifty India Mfg",   alphaBps:9400, sectorAlphaBps:6800,  marketCapCr:24000,  peRatio:91.4, institutionalHoldingPct:41 },
  { company:"Indian Hotels",     ticker:"INDHOTEL",   segment:"Mid",   sector:"Hospitality",   twoYrReturnPct:121, benchmarkReturnPct:62, benchmarkName:"Nifty Midcap 150",sectorIndexReturnPct:79, sectorIndexName:"Nifty Consum Durable",alphaBps:5900,sectorAlphaBps:4200, marketCapCr:78000,  peRatio:62.8, institutionalHoldingPct:51 },
  { company:"Persistent Systems", ticker:"PERSISTENT",segment:"Mid",   sector:"IT",            twoYrReturnPct:94,  benchmarkReturnPct:62, benchmarkName:"Nifty Midcap 150",sectorIndexReturnPct:18, sectorIndexName:"Nifty IT",          alphaBps:3200, sectorAlphaBps:7600,  marketCapCr:84000,  peRatio:58.1, institutionalHoldingPct:62 },
  // SMALL CAP
  { company:"Waaree Energies",   ticker:"WAAREEENER", segment:"Small", sector:"Solar",         twoYrReturnPct:241, benchmarkReturnPct:83, benchmarkName:"Nifty Smallcap 250",sectorIndexReturnPct:112,sectorIndexName:"Nifty Energy",     alphaBps:15800,sectorAlphaBps:12900, marketCapCr:71000,  peRatio:44.8, institutionalHoldingPct:29 },
  { company:"Apar Industries",   ticker:"APARINDS",   segment:"Small", sector:"Cables & Wires",twoYrReturnPct:198, benchmarkReturnPct:83, benchmarkName:"Nifty Smallcap 250",sectorIndexReturnPct:88, sectorIndexName:"Nifty India Mfg",   alphaBps:11500,sectorAlphaBps:11000, marketCapCr:22000,  peRatio:28.9, institutionalHoldingPct:24 },
  { company:"Ami Organics",      ticker:"AMIORG",     segment:"Small", sector:"Pharma",        twoYrReturnPct:87,  benchmarkReturnPct:83, benchmarkName:"Nifty Smallcap 250",sectorIndexReturnPct:61, sectorIndexName:"Nifty Pharma",      alphaBps:400,  sectorAlphaBps:2600,  marketCapCr:9800,   peRatio:41.2, institutionalHoldingPct:18 },
  { company:"Shyam Metalics",    ticker:"SHYAMMETL",  segment:"Small", sector:"Metals",        twoYrReturnPct:-12, benchmarkReturnPct:83, benchmarkName:"Nifty Smallcap 250",sectorIndexReturnPct:71, sectorIndexName:"Nifty Metal",       alphaBps:-9500,sectorAlphaBps:-8300, marketCapCr:14000,  peRatio:14.1, institutionalHoldingPct:12 },
  { company:"Epigamia (Drums)",  ticker:"EPIGAMIA",   segment:"Small", sector:"FMCG",          twoYrReturnPct:44,  benchmarkReturnPct:83, benchmarkName:"Nifty Smallcap 250",sectorIndexReturnPct:14, sectorIndexName:"Nifty FMCG",        alphaBps:-3900,sectorAlphaBps:3000,  marketCapCr:3200,   peRatio:88.4, institutionalHoldingPct:9  },
  // MICRO CAP
  { company:"Syrma SGS Tech",    ticker:"SYRMA",      segment:"Micro", sector:"Electronics",   twoYrReturnPct:112, benchmarkReturnPct:61, benchmarkName:"Nifty Microcap 250",sectorIndexReturnPct:88,sectorIndexName:"Nifty India Mfg",   alphaBps:5100, sectorAlphaBps:2400,  marketCapCr:7200,   peRatio:48.9, institutionalHoldingPct:22 },
  { company:"MTAR Technologies", ticker:"MTARTECH",   segment:"Micro", sector:"Defence",       twoYrReturnPct:68,  benchmarkReturnPct:61, benchmarkName:"Nifty Microcap 250",sectorIndexReturnPct:95,sectorIndexName:"Nifty India Defence",alphaBps:700,  sectorAlphaBps:-2700, marketCapCr:4800,   peRatio:62.1, institutionalHoldingPct:31 },
  { company:"Ideaforge Technology",ticker:"IDEAFORGE", segment:"Micro", sector:"Drones",        twoYrReturnPct:-54, benchmarkReturnPct:61, benchmarkName:"Nifty Microcap 250",sectorIndexReturnPct:95,sectorIndexName:"Nifty India Defence",alphaBps:-11500,sectorAlphaBps:-14900,marketCapCr:1200,   peRatio:-1,   institutionalHoldingPct:14 },
  { company:"Tracxn Technologies",ticker:"TRACXN",    segment:"Micro", sector:"SaaS",          twoYrReturnPct:-41, benchmarkReturnPct:61, benchmarkName:"Nifty Microcap 250",sectorIndexReturnPct:18,sectorIndexName:"Nifty IT",          alphaBps:-10200,sectorAlphaBps:-5900, marketCapCr:2100,   peRatio:88.2, institutionalHoldingPct:8  },
];

// ── 4. AGGREGATE STATS ────────────────────────────────────────────────────────
export const overview = {
  totalInstitutions: 87,
  totalIPOs: 183,
  mainboardIPOs: 74,
  smeIPOs: 109,
  totalIPOCorpusCr: 213000,
  fiiNetInflowCr: 190000,
  sipAumCr: 1310000,
  nifty3yrReturn: 38,
  aumTrend: {
    labels: ["FY22", "FY23", "FY24", "FY25"],
    domesticMF:   [14.2, 19.1, 27.8, 37.1],
    fiiHoldings:  [55.1, 49.8, 62.4, 68.9],
    insurance:    [10.8, 12.1, 14.9, 17.3],
  },
  ipoVolume: {
    labels: ["FY22", "FY23", "FY24", "FY25"],
    volumeCr: [59302, 52116, 67000, 81200],
    ipoCount: [40, 37, 57, 49],
  },
  segmentReturns: {
    labels: ["Large Cap", "Mid Cap", "Small Cap", "Micro Cap"],
    avgStockReturn:    [34, 87, 102, 58],
    segmentIndex:      [38, 62, 83,  61],
    indexName: ["Nifty 50", "Nifty Midcap 150", "Nifty Smallcap 250", "Nifty Microcap 250"],
  },
};
