import './ToolBarComponent.css';
import './ToolBarComponent.html';

export default class ToolBarComponent {

  constructor() {
    this.optionButton = '';
    this.isPhone = Ext.os.is.Phone;
  }

  containerReady(event) {
    this.containerReady = event.detail.cmp;
    this.containerReady.setHtml("Option 1 is Selected");
  }

  buttonHandler(event) {
    this.containerReady.setHtml("User clicked \"" + event.detail.button._text + "\"")
  }

}
