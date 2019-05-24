import './ProgressBarComponent.html';

export default class ProgressBarComponent {

    constructor() {
        this.progress = 1;
        this.progressText = '';
        this.updateLoop;
    }

    progressReady = (event) => {
        this.progressText = '1%';
        this.progressBarCmp = event.detail.cmp;
        this.updateLoop = setInterval(() => {
            this.progress += 1;
            this.progressText = this.progress + '%';
            if (this.progress > 100) this.progress = 0;
            this.progressBarCmp.setText(this.progressText);
            this.containerCmp.setHtml(this.progressText);
            this.progressBarCmp.setValue(this.progress/100.0);
            this.progressBarCmp1.setValue(this.progress/100.0);

        }, 100);
    }

    progressReady1 = (event) => {
        this.progressBarCmp1 = event.detail.cmp;
    }

    containerReady = (event) => {
        this.containerCmp = event.detail.cmp;
    }
}
