import './AdvancedDatePanelComponent.css';
import './AdvancedDatePanelComponent.html';

export default class AdvancedDatePanelComponent {

  constructor () {
    console.log('in AdvancedDatePanelComponent constructor');
  }
  containerready1(event) {
    debugger;
    this.containerCmp = event.detail.cmp;
    const padding = Ext.os.is.Phone ? 0 : 10;
    this.containerCmp.setPadding(padding);
  }

  datepanelready1(event) {
    debugger;
  }
}
