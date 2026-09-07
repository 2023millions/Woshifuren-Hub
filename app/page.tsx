import { VideoPlayer } from "@/components/video-player";

const icons = { trend: "↗", sparkle: "✦", arrow: "→", play: "▶", chart: "⌁", list: "☷", shield: "◇", clock: "◷", video: "▻", check: "✓" } as const;
function Icon({ name, className = "" }: { name: keyof typeof icons; className?: string }) { return <span aria-hidden="true" className={className}>{icons[name]}</span>; }

const lessons = [
  { no: "01", title: "理解市场与投资者思维", detail: "建立正确的市场认知，找到适合自己的投资方式", time: "32 分钟" },
  { no: "02", title: "读懂公司与财务数字", detail: "从商业模式到财务报表，判断一家公司的真实价值", time: "45 分钟" },
  { no: "03", title: "技术分析与市场节奏", detail: "认识趋势、价格与成交量背后的市场语言", time: "38 分钟" },
  { no: "04", title: "期权基础与策略框架", detail: "从零理解期权，认识风险、收益与常见策略", time: "52 分钟" },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10 text-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3 font-bold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/50 text-gold"><Icon name="trend" /></span>
            <span>Woshifuren <span className="font-normal text-white/60">Hub</span></span>
          </a>
          <nav className="hidden items-center gap-9 text-sm text-white/70 md:flex" aria-label="主导航">
            <a href="#course" className="transition hover:text-white">课程介绍</a>
            <a href="#curriculum" className="transition hover:text-white">课程目录</a>
            <a href="#lesson" className="transition hover:text-white">试听课程</a>
          </nav>
          <a href="#lesson" className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium transition hover:bg-white hover:text-ink">免费试看</a>
        </div>
      </header>

      <section className="relative bg-ink pb-24 pt-40 text-white sm:pb-32 sm:pt-48">
        <div className="grid-fade absolute inset-0 opacity-50" />
        <div className="absolute -right-24 top-28 h-80 w-80 rounded-full bg-jade/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-xs font-medium tracking-widest text-[#ecd3a6]">
              <Icon name="sparkle" /> 系统化投资教育平台
            </div>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.15] tracking-[-0.04em] sm:text-6xl lg:text-7xl">看懂市场，<br /><span className="text-[#d9b979]">建立自己的投资体系</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">不追逐消息，不依赖运气。从底层逻辑到策略实践，用一套清晰、可复用的方法，帮助你做出更理性的投资决策。</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#course" className="group inline-flex items-center gap-3 rounded-full bg-jade px-7 py-4 font-semibold shadow-lg transition hover:bg-[#17806a]">探索课程 <Icon name="arrow" className="transition group-hover:translate-x-1" /></a>
              <a href="#lesson" className="inline-flex items-center gap-3 px-4 py-4 text-sm font-medium text-white/80 hover:text-white"><span className="grid h-10 w-10 place-items-center rounded-full border border-white/25"><Icon name="play" /></span>观看免费课</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="absolute -inset-5 rotate-3 rounded-[2rem] border border-white/10" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[.06] p-7 shadow-2xl backdrop-blur">
              <div className="mb-10 flex items-start justify-between"><span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink">核心课程</span><Icon name="chart" className="text-3xl text-gold" /></div>
              <p className="text-sm tracking-widest text-white/45">WOSHIFUREN INVESTING</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight">从零构建<br />股票投资认知</h2>
              <div className="my-8 h-px bg-white/10" />
              <div className="grid grid-cols-2 gap-5 text-sm"><div><p className="text-2xl font-semibold">4</p><p className="mt-1 text-white/45">核心模块</p></div><div><p className="text-2xl font-semibold">16+</p><p className="mt-1 text-white/45">系统课时</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="course" className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div><p className="mb-5 text-sm font-bold tracking-[.25em] text-jade">为什么学习这门课</p><h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">投资不是预测未来，<br />而是管理不确定性</h2></div>
            <div className="text-base leading-8 text-black/55"><p>面对纷杂的市场信息，真正重要的不是寻找一个“标准答案”，而是建立判断框架。Woshifuren Hub 将复杂的投资知识拆解成清晰、循序渐进的学习路径。</p><p className="mt-4">我们专注于长期有效的认知与方法，帮助你理解机会，也尊重风险。</p></div>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              ["list", "结构化路径", "从基础概念到策略应用，按认知规律设计课程，不再碎片化学习。"],
              ["chart", "实用的框架", "用真实市场视角理解投资，将所学转化为可执行的分析方法。"],
              ["shield", "风险优先", "不承诺收益，不鼓励投机，把风险意识融入每一个投资决策。"],
            ].map(([icon, title, text], i) => <article key={title} className="rounded-2xl border border-black/[.07] bg-white p-8 transition hover:-translate-y-1 hover:shadow-soft"><span className="mb-8 grid h-12 w-12 place-items-center rounded-xl bg-jade/10 text-xl text-jade"><Icon name={icon as keyof typeof icons} /></span><p className="mb-3 text-xs font-bold text-gold">0{i+1}</p><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-black/50">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="curriculum" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mb-14 text-center"><p className="text-sm font-bold tracking-[.25em] text-jade">课程大纲</p><h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">一步一步，构建完整认知</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-black/50">每个模块都围绕一个关键能力展开，让学习路径清楚，让进步真实可见。</p></div>
          <div className="divide-y divide-black/[.07] border-y border-black/[.07]">
            {lessons.map((lesson) => <div key={lesson.no} className="group grid gap-4 py-7 sm:grid-cols-[70px_1fr_auto] sm:items-center"><span className="font-semibold text-jade/45">{lesson.no}</span><div><h3 className="text-lg font-bold transition group-hover:text-jade">{lesson.title}</h3><p className="mt-2 text-sm text-black/45">{lesson.detail}</p></div><span className="flex items-center gap-2 text-xs text-black/40"><Icon name="clock" />{lesson.time}</span></div>)}
          </div>
        </div>
      </section>

      <section id="lesson" className="bg-ink py-24 text-white sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="flex items-center gap-2 text-sm font-bold tracking-[.2em] text-gold"><Icon name="video" /> 免费试听</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">什么是期权[1]</h2></div><div className="flex gap-5 text-sm text-white/45"><span className="flex items-center gap-2"><Icon name="clock" /> 12 分钟</span><span>模块 04 · 第 01 课</span></div></div>
          <VideoPlayer title="什么是期权[1]" />
          <div className="mt-8 grid gap-6 rounded-2xl border border-white/10 bg-white/[.04] p-7 sm:grid-cols-[1fr_auto] sm:items-center"><div><h3 className="font-semibold">本节你将学到</h3><div className="mt-4 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/55"><span className="flex items-center gap-2"><Icon name="check" className="text-gold" />期权的基本定义</span><span className="flex items-center gap-2"><Icon name="check" className="text-gold" />权利与义务的区别</span><span className="flex items-center gap-2"><Icon name="check" className="text-gold" />常见应用场景</span></div></div><span className="text-xs text-white/30">视频仅供学习测试</span></div>
        </div>
      </section>

      <footer className="bg-[#091310] py-12 text-white/45"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 sm:flex-row sm:items-center sm:px-8"><div><div className="flex items-center gap-2 font-bold text-white"><Icon name="trend" className="text-gold" />Woshifuren Hub</div><p className="mt-3 text-xs">以认知为起点，做理性的长期投资者。</p></div><div className="text-xs leading-6 sm:text-right"><p>课程内容仅供教育用途，不构成任何投资建议。</p><p>© 2026 Woshifuren Hub. All rights reserved.</p></div></div></footer>
    </main>
  );
}
