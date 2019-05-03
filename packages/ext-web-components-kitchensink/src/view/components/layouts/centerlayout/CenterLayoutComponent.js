import './CenterLayoutComponent.html';

export default class CenterLayoutComponent {

  constructor () {
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
    }
  }

  itemReady = (event) => {
    this.cont = event.detail.cmp;
    this.cont.setStyle(this.card.red);
  }
}
