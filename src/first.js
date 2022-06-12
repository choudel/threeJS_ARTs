import * as THREE from "three"; 

const scene = new THREE.Scene()

const group = new THREE.Group()

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial( { color: 0x0ffccff } )
) 
cube1.position.set(-3,0,1)
cube1.rotation.reorder('YXZ')
cube1.rotation.x = Math.PI * 0.40
cube1.rotation.y = Math.PI * 0.2
cube1.rotation.z = Math.PI * 0.01


const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,2,2),
    new THREE.MeshBasicMaterial( { color: 0xff2ad4f } )
)
cube2.position.set(0,2,0)
cube2.rotation.reorder('YXZ')
cube2.rotation.x = Math.PI * 0.02
cube2.rotation.y = Math.PI * 0.04
cube2.rotation.z = Math.PI * 0.03


const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(2,2,2),
    new THREE.MeshBasicMaterial( { color: 0x5599fff } )
)
cube3.position.set(3,-1,-1)
cube3.rotation.reorder('YXZ')  
cube3.rotation.x = Math.PI * -0.3
cube3.rotation.y = Math.PI * 0.1
cube3.rotation.z = Math.PI * 0.1


group.add(cube1,cube2,cube3)
group.position.set(1,0.2,0.6)



scene.add(group)

const axesHelper= new THREE.AxesHelper(3,3,3)
scene.add(axesHelper)

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
camera.position.set(1,1,7) 
scene.add(camera)


const canvas= document.querySelector('.webgl')

const renderer= new THREE.WebGLRenderer({
    canvas
})

renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)