import './ProgressBarComponent.html';

export default class ProgressBarComponent {

  constructor () {
    this.progress = 1;
    this.progressText = '';
    this.updateLoop;
  }

  progressReady = (event) => {
    this.progressText = "1%";
    this.progressBar = event.detail.cmp;
    this.updateLoop = setInterval(() => {
        this.progress += 1;
        this.progressText = this.progress + "%";
        if (this.progress > 100) this.progress = 0;
        this.progressBar.setText(this.progressText);
        this.container.setHtml(this.progressText);
        this.progressBar.setValue(this.progress/100.0);
        this.progressBar1.setValue(this.progress/100.0);

    }, 100)
  }

  progressReady1 = (event) => {
    this.progressBar1 = event.detail.cmp;

  }

  containerReady = (event) => {
    this.container = event.detail.cmp;
  }
}
