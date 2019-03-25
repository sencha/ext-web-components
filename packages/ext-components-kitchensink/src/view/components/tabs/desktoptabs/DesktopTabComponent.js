import './DesktopTabComponent.css';
import './DesktopTabComponent.html';

export default class DesktopTabComponent {

  constructor() {
  }
  tabpanelReady(event) {
    this.tabpanel = event.detail.cmp;
    this.tabpanel.setTabBar({ 'layout':'{pack:left}'});
  }

}
