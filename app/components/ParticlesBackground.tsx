'use client';

import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine } from 'tsparticles-engine';
import type { ISourceOptions } from 'tsparticles-engine';

export default function ParticlesBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {}, []);

  const options: ISourceOptions = {
    fullScreen: false,
    background: { color: 'transparent' },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: false },
        onHover: { enable: false },
      },
    },
    particles: {
      color: { value: '#d4af37' },
      links: { enable: false },
      move: {
        enable: true,
        speed: isMobile ? 0.4 : 0.3,
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'out' },
      },
      number: {
        density: { enable: true, area: isMobile ? 600 : 800 },
        value: isMobile ? 80 : 40,
      },
      opacity: {
        value: isMobile ? 0.2 : 0.15,
        random: true,
      },
      shape: { type: 'circle' },
      size: {
        value: isMobile ? { min: 2, max: 4 } : { min: 1, max: 3 },
        random: true,
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="fixed inset-0 -z-10"
      options={options}
    />
  );
}