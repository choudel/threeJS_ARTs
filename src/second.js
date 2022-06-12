
import * as THREE from "three";
import gsap from "gsap";

const scene = new THREE.Scene()

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(100,100,100),
    new THREE.MeshBasicMaterial( { color: 0x0ffccff } )
) 

scene.add(cube)
const axesHelper= new THREE.AxesHelper(100,100,100)
scene.add(axesHelper)

const sizes ={
    width:800,
    height:600
}
const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width/sizes.height,
    1, 
    1000 
)
camera.position.set(1,1,700) 
scene.add(camera)


const canvas= document.querySelector('.webgl')

const renderer= new THREE.WebGLRenderer({
    canvas
})


renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)

//Animation
function renderloop() {
    requestAnimationFrame(renderloop);
    renderer.render(scene, camera);
}
function animateBox() {
var timeline = gsap.timeline({onComplete: animateBox});

  
  timeline.to(
    cube.position,
    {x: Math.floor((Math.random() * 600) - 300), duration: 2, ease: "elastic"},
    0
  );
  
  
  timeline.to(
    cube.position,
    {y: Math.floor((Math.random() * 600) - 300), duration: 2, ease: "elastic"},
    0
  );

  
  timeline.to(
    cube.position,
    {z: Math.floor((Math.random() * 600) - 300), duration: 2, ease: "elastic"},
    0
  );
}

animateBox()
renderloop()