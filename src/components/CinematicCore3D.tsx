import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type AIMode = 'transformer' | 'biomedical' | 'vision';

interface CinematicCore3DProps {
  scrollProgress: number; // 0 to 1
  mousePos: { x: number; y: number };
  aiMode: AIMode;
}

export const CinematicCore3D: React.FC<CinematicCore3DProps> = ({
  scrollProgress,
  mousePos,
  aiMode
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    coreGroup: THREE.Group;
    chipDie: THREE.Mesh;
    matrixCubes: THREE.Mesh[];
    gyroRings: THREE.Group[];
    wireframeCage: THREE.LineSegments;
    floatingPlates: THREE.Group;
    particles: THREE.Points;
    dataStreams: THREE.LineSegments;
    lights: THREE.PointLight[];
    glowMesh: THREE.Mesh;
  } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050507, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.2;

    // 2. High Performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    container.appendChild(renderer.domElement);

    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // ========================================================
    // 3. HIGH-TECH AI TENSOR PROCESSOR UNIT (TPU / NPU)
    // ========================================================

    // A. Central Monolithic Silicon Die / Quantum Core (Beveled Octahedron/Prism)
    const chipGeom = new THREE.OctahedronGeometry(0.95, 0);
    const chipMat = new THREE.MeshPhysicalMaterial({
      color: 0x12131a,
      emissive: 0x3b156b,
      roughness: 0.15,
      metalness: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      transmission: 0.25,
      ior: 1.6,
      thickness: 0.8,
      wireframe: false,
    });
    const chipDie = new THREE.Mesh(chipGeom, chipMat);
    coreGroup.add(chipDie);

    // Inner Glowing Tensor Core Matrix (Sub-die)
    const innerGeom = new THREE.BoxGeometry(0.65, 0.65, 0.65);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xc9a84c,
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const innerCore = new THREE.Mesh(innerGeom, innerMat);
    coreGroup.add(innerCore);

    // B. Geometric Wireframe Lattice / Quantum Bus Cage
    const cageGeom = new THREE.IcosahedronGeometry(1.45, 1);
    const cageEdges = new THREE.WireframeGeometry(cageGeom);
    const cageMat = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const wireframeCage = new THREE.LineSegments(cageEdges, cageMat);
    coreGroup.add(wireframeCage);

    // C. 3 Concentric Tech Gimbal / Gyro Accelerator Rings
    const gyroRings: THREE.Group[] = [];
    const ringConfigs = [
      { radius: 1.75, tube: 0.018, segments: 64, color: 0xc9a84c, rotSpeed: 0.5 },
      { radius: 2.15, tube: 0.014, segments: 64, color: 0xa855f7, rotSpeed: -0.4 },
      { radius: 2.55, tube: 0.012, segments: 64, color: 0x38bdf8, rotSpeed: 0.3 }
    ];

    ringConfigs.forEach((cfg, idx) => {
      const ringGroup = new THREE.Group();
      
      // Main Torus Ring
      const torusGeom = new THREE.TorusGeometry(cfg.radius, cfg.tube, 8, cfg.segments);
      const torusMat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        emissive: cfg.color,
        emissiveIntensity: 0.4,
        metalness: 0.9,
        roughness: 0.2,
      });
      const torusMesh = new THREE.Mesh(torusGeom, torusMat);
      ringGroup.add(torusMesh);

      // Add tech notch markers around the ring (like tick marks on a high-precision encoder)
      const notchesCount = 12;
      for (let n = 0; n < notchesCount; n++) {
        const angle = (n / notchesCount) * Math.PI * 2;
        const notchGeom = new THREE.BoxGeometry(0.04, 0.08, 0.04);
        const notchMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const notch = new THREE.Mesh(notchGeom, notchMat);
        notch.position.set(
          cfg.radius * Math.cos(angle),
          cfg.radius * Math.sin(angle),
          0
        );
        notch.rotation.z = angle;
        ringGroup.add(notch);
      }

      ringGroup.rotation.x = Math.PI / 3 + idx * 0.45;
      ringGroup.rotation.y = (Math.PI / 4) * idx;
      coreGroup.add(ringGroup);
      gyroRings.push(ringGroup);
    });

    // D. 8 Orbital Matrix Co-Processor Blocks (Tensor Slices at 8 corners)
    const matrixCubes: THREE.Mesh[] = [];
    const cornerOffsets = [
      [-1, -1, -1], [-1, -1, 1], [-1, 1, -1], [-1, 1, 1],
      [1, -1, -1], [1, -1, 1], [1, 1, -1], [1, 1, 1]
    ];
    const cubeGeom = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0x1f1f2e,
      emissive: 0xc9a84c,
      emissiveIntensity: 0.35,
      metalness: 0.95,
      roughness: 0.1,
    });

    cornerOffsets.forEach((pos) => {
      const cube = new THREE.Mesh(cubeGeom, cubeMat.clone());
      const dist = 1.6;
      cube.position.set(pos[0] * dist, pos[1] * dist, pos[2] * dist);
      coreGroup.add(cube);
      matrixCubes.push(cube);
    });

    // E. Floating Cybernetic Silicon Heat-Sink Plates
    const floatingPlates = new THREE.Group();
    for (let i = 0; i < 4; i++) {
      const plateGeom = new THREE.BoxGeometry(0.8, 0.02, 0.4);
      const plateMat = new THREE.MeshStandardMaterial({
        color: 0x111118,
        metalness: 0.9,
        roughness: 0.3,
      });
      const plate = new THREE.Mesh(plateGeom, plateMat);
      plate.position.y = (i - 1.5) * 0.55;
      plate.rotation.y = (i * Math.PI) / 4;
      floatingPlates.add(plate);
    }
    coreGroup.add(floatingPlates);

    // F. High-Speed AI Data Stream Beams / Laser Bus Lines
    const streamCount = 24;
    const streamPositions: number[] = [];
    const streamColors: number[] = [];
    const colA = new THREE.Color(0xc9a84c);
    const colB = new THREE.Color(0xa855f7);

    for (let s = 0; s < streamCount; s++) {
      const angle = (s / streamCount) * Math.PI * 2;
      const r1 = 0.5;
      const r2 = 2.4;
      const zOffset = (Math.random() - 0.5) * 0.8;

      streamPositions.push(
        r1 * Math.cos(angle), r1 * Math.sin(angle), zOffset * 0.3,
        r2 * Math.cos(angle), r2 * Math.sin(angle), zOffset
      );

      streamColors.push(colA.r, colA.g, colA.b, colB.r, colB.g, colB.b);
    }

    const streamGeom = new THREE.BufferGeometry();
    streamGeom.setAttribute('position', new THREE.Float32BufferAttribute(streamPositions, 3));
    streamGeom.setAttribute('color', new THREE.Float32BufferAttribute(streamColors, 3));
    const streamMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    const dataStreams = new THREE.LineSegments(streamGeom, streamMat);
    coreGroup.add(dataStreams);

    // G. Central Volumetric Luminous Plasma Core
    const glowGeom = new THREE.SphereGeometry(0.85, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });
    const glowMesh = new THREE.Mesh(glowGeom, glowMat);
    coreGroup.add(glowMesh);

    // H. Latent Vector Particle Cloud (Embedding Points)
    const particleCount = 750;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0xc9a84c), // Amber Gold
      new THREE.Color(0xa855f7), // Transformer Violet
      new THREE.Color(0x38bdf8), // Cyan Tensor
      new THREE.Color(0xf8fafc), // Silicon White
    ];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 1.3 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      const chosen = palette[Math.floor(Math.random() * palette.length)];
      colors[i3] = chosen.r;
      colors[i3 + 1] = chosen.g;
      colors[i3 + 2] = chosen.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.25, 'rgba(255,255,255,0.85)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      map: particleTexture,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 4. Studio Cinematic Tech Lighting
    const ambientLight = new THREE.AmbientLight(0x06060c, 2.8);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0xc9a84c, 48, 12);
    light1.position.set(3.5, 3.0, 3.5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x9333ea, 55, 12);
    light2.position.set(-3.5, -2.5, 2.5);
    scene.add(light2);

    const light3 = new THREE.PointLight(0x38bdf8, 35, 10);
    light3.position.set(0, 4.0, -2.0);
    scene.add(light3);

    sceneRef.current = {
      renderer,
      scene,
      camera,
      coreGroup,
      chipDie,
      matrixCubes,
      gyroRings,
      wireframeCage,
      floatingPlates,
      particles,
      dataStreams,
      lights: [light1, light2, light3],
      glowMesh
    };

    // 5. Continuous Sci-Fi Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      if (sceneRef.current) {
        const {
          chipDie,
          matrixCubes,
          gyroRings,
          wireframeCage,
          floatingPlates,
          particles,
          dataStreams,
          glowMesh,
          lights
        } = sceneRef.current;

        // Rotate central chip die with precision
        chipDie.rotation.x = elapsedTime * 0.25;
        chipDie.rotation.y = elapsedTime * 0.35;
        chipDie.rotation.z = Math.sin(elapsedTime * 0.15) * 0.1;

        // Counter-rotate the wireframe cage
        wireframeCage.rotation.x = -elapsedTime * 0.18;
        wireframeCage.rotation.y = -elapsedTime * 0.22;

        // Precision Gyro Rings counter-rotations
        if (gyroRings[0]) gyroRings[0].rotation.z = elapsedTime * 0.45;
        if (gyroRings[1]) gyroRings[1].rotation.z = -elapsedTime * 0.38;
        if (gyroRings[2]) gyroRings[2].rotation.z = elapsedTime * 0.3;

        // Orbital Matrix Co-Processor Blocks oscillation
        matrixCubes.forEach((cube, idx) => {
          const orbitTime = elapsedTime * 0.8 + idx * 0.78;
          cube.rotation.x = orbitTime;
          cube.rotation.y = orbitTime * 1.2;
          // Subtle breathing radius
          const basePos = cornerOffsets[idx];
          const pulse = 1.55 + Math.sin(elapsedTime * 2 + idx) * 0.08;
          cube.position.set(basePos[0] * pulse, basePos[1] * pulse, basePos[2] * pulse);
        });

        // Floating heat-sink plates subtle oscillation
        floatingPlates.rotation.y = Math.sin(elapsedTime * 0.4) * 0.3;

        // Rotate Data Streams
        dataStreams.rotation.z = elapsedTime * 0.2;

        // Cosmic Embedding Particles
        particles.rotation.y = elapsedTime * 0.05;
        particles.rotation.x = Math.sin(elapsedTime * 0.03) * 0.03;

        // Orbiting point lights
        lights[0].position.x = Math.sin(elapsedTime * 0.7) * 4;
        lights[0].position.y = Math.cos(elapsedTime * 0.5) * 3.5;

        lights[1].position.x = -Math.cos(elapsedTime * 0.6) * 4;
        lights[1].position.y = -Math.sin(elapsedTime * 0.8) * 3.5;

        // Core pulsating glow
        const pulse = (Math.sin(elapsedTime * 2.6) + 1) * 0.5;
        (glowMesh.material as THREE.MeshBasicMaterial).opacity = 0.2 + pulse * 0.25;
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
      chipGeom.dispose();
      chipMat.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      cageGeom.dispose();
      cageMat.dispose();
      cubeGeom.dispose();
      cubeMat.dispose();
      glowGeom.dispose();
      glowMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update dynamic AI Architecture Mode colors and lighting
  useEffect(() => {
    if (!sceneRef.current) return;
    const { chipDie, wireframeCage, glowMesh, matrixCubes, lights } = sceneRef.current;

    const chipMat = chipDie.material as THREE.MeshPhysicalMaterial;
    const cageMat = wireframeCage.material as THREE.LineBasicMaterial;
    const glowMat = glowMesh.material as THREE.MeshBasicMaterial;

    if (aiMode === 'transformer') {
      // LLM & RAG Mode: Cyber Violet + Gold
      chipMat.emissive.setHex(0x3b156b);
      cageMat.color.setHex(0x8b5cf6);
      glowMat.color.setHex(0x9333ea);
      lights[0].color.setHex(0xc9a84c);
      lights[1].color.setHex(0xa855f7);
      lights[2].color.setHex(0x38bdf8);
      matrixCubes.forEach(c => ((c.material as THREE.MeshStandardMaterial).emissive.setHex(0xc9a84c)));
    } else if (aiMode === 'biomedical') {
      // Biomedical Deep Learning Mode: Matrix Emerald & Cyan
      chipMat.emissive.setHex(0x064e3b);
      cageMat.color.setHex(0x10b981);
      glowMat.color.setHex(0x059669);
      lights[0].color.setHex(0x34d399);
      lights[1].color.setHex(0x06b6d4);
      lights[2].color.setHex(0xa7f3d0);
      matrixCubes.forEach(c => ((c.material as THREE.MeshStandardMaterial).emissive.setHex(0x10b981)));
    } else if (aiMode === 'vision') {
      // Edge AI & Malware Mode: Electric Amber & Rose
      chipMat.emissive.setHex(0x7f1d1d);
      cageMat.color.setHex(0xf43f5e);
      glowMat.color.setHex(0xe11d48);
      lights[0].color.setHex(0xf59e0b);
      lights[1].color.setHex(0xf43f5e);
      lights[2].color.setHex(0xfbbf24);
      matrixCubes.forEach(c => ((c.material as THREE.MeshStandardMaterial).emissive.setHex(0xf59e0b)));
    }
  }, [aiMode]);

  // Update on scrollProgress and mouse coordinates
  useEffect(() => {
    if (!sceneRef.current) return;
    const { coreGroup, particles, camera, lights } = sceneRef.current;

    // React to mouse movement
    coreGroup.position.x = mousePos.x * 0.35;
    coreGroup.position.y = -mousePos.y * 0.35;

    // React to scroll progress
    if (scrollProgress <= 0.35) {
      const p = scrollProgress / 0.35;
      coreGroup.scale.setScalar(1 + p * 0.28);
      camera.position.z = 5.2 - p * 0.85;
      lights[1].intensity = 55 + p * 30;
    } else if (scrollProgress <= 0.75) {
      const p = (scrollProgress - 0.35) / 0.4;
      coreGroup.scale.setScalar(1.28 + p * 0.72);
      camera.position.z = 4.35 - p * 1.25;
      particles.scale.setScalar(1 + p * 1.6);
      lights[1].intensity = 85 + p * 45;
      lights[0].intensity = 48 + p * 30;
    } else {
      const p = (scrollProgress - 0.75) / 0.25;
      coreGroup.scale.setScalar(2.0 + p * 0.45);
      camera.position.z = 3.1 - p * 0.5;
      particles.scale.setScalar(2.6 + p * 0.8);
    }
  }, [scrollProgress, mousePos]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
    />
  );
};
