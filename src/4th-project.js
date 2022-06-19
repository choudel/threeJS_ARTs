import * as THREE from "three"; 


const cursor = {
    x:0,
    y:0
}

window.addEventListener('mousemove',(event)=>{})
const scene = new THREE.Scene()

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1,2,2),
    new THREE.MeshBasicMaterial( { color: 0xff2ad4f } )
)
cube.position.set(0,2,0)

scene.add(cube)

const axesHelper= new THREE.AxesHelper(3,3,3)
scene.add(axesHelper)

const sizes ={
    width:window.innerWidth,
    height:window.innerHeight
}

window.addEventListener(
    'resize',
    ()=>{
    sizes.width=window.innerWidth
    sizes.height=window.innerHeight
    camera.aspect=sizes.width/sizes.height
    camera.updateProjectionMatrix()    
    renderer.setSize(sizes.width,sizes.height)
})
const camera = new THREE.PerspectiveCamera(
    70,
    sizes.width/sizes.height,
    0.1, 
    100 
)
/*const aspectRatio=sizes.width/sizes.height
const camera = new THREE.OrthographicCamera(
    -1 * aspectRatio,
    1 * aspectRatio,
    1,
    -1,
    0.1,
    1000
    )*/
//camera.position.set(1,1,7) 
scene.add(camera)

const canvas= document.querySelector('.webgl')

const renderer= new THREE.WebGLRenderer({
    canvas
})
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)