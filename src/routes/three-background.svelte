<script>
// @ts-nocheck

  import { onMount } from 'svelte';
  import * as THREE from 'three';

  let scene, camera, renderer;
  let canvasRef;

  onMount(() => {
    // Initialize Three.js scene, camera, and renderer here
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    let container = canvasRef;
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor( 0x000000, 0 );
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Add a simple cube to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Set the camera's position
    camera.position.z = 5;

    // Create an animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();
  });
</script>

<div bind:this={canvasRef} class="three-background"/>

<style>
	.three-background {
		width: 100vw;
		height: 100vh;
    position: absolute;
    top: 0;
    z-index: -1;
	}
</style>
