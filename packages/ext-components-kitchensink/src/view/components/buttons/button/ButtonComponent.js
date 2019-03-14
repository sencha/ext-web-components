import './ButtonComponent.css';

export default class ButtonComponent {

  style = 'Menu';
  type = 'Text';
  menuButtons = [];
  iconCls = '';


  constructor() {
    console.log('in ButtonComponent constructor');
  }

  toggleRound = function () {
    console.log(this.round, 'round');
    this.round = !this.round;
    if (this.round) {
      this.menuButtons.forEach(buttons => {
        buttons.setUi('round');
      });
     
    }
    else {
      this.menuButtons.forEach(buttons => {
        buttons.setUi('');
      });
    }
  };

  panelReady = function (event) {
    this.panel = event.detail.cmp;
  }

  buttonReady = function (event) {
    this.menuButtons.push(event.detail.cmp);
  }

  styleMenuItemChange = function (event) {
    console.log(event.config.text, 'event');
    this.style = event.config.text;
    if (this.style === 'Menu') {
      this.menuButtons.forEach(buttons => {
        buttons.setHidden(false);
      });
      var tempMenu = Ext.create('Ext.menu.Menu');
      var item1 = new Ext.menu.Item({
        indented: false,
        text: "Item 1"
      });
      var item2 = new Ext.menu.Item({
        indented: false,
        text: "Item 2"
      });
      var item3 = new Ext.menu.Item({
        indented: false,
        text: "Item 3"
      });
      tempMenu.add(item1);
      tempMenu.add(item2);
      tempMenu.add(item3);
      this.menuButtons.forEach(button => {
        button.setMenu(tempMenu);
      });
    }
    else {
      console.log(typeof this.style, 'style');
      this.style = this.style.toLowerCase();
      this.menuButtons.forEach(buttons => {
        buttons.setUi(this.style);
        buttons.setMenu(null);
        buttons.setHidden(false);
      });
    }
  }
  
  onTypeChange = function(event){
    console.log(event.config.text,'event type');
    this.type = event.config.text; 
    this.iconCls = this.type.indexOf('Icon') !== -1 ? 'x-fa fa-heart' : null;
    this.text = this.type.indexOf('Text') !== -1;
    console.log(this.iconCls,'icon class');
    this.menuButtons.forEach(button => {
      button.setIconCls(this.iconCls);
      // button.setText(this.text);
    });

  }

  setDeafultsForStyle = function (event) {
    this.styleMenu = event.detail.cmp;
    this.styleMenu.setDefaults({
      handler: this.styleMenuItemChange.bind(this),
    });
  }

  setTypeForStyle = function (event) {
    this.typeMenu = event.detail.cmp;
    this.typeMenu.setDefaults({
      handler: this.onTypeChange.bind(this),
    });
  }
}
