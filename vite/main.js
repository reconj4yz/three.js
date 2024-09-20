import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls";
const canvas = document.getElementById("canvas");
// 1. Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#F0F0F0");

// 2. Add a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// 3. Create and add an object to the scene
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({
  color: "#468585",
  emissive: "#468585",
});
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial({
  color: "#B4B4B3",
  emissive: "#B4B4B3",
});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;
scene.add(dodecahedron);
scene.add(box);

// 4. Add light
const light = new THREE.SpotLight("0x006769", 100);
light.position.set(1, 1, 1);
scene.add(light);

// 5. Set up renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.render(scene, camera);

// 6. Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
controls.enablePan = true;

// 7. Animate the scene
function animate() {
  requestAnimationFrame(animate);
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;

  box.rotation.y += 0.005;

  controls.update();
  renderer.render(scene, camera);
}
animate();
// 8. Handle window resizing
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
