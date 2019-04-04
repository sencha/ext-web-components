import './TabBarComponent.html';

export default class TabBarComponent {
  constructor() {
    this.activeTab = "info";
  }

  tabbarReady(event) {
    this.tabbar = event.detail.cmp;
    this.tabbar.setActiveTab('info');
    this.tabbar.on('activeTabChange', this.onTabChange.bind(this));
  }

  onTabChange(sender, value) {
    this.activeTab = value._text;
    this.container.setHtml(`Active Tab: ${this.activeTab}`);
  }

  containerReady(event) {
    this.container = event.detail.cmp;
    this.container.setHtml(`Active Tab: ${this.activeTab}`);
  }
}
