let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight

let width = canvas.width
let height = canvas.height
let centerX = canvas.width / 2
let centerY = canvas.height / 2
let leaf = document.querySelector('#leaf')
let leafs = []
let count = 100

for (let i = 0; i < count; i++) {
  let angle = 15 + Math.random() * 45
  let dir = [-1, 1][Math.floor(Math.random() * 2)]

  leafs.push({
    x: Math.random() * width,
    y: Math.random() * height,
    w: 30,
    h: 30 * (leaf.height / leaf.width),
    v: 20 / angle,
    a: angle,
    d: dir,
    anim: true
  })
}

function update(dt) {
  for (let i = 0; i < leafs.length; i++) {
    if (leafs[i].anim) {
      leafs[i].y += leafs[i].v

      if (leafs[i].y > height) {
        leafs[i].y = -120
        leafs[i].x = Math.random() * width
      }
    }
  }
}

function draw(dt) {
  requestAnimationFrame(draw)
  update(dt)

  ctx.clearRect(0, 0, width, height)

  for (let i = 0; i < leafs.length; i++) {
    ctx.save()

    if (leafs[i].anim) {
      ctx.translate(leafs[i].x, leafs[i].y)

      ctx.rotate(
        leafs[i].d * Math.sin(dt * 0.002 * i * 0.01) * (leafs[i].a) * Math.PI / 180
      )
    }

    ctx.globalAlpha = Math.max(0, leafs[i].y * 0.1)
    ctx.drawImage(leaf, -leafs[i].w / 2, 70, leafs[i].w, leafs[i].h)

    ctx.restore()
  }
}

draw()
