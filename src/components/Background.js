import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background = () => {
    const ref = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        ref.current.appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(0.5, 16, 16);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        for (let i = 0; i < 1000; i++) {
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = Math.random() * 1000 - 500;
            mesh.position.y = Math.random() * 1000 - 500;
            mesh.position.z = Math.random() * 1000 - 500;
            scene.add(mesh);
        }

        camera.position.z = 5;

        const animate = function () {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();
    }, []);

    return <div ref={ref} style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw' }} />;
};

export default Background;