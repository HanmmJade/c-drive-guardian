import { useEffect, useRef } from "react";

const GLYPHS = "01<>[]{}#$%&*+=/\\|C盘安全管家清理";

// 克制版数据雨：稀疏列、低亮度、慢速下落
export default function DataRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontSize = 14;
    let columns: { y: number; speed: number }[] = [];
    let raf = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Array.from(
        { length: Math.floor(canvas.width / (fontSize * 1.6)) },
        () => ({
          y: Math.random() * -canvas.height,
          speed: 0.35 + Math.random() * 0.45,
        }),
      );
    };
    resize();
    window.addEventListener("resize", resize);

    let last = 0;
    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 50) return;
      last = t;
      ctx.fillStyle = "rgba(5,10,8,0.10)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      columns.forEach((col, i) => {
        const x = i * fontSize * 1.6;
        const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        ctx.fillStyle = "rgba(0,255,136,0.32)";
        ctx.fillText(glyph, x, col.y);
        col.y += fontSize * col.speed;
        if (col.y > canvas.height + fontSize) {
          col.y = Math.random() * -120;
          col.speed = 0.35 + Math.random() * 0.45;
        }
      });
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 opacity-60"
    />
  );
}
