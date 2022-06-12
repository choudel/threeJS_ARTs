import "./style.css"
import * as THREE from "three"; 

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)

const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )

const cube = new THREE.Mesh(geometry,material) 

scene.add(cube)

const sizes ={
    width:800,
    height:600
}

const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width/sizes.height,
    0.1, 
    1000 
)
scene.add(camera)

const canvas= document.querySelector('.webgl')

const renderer= new THREE.WebGLRenderer({
    canvas
})

renderer.setSize(sizes.width,sizes.height)

renderer.render(scene,camera)

camera.position.z = 5 

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();
