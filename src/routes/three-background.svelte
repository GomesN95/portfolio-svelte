<script>
  // @ts-nocheck
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  import imageSprite from '$lib/textures/sprites/disc.png';

  let scene, camera, renderer;
  let canvasRef;
  
  

  onMount(() => {
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
	  let windowHalfY = window.innerHeight / 2;
    // Set scene
    scene = new THREE.Scene();

    // Set camera
    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 2, 2000);
    camera.position.z = 1000;

    // Set renderer
    let container = canvasRef;
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor( 0x000000, 0 );
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
		const vertices = [];

    const sprite = new THREE.TextureLoader().load(imageSprite);
		sprite.colorSpace = THREE.SRGBColorSpace;

    for ( let i = 0; i < 5000; i ++ ) {

    const x = 2000 * Math.random() - 1000;
    const y = 2000 * Math.random() - 1000;
    const z = 2000 * Math.random() - 1000;

    vertices.push( x, y, z );

    }

    geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

    let material = new THREE.PointsMaterial( { size: 35, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true } );
    material.color.setHSL( 1.0, 0.3, 0.7, THREE.SRGBColorSpace );

    const particles = new THREE.Points( geometry, material );
    scene.add( particles );


    const animate = () => {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
      render();
    };

    animate();

    document.body.style.touchAction = 'none';
		document.body.addEventListener( 'pointermove', onPointerMove );
    window.addEventListener( 'resize', onWindowResize );

    function onWindowResize() {

      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize( window.innerWidth, window.innerHeight );

      }

      function onPointerMove( event ) {

      if ( event.isPrimary === false ) return;

      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;

    }

    function render() {
      const time = Date.now() * 0.00005;
      camera.position.x += ( mouseX - camera.position.x ) * 0.05;
      camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
      camera.lookAt( scene.position );
      const h = ( 360 * ( 1.0 + time ) % 360 ) / 360;
      renderer.render( scene, camera );
      }
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
