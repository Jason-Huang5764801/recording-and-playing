input.onButtonPressed(Button.A, function () {
    record_my_audio()
})
function record_my_audio () {
    record.startRecording(record.BlockingState.Blocking)
}
function play_my_audio () {
    record.playAudio(record.BlockingState.Blocking)
}
input.onButtonPressed(Button.B, function () {
    play_my_audio()
})
record.setSampleRate(22000)
record.setMicGain(record.AudioLevels.High)
