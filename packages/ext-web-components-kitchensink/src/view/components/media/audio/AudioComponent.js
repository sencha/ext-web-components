import './AudioComponent.html';

export default class AudioComponent {
    constructor() {
        this.playing = '';
        this.audioCmp = '';
        this.isAndroid = Ext.os.is.Android;
    }

    audioReady = (event) => {
        this.audioCmp = event.deatail.cmp;
        this.audioCmp.setControls(!this.isAndroid);
    }

    containerReady = (event) => {
        this.containerCmp = event.detail.cmp;
        this.containerCmp.setHidden(!this.isAndroid);
    }

    buttonReady = (event) => {
        this.buttonCmp = event.detail.cmp;
        let text;
        if (this.playing) {
            text = 'Play Audio';
        } else {
            text = 'Pause Audio';
        }
        this.buttonCmp.setText(text);
        this.buttonCmp.setHandler(this.toggleAudioAndroid);
    }

    toggleAudioAndroid = () => {
        if (this.playing) {
            this.audioCmp.pause();
        } else {
            this.audioCmp.play();
        }
        this.playing = !this.playing;
    }
}
