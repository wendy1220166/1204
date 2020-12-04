input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
serial.redirectToUSB()
robotbit.GeekServo(robotbit.Servos.S1, 180)
robotbit.GeekServo(robotbit.Servos.S3, -45)
basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    )))
    basic.pause(200)
    if (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    ) < 4) {
        robotbit.GeekServo(robotbit.Servos.S1, -25)
        robotbit.GeekServo(robotbit.Servos.S3, 180)
        basic.pause(1000)
        robotbit.GeekServo(robotbit.Servos.S1, 180)
        robotbit.GeekServo(robotbit.Servos.S3, -45)
    }
})
