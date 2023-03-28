import './style.scss'
import { Engine } from './engine/Engine'
import { Metaverse } from './metaverse/Demo'

new Engine({
  canvas: document.querySelector('#canvas') as HTMLCanvasElement,
  experience: Metaverse,
  info: {
    twitter: 'https://twitter.com/',
    github: 'https://github.com/',
    description: 'Metaverse project',
    documentTitle: 'Simpl Three.js',
    title: 'Omega Canis',
  },
})
console.log('Selamat datang di dunia baru.');
