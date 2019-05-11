import './VideoComponent.html';

export default class VideoComponent {
    readyButton1 = (event) => {
        this.button1Cmp = event.detail.cmp;
    }

    tapButton1 = () => {
        this.button1Cmp.setText(new Date());
    }
}
