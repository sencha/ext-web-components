import './CardLayoutComponent.css';
import './CardLayoutComponent.html';

export default class CardLayoutComponent {

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
    this.animation = null;
    this.activeCard = 0; 
    // this.layout = {type: 'card', animation: this.animation}

    this.contents = [
      { text: 'Slide Left', animation: { type: 'slide', direction: 'left', ...this.animationDefaults } },
      { text: 'Slide Right', animation: { type: 'slide', direction: 'right', ...this.animationDefaults } },
      { text: 'Slide Up', animation: { type: 'slide', direction: 'up', ...this.animationDefaults } },
      { text: 'Slide Down', margin: '0 0 20 0', animation: { type: 'slide', direction: 'down', ...this.animationDefaults } },
      { text: 'Cover Left', animation: { type: 'cover', direction: 'left', ...this.animationDefaults } },
      { text: 'Cover Right', animation: { type: 'cover', direction: 'right', ...this.animationDefaults } },
      { text: 'Cover Up', animation: { type: 'cover', direction: 'up', ...this.animationDefaults } },
      { text: 'Cover Down', margin: '0 0 20 0', animation: { type: 'cover', direction: 'down', ...this.animationDefaults } },
      { text: 'Reveal Left', animation: { type: 'reveal', direction: 'left', ...this.animationDefaults } },
      { text: 'Reveal Right', animation: { type: 'reveal', direction: 'right', ...this.animationDefaults } },
      { text: 'Reveal Up', animation: { type: 'reveal', direction: 'up', ...this.animationDefaults } },
      { text: 'Reveal Down', margin: '0 0 20 0', animation: { type: 'reveal', direction: 'down', ...this.animationDefaults } },
      { text: 'Fade', animation: { type: 'fade', ...this.animationDefaults } },
      { text: 'Pop', animation: { type: 'pop', ...this.animationDefaults } },
      { text: 'Flip', animation: { type: 'flip', ...this.animationDefaults } }
    ];
  }

  switchCards(animation) {
    this.animation = animation;
    this.activeCard = this.activeCard === 0 ? 1 : 0;
  }

  onItem1Ready(event) {
    this.colors = this.card.blue;
    this.textContainer = event.detail.cmp;
    this.textContainer.setBodyStyle(this.colors);
  }

  onItem2Ready(event) {
    this.colors = this.card.green;
    this.textContainer = event.detail.cmp;
    this.textContainer.setBodyStyle(this.colors);
  }

  onContainer1Ready(event) {
    this.cont = event.detail.cmp;
    // this.cont.setLayout(this.layout);
  }

  onContainer2Ready(event) {
    this.cont = event.detail.cmp;
    const contTemp = this.cont;
    this.contents.forEach(function(button){
      contTemp.setHidden(false);
    })
  }

  buttonReady(event) {
    this.btn = event.detail.cmp;
    const buttonTemp = this.btn;
    this.contents.forEach(function(button){
      // console.log(button.text);
      buttonTemp.setText(button.text);
    })
  }

  animationDefaults = {
      duration: 500,
      easing: 'ease-in-out'
  };

}
