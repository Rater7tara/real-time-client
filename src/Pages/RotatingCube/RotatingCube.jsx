import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const RotatingCube = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5; // Adjusted camera position

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize('90vw', window.innerHeight); // Adjusted width to 90vw
    renderer.setClearColor(0xffffff); // White background
    containerRef.current.appendChild(renderer.domElement);

    // Geometry
    const geometry = new THREE.BoxGeometry(2, 2, 2); // Adjusted cube size
    const material = new THREE.MeshBasicMaterial({ color: 0xff007f }); // Rose-500 color
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Ambient light
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Directional light
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="max-w-screen-2xl mx-auto" />; // Centered and max width set to screen-2xl
};

export default RotatingCube;
