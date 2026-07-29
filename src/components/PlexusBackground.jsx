import React, { useEffect, useRef } from 'react';

export default function PlexusBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;

    const updateCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    updateCanvasSize();

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const trailParticles = [];
    const colors = [
      'rgba(0, 242, 254, ',  // Neon Cyan
      'rgba(79, 172, 254, ',  // Electric Blue
      'rgba(127, 90, 240, '   // Cyber Purple
    ];

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;

      if (Math.random() < 0.45) {
        trailParticles.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 2.5,
          vy: (Math.random() - 0.5) * 2.5 - 0.3,
          size: Math.random() * 6 + 3,
          alpha: 0.9,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const numNodes = 85;
    const nodes = [];

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * width * 1.6,
        y: (Math.random() - 0.5) * height * 1.6,
        z: Math.random() * 400 - 100,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        vz: (Math.random() - 0.5) * 0.4
      });
    }

    const focalLength = 350;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const rotY = (mouseX - width / 2) * 0.0002;
      const rotX = (mouseY - height / 2) * 0.0002;

      const projected = [];

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        const boundX = width * 0.8;
        const boundY = height * 0.8;

        if (node.x < -boundX) node.x = boundX;
        if (node.x > boundX) node.x = -boundX;
        if (node.y < -boundY) node.y = boundY;
        if (node.y > boundY) node.y = -boundY;
        if (node.z < -100) node.z = 300;
        if (node.z > 300) node.z = -100;

        let x = node.x;
        let y = node.y;
        let z = node.z;

        let x1 = x * Math.cos(rotY) + z * Math.sin(rotY);
        let z1 = -x * Math.sin(rotY) + z * Math.cos(rotY);

        let y2 = y * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = y * Math.sin(rotX) + z1 * Math.cos(rotX);

        if (focalLength + z2 <= 20) return;

        let scale = focalLength / (focalLength + z2);
        let px = x1 * scale + width / 2;
        let py = y2 * scale + height / 2;

        projected.push({ x: px, y: py, scale, z: z2 });
      });

      // Connecting lines
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            const rawAlpha = (1 - dist / 160) * 0.45 * Math.min(p1.scale, p2.scale);
            const alpha = Math.max(0, Math.min(0.65, rawAlpha));

            if (alpha > 0.01) {
              ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
              ctx.lineWidth = Math.max(0.4, 1.2 * Math.min(p1.scale, p2.scale));
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Mouse connecting lines to nearby nodes
      projected.forEach((p) => {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 180) {
          const alpha = (1 - dist / 180) * 0.55 * p.scale;
          if (alpha > 0.01) {
            ctx.strokeStyle = `rgba(79, 172, 254, ${Math.min(0.7, alpha)})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
        }
      });

      // Draw node circles
      projected.forEach((p) => {
        const radius = Math.max(1, p.scale * 2.5);
        const rawAlpha = (400 - p.z) / 500;
        const alpha = Math.max(0.15, Math.min(0.85, rawAlpha));

        ctx.save();
        ctx.fillStyle = `rgba(79, 172, 254, ${alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(0, 242, 254, 0.6)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw mouse trail particles
      for (let i = trailParticles.length - 1; i >= 0; i--) {
        const p = trailParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.018;
        p.size *= 0.95;

        if (p.alpha <= 0 || p.size <= 0.5) {
          trailParticles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.fillStyle = `${p.color}${Math.max(0, p.alpha)})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = 'rgba(0, 242, 254, 0.5)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas id="canvas-3d" ref={canvasRef} />
      <div className="bg-glow-1" />
      <div className="bg-glow-2" />
    </>
  );
}
