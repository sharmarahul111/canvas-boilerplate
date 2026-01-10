let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")
canvas.width = innerWidth
canvas.height = innerHeight

function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = "rgba(40,40,40,1)"
  c.fillRect(0, 0, innerWidth, innerHeight)
}
animate()
