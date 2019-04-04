import './AudioComponent.html';

export default class AudioComponent {

  constructor() {
    this.playing = '';
    this.audio = '';
    this.isAndroid = Ext.os.is.Android;
  }

  audioReady(event) {
    this.audio = event.deatail.cmp;
    this.audio.setControls(!this.isAndroid);
  }

  containerReady(event) {
    this.container = event.detail.cmp;
    this.container.setHidden(!this.isAndroid);
  }

  buttonReady(event) {
    this.button = event.detail.cmp;
    let text;
    if (this.playing) {
      text = 'Play Audio'
    } else {
      text = 'Pause Audio'
    }
    this.button.setText(text);
    this.button.setHandler(this.toggleAudioAndroid);
  }

  toggleAudioAndroid() {
    if (this.playing) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.playing = !this.playing;
  }

}
