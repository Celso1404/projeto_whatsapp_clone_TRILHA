export class CameraController {
    constructor(videoEl) {
        this._videoEl = videoEl;
//utilizado para ativar a câmera
        navigator.mediaDevices.getUserMedia({
            video: true
        }).then(stream=>{
            this._stream = stream;
            this._videoEl.srcObject = stream; 
            this._videoEl.play();
        }).catch(err=>{
            console.error(err);
        })
    }

    stop() {
        stream.getTracks().forEach(track=>{
            track.stop();
        });
    }
}