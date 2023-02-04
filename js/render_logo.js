const initialRotationSpeed = 0.08;
const minimumRotationSpeed = 0.015;
const deceleration = 0.0002;
let rotationSpeed = initialRotationSpeed;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(60);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("welcome__logo"), alpha: true });
renderer.setClearColor(0x000000, 0);
renderer.setSize(300, 300);

const loader = new THREE.GLTFLoader();
loader.load(
    'glbs/logo.glb',
    function (gltf) {
        scene.add(gltf.scene);
        renderer.render(scene, camera);
    },
)

function handleSmoothSceneRotation() {
    const currentRotationSpeed = rotationSpeed - deceleration;
    scene.rotation.y += currentRotationSpeed;
    rotationSpeed = Math.max(currentRotationSpeed, minimumRotationSpeed);
}

function animate() {
    requestAnimationFrame(animate);
    handleSmoothSceneRotation()
    renderer.render(scene, camera);
}
animate();