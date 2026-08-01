import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function useThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    // Renderer setup — WebGL may be unavailable in sandboxed iframes
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return; // Gracefully skip 3D scene when WebGL is unavailable
    }
    if (!renderer.getContext()) {
      renderer.dispose();
      return;
    }
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Core central geometry
    const coreGeometry = new THREE.IcosahedronGeometry(2.5, 1);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x00d4ff,
      emissive: 0x00d4ff,
      emissiveIntensity: 0.5,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    // Inner solid core
    const innerCoreGeometry = new THREE.IcosahedronGeometry(2, 0);
    const innerCoreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1a1f4b,
      emissive: 0x7b61ff,
      emissiveIntensity: 0.2,
      roughness: 0.1,
      metalness: 0.8,
    });
    const innerCore = new THREE.Mesh(innerCoreGeometry, innerCoreMaterial);
    scene.add(innerCore);

    // Orbiting particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    const posArray = new Float32Array(particleCount * 3);

    for(let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Floating nodes
    const nodes = new THREE.Group();
    for(let i = 0; i < 4; i++) {
      const nodeGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const nodeMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        emissive: 0x00d4ff,
        emissiveIntensity: 0.8,
        transparent: true,
        opacity: 0.9,
      });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      
      const angle = (i / 4) * Math.PI * 2;
      const radius = 6;
      node.position.x = Math.cos(angle) * radius;
      node.position.z = Math.sin(angle) * radius;
      node.position.y = (Math.random() - 0.5) * 4;
      
      nodes.add(node);
    }
    scene.add(nodes);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);
    
    const pointLight1 = new THREE.PointLight(0x00d4ff, 2, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0x7b61ff, 2, 20);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };
    document.addEventListener('mousemove', onDocumentMouseMove);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Parallax damping
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;
      
      scene.rotation.x += 0.05 * (targetY - scene.rotation.x);
      scene.rotation.y += 0.05 * (targetX - scene.rotation.y);

      // Auto rotation
      core.rotation.y += 0.002;
      core.rotation.x += 0.001;
      innerCore.rotation.y -= 0.003;
      particlesMesh.rotation.y = -elapsedTime * 0.05;
      nodes.rotation.y += 0.005;

      // Bobbing nodes
      nodes.children.forEach((node, i) => {
        node.position.y += Math.sin(elapsedTime * 2 + i) * 0.01;
        node.rotation.x += 0.01;
        node.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return mountRef;
}

