import * as THREE from 'three';
// 1. Create a new Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. Add a Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 , 1000);
// PerspectiveCamera(FOV, ASPECT RATION ,NEAR POINT, FAR POINT)
camera.position.z = 5;

// 3. Create and add an object to the scene
const geometry = new THREE.TorusGeometry()
const material = new THREE.MeshLambertMaterial({color: '#468585',  emissive:'#468585'})
// if you dont add emissive the geometry wont react to light. emissive is black by default
const cube = new THREE.Mesh(geometry, material);
scene.add(cube)

// 4. Create and add a light source to the scene
const light = new THREE.DirectionalLight("#fff", 10)
// DirectionalLight(COLOR, INTENSITY)
light.position.set(1,1,1)
scene.add(light)

// 5. Set Up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement); 
// 6. Animate the scene
function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate()

