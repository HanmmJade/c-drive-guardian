import {
  Mail,
  MessageCircle,
  HardDrive,
  Database,
  ShieldAlert,
  Sparkles,
  ListChecks,
  ScanSearch,
  Download,
  ShieldCheck,
} from "lucide-react";
import SplitText from "@/components/SplitText.jsx";
import DataRain from "@/backgrounds/DataRain";

// Release 最新版直链：发布时安装包统一命名为 CDriveGuardian-Setup.exe，链接永久有效
const SETUP_URL =
  "https://github.com/HanmmJade/c-drive-guardian/releases/latest/download/CDriveGuardian-Setup.exe";
const RELEASES_URL = "https://github.com/HanmmJade/c-drive-guardian/releases";

// 截图辅助：?capture=hero|features|solutions|download 只渲染对应区块，便于无头浏览器分段截图
const capture = new URLSearchParams(window.location.search).get("capture");
const show = (id: string) => !capture || capture === id;

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.1 11.1 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

const painPoints = [
  {
    icon: HardDrive,
    tone: "red",
    title: "软件默认装进 C 盘",
    desc: "装软件一路点「下一步」，全都挤进 C 盘，红条一天比一天短。",
  },
  {
    icon: Database,
    tone: "amber",
    title: "缓存悄悄吃掉几十 GB",
    desc: "浏览器、聊天工具、开发工具的缓存日积月累，你却找不到它们在哪。",
  },
  {
    icon: ShieldAlert,
    tone: "amber",
    title: "不敢乱删，怕删坏系统",
    desc: "系统目录、聊天记录、个人文件……删错一个都受不了，只能干瞪眼。",
  },
] as const;

const solutions = [
  {
    icon: Sparkles,
    tone: "green",
    step: "01",
    title: "一键安全清理",
    desc: "只处理可重建的缓存：Temp、崩溃转储、显卡着色器。清完自动恢复，放心点。",
  },
  {
    icon: ListChecks,
    tone: "amber",
    step: "02",
    title: "谨慎项逐项确认",
    desc: "残留、大目录、可迁移数据属于黄色项目，每一项都先看清楚，由你逐个确认。",
  },
  {
    icon: ScanSearch,
    tone: "cyan",
    step: "03",
    title: "大文件只定位不乱删",
    desc: "找出真正的空间大户，一键打开所在位置。删不删、什么时候删，永远你自己定。",
  },
] as const;

const toneStyles: Record<string, { icon: string; card: string }> = {
  red: {
    icon: "bg-[#ff4d4f]/10 text-[#ff6b6e] border-[#ff4d4f]/30",
    card: "hover:border-[#ff4d4f]/40",
  },
  amber: {
    icon: "bg-[#ffb020]/10 text-[#ffc53d] border-[#ffb020]/30",
    card: "hover:border-[#ffb020]/40",
  },
  green: {
    icon: "bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/30",
    card: "hover:border-[#00ff88]/40",
  },
  cyan: {
    icon: "bg-[#22d3ee]/10 text-[#22d3ee] border-[#22d3ee]/30",
    card: "hover:border-[#22d3ee]/40",
  },
};

export default function App() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#050a08] text-white">
      <DataRain />

      <div className="scanline pointer-events-none fixed inset-x-0 top-0 z-0" aria-hidden />

      {/* 首屏 */}
      {show("hero") && (
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-5xl flex-1 flex-col items-center justify-center gap-8 px-6 text-center">
        <span className="rounded-full border border-[#00ff88]/40 px-4 py-1 text-sm text-[#7dffbe]">
          本地扫描 · 不上传数据 · 不删聊天记录
        </span>
        <SplitText
          text="C 盘又满了？别慌"
          className="text-5xl font-bold sm:text-7xl"
          delay={80}
          duration={1}
          tag="h1"
          textAlign="center"
        />
        <p className="max-w-xl text-lg text-white/70">
          一键安全清理，小白也能放心用。软件默认装进 C 盘、
          <br />
          缓存悄悄吃掉几十 GB，这里帮你安全搞定。
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={SETUP_URL}
            className="rounded-xl bg-[#00ff88] px-8 py-4 text-lg font-bold text-[#04150c] shadow-[0_0_32px_rgba(0,255,136,0.45)] transition hover:shadow-[0_0_48px_rgba(0,255,136,0.65)]"
          >
            免费下载 Windows 版
          </a>
          <a
            href="#features"
            className="rounded-xl border border-[#00ff88]/40 px-8 py-4 text-lg font-bold text-[#7dffbe] transition hover:border-[#00ff88]"
          >
            了解它怎么保护 C 盘
          </a>
        </div>
      </section>
      )}

      {/* 痛点区 */}
      {show("features") && (
      <section id="features" className="relative z-10 mx-auto w-full max-w-5xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">你是不是也这样？</h2>
        <p className="mt-4 text-center text-white/60">
          C 盘爆满不是你的错，是软件都爱往 C 盘钻。
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {painPoints.map((item) => {
            const tone = toneStyles[item.tone];
            return (
              <article
                key={item.title}
                className={`glass-card rounded-2xl border border-white/10 p-6 transition ${tone.card}`}
              >
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${tone.icon}`}>
                  <item.icon size={22} />
                </span>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>
              </article>
            );
          })}
        </div>
      </section>
      )}

      {/* 解决方案区 */}
      {show("solutions") && (
      <section className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">三步搞定 C 盘</h2>
        <p className="mt-4 text-center text-white/60">
          绿色放心清、黄色看清楚、红色绝不碰——安全轨道清清楚楚。
        </p>
        <div className="steps-connect relative mt-12 grid gap-5 sm:grid-cols-3">
          {solutions.map((item) => {
            const tone = toneStyles[item.tone];
            return (
              <article
                key={item.title}
                className={`glass-card relative rounded-2xl border border-white/10 p-6 transition ${tone.card}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${tone.icon}`}>
                    <item.icon size={22} />
                  </span>
                  <span className="text-sm font-bold text-white/30">{item.step}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>
              </article>
            );
          })}
        </div>
      </section>
      )}

      {/* 下载区 */}
      {show("download") && (
      <section id="download" className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-28 text-center">
        <div className="glass-card mx-auto max-w-2xl rounded-3xl border border-[#00ff88]/25 px-8 py-12">
          <h2 className="text-3xl font-bold sm:text-4xl">现在，把 C 盘救回来</h2>
          <p className="mt-3 text-white/60">Windows 10 / 11 · 免费使用 · 安装包不到 10 MB</p>
          <a
            href={SETUP_URL}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#00ff88] px-10 py-4 text-lg font-bold text-[#04150c] shadow-[0_0_40px_rgba(0,255,136,0.5)] transition hover:shadow-[0_0_56px_rgba(0,255,136,0.7)]"
          >
            <Download size={20} />
            免费下载 Windows 版
          </a>
          <p className="mt-4">
            <a href={RELEASES_URL} target="_blank" rel="noreferrer" className="text-sm text-white/40 underline-offset-4 transition hover:text-white/70 hover:underline">
              查看历史版本
            </a>
          </p>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-white/50">
            <ShieldCheck size={16} className="text-[#00ff88]" />
            本地扫描 · 不上传数据 · 不删聊天记录
          </p>
        </div>
      </section>
      )}

      <footer className="relative z-10 border-t border-[#00ff88]/15 bg-[#050a08]/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4 text-sm text-white/60">
          <span>© 2026 C 盘安全管家</span>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://github.com/HanmmJade"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition hover:text-[#7dffbe]"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href="mailto:572757103@qq.com"
              className="flex items-center gap-1.5 transition hover:text-[#7dffbe]"
            >
              <Mail size={16} />
              572757103@qq.com
            </a>
            <span className="flex items-center gap-1.5">
              <MessageCircle size={16} />
              微信：HammJade
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
