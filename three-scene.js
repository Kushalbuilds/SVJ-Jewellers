/**
 * SVJ Jewellers - Three.js 3D Gold Ornaments Showcase
 * Floating gold necklaces, bangles, rings, chains, stones on warm ivory background
 */

(function () {
  const container = document.getElementById('three-container');
  if (!container) return;

  let scene, camera, renderer;
  let ornamentsGroup, sparklesParticles;
  let clock;

  function init() {
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 600;

    // Scene with warm ivory background
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.06);

    // Camera
    camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 12);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    container.appendChild(renderer.domElement);

    // Lights
    setupLighting();

    // Ornaments
    createOrnaments();

    // Gold sparkle dust
    createSparkleDust();

    // Events
    window.addEventListener('resize', onWindowResize);
    clock = new THREE.Clock();
    animate();
  }

  function setupLighting() {
    const ambient = new THREE.AmbientLight(0xfff5e6, 0.6);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xfffae0, 2.0);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffd27f, 1.2);
    fillLight.position.set(-5, 3, -3);
    scene.add(fillLight);

    const pLight1 = new THREE.PointLight(0xffe277, 2.0, 15);
    pLight1.position.set(3, 4, 4);
    scene.add(pLight1);

    const pLight2 = new THREE.PointLight(0xd4af37, 1.5, 12);
    pLight2.position.set(-4, -2, 3);
    scene.add(pLight2);
  }

  function createOrnaments() {
    ornamentsGroup = new THREE.Group();

    // Gold material
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xe5b23d,
      emissive: 0xffd27f,
      emissiveIntensity: 0.35,
      metalness: 0.92,
      roughness: 0.18,
      transparent: true,
      opacity: 0.9
    });

    // Rose gold material
    const roseGoldMat = new THREE.MeshStandardMaterial({
      color: 0xdf8f7c,
      emissive: 0xffd2c7,
      emissiveIntensity: 0.3,
      metalness: 0.88,
      roughness: 0.22,
      transparent: true,
      opacity: 0.85
    });

    // Silver material
    const silverMat = new THREE.MeshStandardMaterial({
      color: 0xc0c0c0,
      emissive: 0xe0e0ff,
      emissiveIntensity: 0.25,
      metalness: 0.85,
      roughness: 0.2,
      transparent: true,
      opacity: 0.8
    });

    // Helper to randomly place
    function place(obj, radiusMin, radiusMax) {
      const radius = radiusMin + Math.random() * (radiusMax - radiusMin);
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.7;
      obj.position.set(
        radius * Math.cos(phi) * Math.sin(theta),
        radius * Math.sin(phi),
        radius * Math.cos(phi) * Math.cos(theta) - 2
      );
      obj.rotation.x = Math.random() * Math.PI;
      obj.rotation.y = Math.random() * Math.PI;
      obj.rotation.z = Math.random() * Math.PI;
      // Store original position for float animation
      obj.userData.origY = obj.position.y;
      obj.userData.floatSpeed = 0.3 + Math.random() * 0.5;
      obj.userData.floatAmp = 0.1 + Math.random() * 0.2;
      obj.userData.rotSpeed = 0.002 + Math.random() * 0.005;
      ornamentsGroup.add(obj);
    }

    // Rings (torus)
    for (let i = 0; i < 6; i++) {
      const geom = new THREE.TorusGeometry(0.4 + Math.random() * 0.3, 0.06 + Math.random() * 0.04, 32, 80);
      const mat = i % 3 === 0 ? roseGoldMat : goldMat;
      place(new THREE.Mesh(geom, mat), 3, 7);
    }

    // Necklaces (torus knot — ornamental chain shapes)
    for (let i = 0; i < 3; i++) {
      const geom = new THREE.TorusKnotGeometry(0.5 + Math.random() * 0.3, 0.05, 80, 16, 2, 3);
      place(new THREE.Mesh(geom, goldMat), 4, 8);
    }

    // Bangles (thick torus)
    for (let i = 0; i < 5; i++) {
      const geom = new THREE.TorusGeometry(0.35 + Math.random() * 0.2, 0.08 + Math.random() * 0.04, 32, 60);
      const mat = i % 2 === 0 ? goldMat : silverMat;
      place(new THREE.Mesh(geom, mat), 3, 7);
    }

    // Stones / Gems (icosahedron)
    for (let i = 0; i < 8; i++) {
      const geom = new THREE.IcosahedronGeometry(0.08 + Math.random() * 0.08, 0);
      const mat = i % 2 === 0 ? goldMat : roseGoldMat;
      place(new THREE.Mesh(geom, mat), 2, 6);
    }

    // Chains (tube along a catmull-rom curve)
    for (let i = 0; i < 3; i++) {
      const points = [];
      for (let j = 0; j < 5; j++) {
        points.push(new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        ));
      }
      const path = new THREE.CatmullRomCurve3(points);
      const geom = new THREE.TubeGeometry(path, 30, 0.03, 8, false);
      place(new THREE.Mesh(geom, goldMat), 3, 7);
    }

    // Pendant / Diamond shapes (octahedron, larger)
    for (let i = 0; i < 4; i++) {
      const geom = new THREE.OctahedronGeometry(0.15 + Math.random() * 0.1, 0);
      place(new THREE.Mesh(geom, silverMat), 3, 6);
    }

    scene.add(ornamentsGroup);
  }

  function createSparkleDust() {
    const count = 300;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const goldColor = new THREE.Color(0xf5d77f);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < count; i++) {
      const radius = 2 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      positions[i * 3] = radius * Math.cos(phi) * Math.sin(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi) * Math.cos(theta);

      const c = Math.random() > 0.4 ? goldColor : whiteColor;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Glow texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(255, 225, 120, 0.8)');
    grad.addColorStop(0.7, 'rgba(212, 175, 55, 0.2)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.15,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      depthWrite: false
    });

    sparklesParticles = new THREE.Points(geometry, material);
    scene.add(sparklesParticles);
  }

  function onWindowResize() {
    if (!container || !renderer || !camera) return;
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  function animate() {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    // Rotate entire group slowly
    if (ornamentsGroup) {
      ornamentsGroup.rotation.y += 0.001;

      // Float individual ornaments
      ornamentsGroup.children.forEach(child => {
        if (child.userData.origY !== undefined) {
          child.position.y = child.userData.origY + Math.sin(elapsed * child.userData.floatSpeed) * child.userData.floatAmp;
          child.rotation.y += child.userData.rotSpeed;
        }
      });
    }

    // Sparkle dust orbiting
    if (sparklesParticles) {
      sparklesParticles.rotation.y -= 0.002;
      sparklesParticles.rotation.x = Math.sin(elapsed * 0.3) * 0.03;
    }

    renderer.render(scene, camera);
  }

  // Start
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
