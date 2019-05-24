import './FitLayoutComponent.html';

export default class FitLayoutComponent {

    constructor() {
        this.card = {
            blue: {
                fontSize: '16px',
                padding: '10px',
                backgroundColor: '#673ab7',
                color: 'white'
            },
            green: {
                fontSize: '16px',
                padding: '10px',
                backgroundColor: '#7c4dff',
                color: 'white'
            },
            red: {
                fontSize: '16px',
                padding: '10px',
                backgroundColor: '#00bcd4',
                color: 'white'
            }
        };
    }

    containerReady = (event) => {
        this.contCmp = event.detail.cmp;
        this.contCmp.setStyle(this.card.red);
    }
}
