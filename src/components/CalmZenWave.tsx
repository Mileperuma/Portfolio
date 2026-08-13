import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CalmZenWaveProps {
  mousePos: { x: number; y: number };
  mood?: 'serene' | 'dawn' | 'dusk';
}

export const CalmZenWave: React.FC<CalmZenWaveProps> = ({ mousePos, mood = 'serene' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    planeMesh: THREE.Mesh;
    ribbons: THREE.Line[];
    particles: THREE.Points;
    lights: THREE.PointLight[];
  } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0b0e, 0.04);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 4.2);
    camera.lookAt(0, 0, 0);

    // 2. High Quality Subtle Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // 3. Gentle Undulating Zen Wave Surface (Silky harmonic plane)
    const planeGeom = new THREE.PlaneGeometry(10, 8, 80, 60);
    planeGeom.rotateX(-Math.PI / 2.6);

    const planeMat = new THREE.MeshStandardMaterial({
      color: 0x141822,
      roughness: 0.45,
      metalness: 0.6,
      wireframe: true,
      wireframeLinewidth: 1,
      transparent: true,
      opacity: 0.35,
    });
    const planeMesh = new THREE.Mesh(planeGeom, planeMat);
    planeMesh.position.y = -0.6;
    scene.add(planeMesh);

    // Store original vertex coordinates
    const posAttr = planeGeom.attributes.position;
    const originalPositions = new Float32Array(posAttr.count * 3);
    for (let i = 0; i < posAttr.count * 3; i++) {
      originalPositions[i] = posAttr.array[i];
    }

    // 4. Meditative Floating Silk Ribbons / Harmonic Contours
    const ribbons: THREE.Line[] = [];
    const ribbonCount = 5;
    const ribbonPoints = 100;

    for (let r = 0; r < ribbonCount; r++) {
      const curvePositions = new Float32Array(ribbonPoints * 3);
      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.BufferAttribute(curvePositions, 3));
      
      const mat = new THREE.LineBasicMaterial({
        color: r % 2 === 0 ? 0x84a98c : 0xc8bca8,
        transparent: true,
        opacity: 0.38 - r * 0.05,
        blending: THREE.AdditiveBlending
      });
      const line = new THREE.Line(geom, mat);
      scene.add(line);
      ribbons.push(line);
    }

    // 5. Meditative Soft Floating Mist Particles
    const particleCount = 200;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let p = 0; p < particleCount; p++) {
      particlePositions[p * 3] = (Math.random() - 0.5) * 12;
      particlePositions[p * 3 + 1] = Math.random() * 4 - 0.5;
      particlePositions[p * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Soft glowing dot texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(230, 222, 210, 0.9)');
      grad.addColorStop(0.3, 'rgba(132, 169, 140, 0.4)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      transparent: true,
      opacity: 0.45,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // 6. Calming, Soft Cinematic Lights (Warm Taupe & Muted Sage)
    const ambientLight = new THREE.AmbientLight(0x0c0e14, 2.5);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0x84a98c, 24, 10); // Calm Sage
    light1.position.set(-2.5, 2.0, 1.5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xd4c2a5, 22, 10); // Warm Linen / Sand
    light2.position.set(2.5, 1.5, 2.0);
    scene.add(light2);

    sceneRef.current = {
      renderer,
      scene,
      camera,
      planeMesh,
      ribbons,
      particles,
      lights: [light1, light2]
    };

    // 7. Meditative Harmonic Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const time = clock.getElapsedTime() * 0.45; // Slow, tranquil breathing rate

      if (sceneRef.current) {
        const { planeMesh, ribbons, particles, lights } = sceneRef.current;

        // Animate wave surface
        const pos = planeMesh.geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) {
          const u = originalPositions[i * 3];
          const v = originalPositions[i * 3 + 1];
          // Gentle multi-octave harmonic sine waves
          const wave1 = Math.sin(u * 0.8 + time * 1.2) * 0.28;
          const wave2 = Math.cos(v * 0.9 + time * 0.9) * 0.24;
          const wave3 = Math.sin((u + v) * 0.4 + time * 0.6) * 0.18;
          
          // Soft mouse perturbation
          const distToMouse = Math.hypot(u - mousePos.x * 3, v + mousePos.y * 3);
          const mouseRipple = Math.exp(-distToMouse * 0.6) * Math.sin(distToMouse * 3.0 - time * 2.5) * 0.2;

          pos.setZ(i, originalPositions[i * 3 + 2] + wave1 + wave2 + wave3 + mouseRipple);
        }
        pos.needsUpdate = true;

        // Animate silk harmonic ribbons
        ribbons.forEach((ribbon, rIdx) => {
          const rPos = ribbon.geometry.attributes.position;
          const rArray = rPos.array as Float32Array;
          const yOffset = -0.2 + rIdx * 0.25;
          const phase = rIdx * 0.8;

          for (let p = 0; p < ribbonPoints; p++) {
            const t = (p / ribbonPoints) * 10 - 5;
            const wave = Math.sin(t * 0.9 + time * 1.4 + phase) * 0.35 +
                         Math.cos(t * 0.4 + time * 0.7) * 0.2;
            
            rArray[p * 3] = t;
            rArray[p * 3 + 1] = yOffset + wave;
            rArray[p * 3 + 2] = -0.5 + (p / ribbonPoints) * 2;
          }
          rPos.needsUpdate = true;
        });

        // Drift mist particles slowly
        particles.rotation.y = time * 0.04;

        // Subtle breathing lights
        lights[0].position.x = -2.5 + Math.sin(time * 0.5) * 1.2;
        lights[1].position.x = 2.5 + Math.cos(time * 0.6) * 1.2;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container || !sceneRef.current) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      sceneRef.current.camera.aspect = newW / newH;
      sceneRef.current.camera.updateProjectionMatrix();
      sceneRef.current.renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      planeGeom.dispose();
      planeMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [mousePos]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-75"
    />
  );
};
