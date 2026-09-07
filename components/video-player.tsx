// 将下面的占位符替换为你的 Bunny.net Stream Embed iframe URL。
const BUNNY_VIDEO_EMBED_URL = "BUNNY_VIDEO_EMBED_URL";

type VideoPlayerProps = { title: string };

export function VideoPlayer({ title }: VideoPlayerProps) {
  const hasVideoUrl = BUNNY_VIDEO_EMBED_URL.startsWith("https://");

  return (
    <div className="overflow-hidden rounded-2xl bg-[#091411] shadow-2xl ring-1 ring-white/10">
      <div className="relative aspect-video w-full">
        {hasVideoUrl ? (
          <iframe
            src={BUNNY_VIDEO_EMBED_URL}
            title={title}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allow="accelerometer; gyroscope; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_#16493d_0%,_#091411_62%)] px-6 text-center">
            <span className="mb-5 grid h-[70px] w-[70px] place-items-center rounded-full border border-gold/70 pl-1 text-2xl text-gold" aria-hidden="true">▶</span>
            <p className="text-lg font-semibold text-white">课程视频准备就绪</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-white/55">替换 Bunny.net Embed URL 后，视频将在这里播放</p>
          </div>
        )}
      </div>
    </div>
  );
}
