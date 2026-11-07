'use client';

import { useEffect, useRef } from 'react';

const GLYPHS = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789';
const FONT_SIZE = 16;
const FPS = 22;

export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let drops = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let last = 0;
    let visible = true;

    const pick = () => GLYPHS[(Math.random() * GLYPHS.length) | 0];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const columns = Math.ceil(width / FONT_SIZE);
      drops = Array.from({ length: columns }, () => Math.random() * -(height / FONT_SIZE));
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${FONT_SIZE}px "JetBrains Mono Variable", monospace`;
      for (let i = 0; i < drops.length; i += 1) {
        const y = drops[i] * FONT_SIZE;
        // Bright head, green trail (the trail comes from the fade above).
        ctx.fillStyle = Math.random() > 0.96 ? '#E4FFEA' : '#00FF41';
        ctx.fillText(pick(), i * FONT_SIZE, y);
        if (y > height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
    };

    const loop = (time) => {
      frame = requestAnimationFrame(loop);
      if (!visible || time - last < 1000 / FPS) return;
      last = time;
      draw();
    };

    resize();
    if (reduceMotion) {
      // One still frame instead of animation.
      for (let i = 0; i < 40; i += 1) draw();
    } else {
      frame = requestAnimationFrame(loop);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-rain" aria-hidden="true" />;
}
