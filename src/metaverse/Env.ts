import * as THREE from 'three'
import sphere360 from '../../assets/textures/Canis.png'

export class Env extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.SphereGeometry(10,36,36)
    const material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load(sphere360),
    side: THREE.BackSide
    })

    super(geometry, material)
  }
}

