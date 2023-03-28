import { Engine } from '../engine/Engine'
import { Env } from './Env'
import { Box } from './Box'
import { Experience } from '../engine/Experience'
import { Resource } from '../engine/Resources'

export class Metaverse implements Experience {
  resources: Resource[] = []

  constructor(private engine: Engine) {}
  init() {

    const box = new Box()
    box.castShadow = true
    box.rotation.y = Math.PI / 4
    box.position.set(0, 0.5, 0)
    this.engine.scene.add(box)

    const env = new Env()
    env.position.set(0, 0.5, 0)
    this.engine.scene.add(env)
  }

  resize() {}
  update() {}
}
