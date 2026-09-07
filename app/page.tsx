import { VideoPlayer } from "@/components/video-player";

const freeTopics = [
  "如何赚取被动收入",
  "用更少的钱买入股票",
  "上涨、下跌都能找到策略",
  "如何在熊市保护股票资产",
  "熊市如何寻找机会",
  "选股的3大法则",
  "如何估价，理解股票未来价格",
  "怎么看股市图表，找到进场和离场点",
  "如何判断支撑位 & 阻力位",
  "用故事方式了解世界投资家的经典案例",
];

const journey = [
  ["第一步", "建立投资基础认知"],
  ["第二步", "学会选股、估值与技术分析"],
  ["第三步", "理解牛市与熊市的不同策略"],
  ["第四步", "认识期权，以及“买家”和“卖家”的思维"],
  ["第五步", "学习如何把期权应用到投资现金流策略中"],
];

const advancedTopics = [
  "巴菲特投资秘诀",
  "成为富人的秘密",
  "基本面分析",
  "技术面分析",
  "牛市策略",
  "牛市策略 2.0",
  "保护资产策略",
  "期权卖家思维与实战应用",
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-cream">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10 text-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3 font-bold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/50 text-gold" aria-hidden="true">↗</span>
            <span>Woshifuren <span className="font-normal text-white/60">Hub</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex" aria-label="主导航">
            <a href="#free-course" className="transition hover:text-white">免费课程</a>
            <a href="#journey" className="transition hover:text-white">学习路径</a>
            <a href="#full-course" className="transition hover:text-white">完整课程</a>
          </nav>
          <a href="#free-lesson" className="rounded-full border border-white/25 px-4 py-2.5 text-sm font-semibold transition hover:bg-white hover:text-ink">免费试听</a>
        </div>
      </header>

      <section id="top" className="relative bg-ink pb-24 pt-36 text-white sm:pb-32 sm:pt-44">
        <div className="grid-fade absolute inset-0 opacity-60" />
        <div className="absolute -right-28 top-20 h-96 w-96 rounded-full bg-jade/25 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-xs font-semibold tracking-[.18em] text-[#ecd3a6]">✦ 为中文投资者打造的系统课程</p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.12] tracking-[-0.045em] sm:text-6xl lg:text-7xl">看懂市场，<br /><span className="text-[#d9b979]">建立自己的投资体系</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">Woshifuren Hub 帮助普通中文投资者，从认识股票开始，一步一步学习选股、估值、市场策略与风险管理，逐渐建立属于自己的投资与现金流框架。</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#free-lesson" className="group inline-flex items-center justify-center gap-3 rounded-full bg-jade px-7 py-4 font-semibold shadow-lg transition hover:-translate-y-0.5 hover:bg-[#17806a]">免费开始学习 <Arrow /></a>
              <a href="#free-course" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white/85 transition hover:border-white/50 hover:text-white">看看你会学到什么</a>
            </div>
            <p className="mt-5 text-xs text-white/35">无需付费 · 先学习，再决定下一步</p>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="absolute -inset-5 rotate-3 rounded-[2rem] border border-white/10" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[.06] p-7 shadow-2xl backdrop-blur sm:p-9">
              <div className="mb-12 flex items-center justify-between"><span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink">从基础到应用</span><span className="text-3xl text-gold">⌁</span></div>
              <p className="text-xs tracking-[.2em] text-white/40">WOSHIFUREN INVESTING</p>
              <h2 className="mt-4 text-3xl font-semibold leading-snug">不靠预测，<br />用框架理解市场</h2>
              <div className="my-8 h-px bg-white/10" />
              <div className="grid grid-cols-3 gap-3 text-sm"><div><p className="text-xl font-semibold text-gold">选股</p><p className="mt-1 text-white/40">看懂企业</p></div><div><p className="text-xl font-semibold text-gold">策略</p><p className="mt-1 text-white/40">应对市场</p></div><div><p className="text-xl font-semibold text-gold">风控</p><p className="mt-1 text-white/40">保持理性</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="free-course" className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl"><p className="eyebrow">从这里开始</p><h2 className="section-title">免费课程，你会学到什么？</h2><p className="section-copy">把复杂的投资概念拆成容易理解的主题。你不需要任何基础，也能按照清晰的次序开始学习。</p></div>
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {freeTopics.map((topic, index) => (
              <li key={topic} className="group flex min-h-28 items-start gap-5 rounded-2xl border border-black/[.07] bg-white p-6 shadow-[0_1px_0_rgba(15,35,30,.03)] transition hover:-translate-y-1 hover:border-jade/25 hover:shadow-soft">
                <span className="text-xs font-bold tracking-wider text-jade/50">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-semibold leading-7 text-ink">{topic}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="journey" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center"><p className="eyebrow">学习路径</p><h2 className="section-title">循序渐进，把知识连成体系</h2><p className="section-copy mx-auto">不是零散地记住几个技巧，而是从认知、分析到策略应用，建立可持续迭代的投资框架。</p></div>
          <div className="relative mt-16 grid gap-5 lg:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-jade/10 via-jade/50 to-jade/10 lg:block" />
            {journey.map(([step, title], index) => (
              <article key={step} className="relative rounded-2xl border border-black/[.07] bg-cream p-6 lg:border-0 lg:bg-transparent lg:p-3 lg:text-center">
                <span className="relative z-10 inline-grid h-12 w-12 place-items-center rounded-full bg-ink text-sm font-bold text-gold ring-8 ring-white">{index + 1}</span>
                <p className="mt-6 text-xs font-bold tracking-[.18em] text-jade">{step}</p>
                <h3 className="mt-3 font-bold leading-7">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="full-course" className="bg-[#eef1eb] py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-12"><p className="eyebrow">完整课程预览</p><h2 className="section-title">继续深入，理解策略背后的逻辑</h2><p className="section-copy">完整课程从投资大师的思维出发，连接基本面、技术面、市场周期与期权应用，帮助你形成更完整的分析视角。</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {advancedTopics.map((topic, index) => <div key={topic} className="flex items-center gap-4 rounded-2xl border border-black/[.07] bg-white p-6"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-jade/10 text-sm font-bold text-jade">✓</span><div><p className="text-xs text-black/35">进阶主题 {String(index + 1).padStart(2, "0")}</p><h3 className="mt-1 font-bold">{topic}</h3></div></div>)}
          </div>
        </div>
      </section>

      <section id="free-lesson" className="bg-ink py-24 text-white sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-10 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end"><div><p className="eyebrow text-gold">免费试听</p><h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">先免费学，再决定适不适合你</h2><p className="mt-5 max-w-2xl leading-8 text-white/55">通过一堂免费课程，感受我们的讲解方式，并认识期权在投资框架中的基础概念。</p></div><a href="#video" className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-6 py-3.5 font-bold text-ink transition hover:bg-[#e5c991]">免费试听课程 <Arrow /></a></div>
          <div id="video"><VideoPlayer title="什么是期权" /></div>
          <div className="mt-6 flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-6 text-sm sm:flex-row sm:items-center"><p className="font-semibold">免费课程 · 什么是期权</p><p className="text-white/40">认识基本定义，以及期权买家与卖家的不同思维</p></div>
        </div>
      </section>

      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-jade px-7 py-14 text-white shadow-2xl sm:px-14 sm:py-16">
            <div className="grid-fade absolute inset-0 opacity-30" /><div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div><p className="text-xs font-bold tracking-[.22em] text-gold">准备好继续了吗？</p><h2 className="mt-4 text-3xl font-bold sm:text-5xl">Woshifuren Hub 完整课程</h2><p className="mt-5 max-w-2xl leading-8 text-white/65">系统学习投资分析与策略应用，在尊重风险的前提下，逐步完善自己的投资与现金流框架。</p></div>
              <div className="lg:text-right"><p className="text-sm text-white/55">早鸟价</p><p className="mt-1 text-4xl font-bold text-gold">S$398</p><a href="#full-course" className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-ink transition hover:-translate-y-0.5">了解完整课程 <Arrow /></a></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#091310] py-12 text-white/45">
        <div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-center"><div className="flex items-center gap-2 font-bold text-white"><span className="text-gold">↗</span>Woshifuren Hub</div><p className="text-xs">以认知为起点，做理性的长期投资者。</p></div><div className="flex flex-col justify-between gap-5 pt-7 text-xs leading-6 sm:flex-row"><p className="max-w-4xl">Woshifuren Hub 提供的是投资教育内容，不构成任何投资、财务或证券买卖建议。投资涉及风险，任何投资决定应由学员自行判断并承担相应风险。课程不保证任何投资收益。</p><p className="shrink-0">© 2026 Woshifuren Hub</p></div></div>
      </footer>
    </main>
  );
}
