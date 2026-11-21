input.onButtonPressed(Button.A, function () {
    mesh.send("node01", "message")
})
mesh.onMessage(function (sender, payload, to) {
    serial.writeLine("Sender:" + sender + "Payload:" + payload + "To:" + to)
})
mesh.start(1)
mesh.setName("node02")
basic.forever(function () {
	
})
