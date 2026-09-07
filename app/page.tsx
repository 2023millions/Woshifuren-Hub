import { VideoPlayer } from "@/components/video-player";

const freeTopics = [
  "如何建立投资现金流思维", "如何用更少的资金参与股票", "如何理解上涨与下跌市场的机会",
  "熊市如何保护自己的股票", "熊市如何寻找潜在机会", "选股的 3 大法则",
  "如何估值，理解股票价格", "怎么看股票图表，寻找进场与离场位置",
  "如何判断支撑位与阻力位", "世界投资家的经典案例",
];

const journey = [
  ["成为富人的秘密", "理解资产、现金流以及期权产生现金流的基本原理"],
  ["选股与基本面", "学习如何理解一家公司，而不是只看股票价格"],
  ["估值", "学习如何思考一家公司的价值与价格"],
  ["技术分析", "理解趋势、进场、离场、支撑位与阻力位"],
  ["不同市场环境", "理解牛市与熊市下不同的投资思考方式"],
  ["资产保护", "学习风险意识以及如何思考保护自己的投资"],
  ["期权与投资现金流", "进一步理解期权如何作为投资策略中的工具"],
];

const faqs = [
  ["这个免费课程真的免费吗？", "是的。你可以先免费体验课程内容，了解教学方式，不需要先购买完整版。"],
  ["没有投资经验可以学习吗？", "可以。课程从基础投资思维开始，适合希望从零建立系统认知的学习者。"],
  ["课程是中文吗？", "是的，Woshifuren Hub 的课程以中文讲解。"],
  ["学习免费课程后一定要购买完整版吗？", "不需要。是否继续学习完整版，完全由你在体验后自行决定。"],
  ["课程是否提供个人投资建议？", "不提供。课程属于投资教育内容，不针对个人情况推荐任何证券或交易。"],
  ["期权是否有风险？", "有。期权是复杂且有风险的金融工具，可能造成部分或全部本金损失，应在充分理解后谨慎参与。"],
];

const fullCourse = ["成为富人的秘密", "基本面分析", "技术面分析", "牛市策略", "牛市策略 2.0", "保护资产策略"];
const suitableFor = ["想系统学习美股投资的人", "不想再靠消息或情绪买股票的人", "想理解基本面与技术面的人", "想学习不同市场环境下投资策略的人", "想进一步了解期权与投资现金流策略的人"];

function Brand() {
  return <span className="flex items-center gap-2.5 font-bold tracking-tight text-white"><span className="grid h-9 w-9 place-items-center rounded-full border border-gold/50 text-gold">↗</span><span>Woshifuren <span className="font-normal text-white/50">Hub</span></span></span>;
}

function Button({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return <a href={href} className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold transition sm:px-7 ${secondary ? "border border-white/20 text-white hover:border-white/50 hover:bg-white/5" : "bg-gold text-ink shadow-[0_12px_40px_rgba(215,174,103,.18)] hover:-translate-y-0.5 hover:bg-[#e3c083]"}`}>{children}<span aria-hidden="true">→</span></a>;
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`mb-4 text-xs font-bold uppercase tracking-[.24em] ${light ? "text-gold" : "text-jade"}`}>{children}</p>;
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-ink text-white">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
          <a href="#top" aria-label="Woshifuren Hub 首页"><Brand /></a>
          <nav className="hidden items-center gap-8 text-sm text-white/60 lg:flex" aria-label="主导航">
            <a className="hover:text-white" href="#free-content">免费课程</a><a className="hover:text-white" href="#journey">学习路径</a><a className="hover:text-white" href="#full-course">完整课程</a><a className="hover:text-white" href="#faq">常见问题</a>
          </nav>
          <a href="#free-course" className="rounded-full bg-gold px-4 py-2.5 text-xs font-bold text-ink transition hover:bg-[#e3c083] sm:px-5 sm:text-sm">免费开始学习</a>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[760px] items-center pb-20 pt-32 sm:pt-40">
        <div className="grid-fade absolute inset-0 opacity-40"/><div className="absolute -right-40 top-24 h-[500px] w-[500px] rounded-full bg-jade/20 blur-3xl"/>
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_.85fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-3.5 py-2 text-[11px] font-semibold tracking-widest text-[#ecd3a6] sm:text-xs"><span>✦</span> 免费投资入门课程</div>
            <h1 className="text-[2.65rem] font-bold leading-[1.14] tracking-[-.045em] sm:text-6xl lg:text-7xl">看懂市场，<br/><span className="text-gold">建立自己的投资体系</span></h1>
            <p className="mt-7 text-base leading-8 text-white/65 sm:text-lg">不靠猜涨跌，不追所谓“明牌”。<br/>从投资思维、选股、估值、技术分析，<br className="hidden sm:block"/>到不同市场环境下的投资策略，<br className="hidden sm:block"/>从零开始建立一套属于自己的投资框架。</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href="#free-course">免费开始学习</Button><Button href="#free-content" secondary>看看你会学到什么</Button></div>
            <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-white/40"><span className="mt-0.5 text-gold">◇</span>适合想真正理解投资，而不是寻找快速致富方法的人。</p>
          </div>
          <div className="relative mx-auto hidden w-full max-w-md lg:block">
            <div className="absolute -inset-5 rotate-3 rounded-[2rem] border border-white/10"/>
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[.055] p-8 shadow-2xl backdrop-blur">
              <div className="mb-16 flex justify-between"><span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink">FREE COURSE</span><span className="text-3xl text-gold">⌁</span></div>
              <p className="text-xs tracking-[.2em] text-white/35">INVEST WITH A FRAMEWORK</p><p className="mt-4 text-3xl font-semibold leading-tight">从理解开始，<br/>而不是从下单开始。</p>
              <div className="mt-9 h-px bg-white/10"/><p className="mt-6 text-sm leading-7 text-white/45">思维 · 选股 · 估值 · 图表 · 风险</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-gold/20 bg-[#132622] py-20 sm:py-28">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(215,174,103,.1),_transparent_65%)]"/>
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div><Eyebrow light>第一课 · 思维起点</Eyebrow><h2 className="text-3xl font-bold leading-tight sm:text-4xl">第一课，先改变你对<br/>“赚钱”的理解</h2><div className="mt-8 h-px w-16 bg-gold"/></div>
          <div className="rounded-3xl border border-gold/20 bg-black/15 p-6 sm:p-10">
            <p className="text-xs tracking-[.3em] text-gold/65">SIGNATURE LESSON</p><h3 className="mt-4 text-4xl font-bold text-gold sm:text-6xl">成为富人的秘密</h3>
            <div className="mt-7 space-y-4 text-sm leading-7 text-white/65 sm:text-base"><p>为什么有些人一直用时间换钱，<br/>而有些人更重视资产、现金流与资本？</p><p>在这一课，你会开始理解富人的赚钱逻辑，以及期权产生现金流的基本原理。</p><p>重点不是让你马上交易，而是先建立一个不同的投资与赚钱思维框架。</p></div>
            <blockquote className="my-7 border-l-2 border-gold pl-5 text-lg font-medium leading-8 text-white">“真正改变的第一步，往往不是操作，而是思维。”</blockquote>
            <Button href="#free-course">免费学习这一课</Button>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 text-ink sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
          <div><Eyebrow>我们的投资观</Eyebrow><h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">投资不是预测未来，<br/>而是管理不确定性</h2></div>
          <div className="space-y-5 text-base leading-8 text-black/55"><p>很多投资新手每天都在问：<br/><strong className="text-xl font-semibold text-ink">“明天会涨还是会跌？”</strong></p><p>Woshifuren Hub 希望带你换一个角度思考。</p><p>从公司、估值、图表、市场环境到风险，一步一步建立自己的判断体系，而不是把投资建立在消息和情绪上。</p></div>
        </div>
      </section>

      <section id="free-content" className="bg-white py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl"><Eyebrow>免费课程内容</Eyebrow><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">免费课程，你将学会什么？</h2><p className="mt-5 leading-7 text-black/50">一次看清学习方向，从投资思维开始，逐步连接分析、策略与风险。</p></div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2">{freeTopics.map((topic, i) => <div key={topic} className="flex min-h-20 items-center gap-4 rounded-xl border border-black/[.07] bg-cream/60 p-5"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-jade text-sm font-bold text-white">✓</span><p className="font-medium leading-6">{topic}</p><span className="ml-auto text-xs text-black/20">{String(i + 1).padStart(2, "0")}</span></div>)}</div>
          <div className="mt-10"><Button href="#free-course">免费开始学习</Button></div>
        </div>
      </section>

      <section id="journey" className="bg-[#0d1917] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8"><Eyebrow light>学习路径</Eyebrow><h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">从这里开始，建立你的投资体系</h2>
          <div className="relative mt-14 lg:ml-4"><div className="absolute bottom-5 left-[23px] top-5 w-px bg-gradient-to-b from-gold via-jade to-white/10 sm:left-[31px]"/>
            <div className="space-y-4">{journey.map(([title, detail], i) => <article key={title} className="relative grid grid-cols-[48px_1fr] gap-4 rounded-2xl border border-white/[.07] bg-white/[.035] p-4 transition hover:border-gold/25 sm:grid-cols-[64px_1fr] sm:gap-7 sm:p-6"><span className="z-10 grid h-12 w-12 place-items-center rounded-full border border-gold/35 bg-[#0d1917] text-xs font-bold text-gold sm:h-16 sm:w-16">{String(i + 1).padStart(2, "0")}</span><div className="py-1 sm:py-2"><h3 className="text-lg font-semibold sm:text-xl">{title}</h3><p className="mt-2 text-sm leading-6 text-white/45">{detail}</p></div></article>)}</div>
          </div>
        </div>
      </section>

      <section id="free-course" className="relative bg-ink py-20 sm:py-28">
        <div className="absolute left-1/2 top-0 h-64 w-3/4 -translate-x-1/2 bg-jade/10 blur-3xl"/>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-8"><div className="mb-10 text-center"><Eyebrow light>免费体验课程</Eyebrow><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">先免费学，再决定要不要继续</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">不用先购买课程。<br/>先体验 Woshifuren Hub 的教学方式，看看这套投资思维是否适合你。</p></div>
          <div className="rounded-3xl border border-gold/15 bg-white/[.035] p-2 shadow-[0_30px_100px_rgba(0,0,0,.35)] sm:p-5"><VideoPlayer title="什么是期权[1]"/><div className="flex flex-col gap-5 px-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-2 sm:pb-2 sm:pt-7"><div><p className="text-xs font-semibold tracking-widest text-gold">免费体验课</p><h3 className="mt-2 text-xl font-semibold">什么是期权[1]</h3></div><Button href="#free-course">免费开始学习</Button></div></div>
        </div>
      </section>

      <section id="full-course" className="bg-cream py-20 text-ink sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div><Eyebrow>完整学习路径</Eyebrow><h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">想继续深入？<br/><span className="text-jade">进入 Woshifuren Hub 完整版课程</span></h2><p className="mt-6 leading-8 text-black/55">免费课程帮助你建立基础认知。<br/>如果你希望继续系统学习，可以进入完整版，把不同的知识和策略逐步连接起来。</p></div>
          <div className="overflow-hidden rounded-3xl border border-black/[.08] bg-white shadow-soft"><div className="border-b border-black/[.07] p-6 sm:p-8"><p className="text-xs font-bold tracking-widest text-jade">WOSHIFUREN HUB · 完整版</p><div className="mt-4 flex items-end justify-between gap-4"><h3 className="text-2xl font-bold">系统投资课程</h3><p className="text-2xl font-bold">SGD $398</p></div></div>
            <div className="divide-y divide-black/[.06] px-6 sm:px-8">{fullCourse.map((title, i) => <div key={title} className="grid grid-cols-[40px_1fr] gap-3 py-4"><span className="text-xs font-bold text-gold">{String(i + 1).padStart(2, "0")}</span><div><p className="font-semibold">{title}</p>{i === 0 && <p className="mt-2 text-sm leading-6 text-black/45">理解富人如何看待资产、现金流与投资，以及期权产生现金流的基本原理。先改变思维，再学习工具。</p>}</div></div>)}</div>
            <div className="p-6 sm:p-8"><a href="#faq" className="flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-6 font-semibold text-white transition hover:bg-jade">了解完整版课程 <span className="ml-2">→</span></a><p className="mt-3 text-center text-xs text-black/35">请先体验免费课程，再决定是否继续。</p></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-ink sm:py-28"><div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20"><div><Eyebrow>适合谁</Eyebrow><h2 className="text-4xl font-bold sm:text-5xl">这套课程适合你吗？</h2><div className="mt-9 space-y-4">{suitableFor.map(item => <p key={item} className="flex gap-3 leading-7"><span className="font-bold text-jade">✓</span>{item}</p>)}</div></div><aside className="self-end rounded-3xl bg-ink p-7 text-white sm:p-10"><p className="text-xl font-bold text-gold">这不是“快速致富”课程。</p><p className="mt-5 leading-8 text-white/60">不承诺稳赚、不承诺固定收益。<br/>我们更重视投资逻辑、风险意识和长期思维。</p></aside></div></section>

      <section id="faq" className="bg-cream py-20 text-ink sm:py-28"><div className="mx-auto max-w-4xl px-5 sm:px-8"><div className="text-center"><Eyebrow>常见问题</Eyebrow><h2 className="text-4xl font-bold sm:text-5xl">开始之前，你可能想知道</h2></div><div className="mt-12 divide-y divide-black/10 border-y border-black/10">{faqs.map(([question, answer]) => <details key={question} className="group py-1"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-semibold"><span>{question}</span><span className="text-xl font-light text-jade transition group-open:rotate-45">＋</span></summary><p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-black/50">{answer}</p></details>)}</div></div></section>

      <section className="relative bg-[#122521] py-20 text-center sm:py-28"><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(215,174,103,.1),_transparent_60%)]"/><div className="relative mx-auto max-w-3xl px-5"><Eyebrow light>YOUR FIRST STEP</Eyebrow><h2 className="text-4xl font-bold leading-tight sm:text-6xl">先免费学习，<br/>再决定下一步</h2><p className="mt-6 leading-8 text-white/55">不用急着相信任何人。<br/>先学习、先理解，再判断这套投资体系是否适合你。</p><div className="mt-9"><Button href="#free-course">免费开始学习</Button></div></div></section>

      <footer className="bg-[#07100e] py-12"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="rounded-2xl border border-white/[.07] bg-white/[.025] p-5 text-xs leading-6 text-white/40 sm:p-7"><strong className="mb-2 block text-white/70">风险声明</strong>Woshifuren Hub 提供的是投资教育内容，不构成个人投资建议、证券推荐或收益保证。股票与期权投资涉及风险，投资者可能损失部分或全部本金。所有案例仅用于教育与说明用途，过去表现不代表未来结果。</div><div className="mt-10 flex flex-col justify-between gap-6 border-t border-white/[.07] pt-8 sm:flex-row sm:items-center"><Brand/><div className="text-xs leading-6 text-white/30 sm:text-right"><p>以认知为起点，做理性的长期投资者。</p><p>© 2026 Woshifuren Hub. All rights reserved.</p></div></div></div></footer>
    </main>
  );
}
