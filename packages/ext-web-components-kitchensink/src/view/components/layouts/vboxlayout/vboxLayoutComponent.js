import './vboxLayoutComponent.scss';
import './vboxLayoutComponent.html';

export default class vboxLayoutComponent {

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

  item1Ready = (event) => {
    this.cont = event.detail.cmp;
    this.cont.setStyle(this.card.red);
  }

  item2Ready = (event) => {
    this.cont = event.detail.cmp;
    this.cont.setStyle(this.card.blue);
  }

  item3Ready = (event) => {
    this.cont = event.detail.cmp;
    this.cont.setStyle(this.card.green);
  }
}
