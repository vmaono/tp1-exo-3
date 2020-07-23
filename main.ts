let x = 0
let y = 0
let v = 0
let z = 0
let w = 0
let m = 0
basic.forever(function () {
    x = randint(0, 4)
    y = 0
    while (y <= 4) {
        led.plotBrightness(x, y, 123)
        v = x
        z = y
        w = z - 1
        m = w - 1
        led.plotBrightness(x, y, 255)
        y += 1
        basic.pause(200)
        led.plotBrightness(v, z, 187)
        led.plotBrightness(x, w, 82)
        led.plotBrightness(x, m, 0)
        led.unplot(x, y)
    }
    led.unplot(v, z)
    led.unplot(x, w)
    led.unplot(x, m)
})
