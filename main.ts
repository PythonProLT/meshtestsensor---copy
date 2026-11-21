input.onButtonPressed(Button.A, function on_button_pressed_a() {
    mesh.send("node01", "message")
})
mesh.onMessage(function on_on_message(sender: string, payload: string, to: string) {
    serial.writeLine("Sender:" + sender + "Payload:" + payload + "To:" + to)
})
mesh.start(1)
mesh.setName("node02")
basic.forever(function on_forever() {
    
})
