import './style/main.css'
import imageSource from './images/image.jpg'

console.log('Hello webpack')

const $image = new Image()
$image.src = imageSource
document.body.appendChild($image)