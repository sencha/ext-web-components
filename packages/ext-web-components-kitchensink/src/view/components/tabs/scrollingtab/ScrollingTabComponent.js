Ext.require('Ext.layout.overflow.Scroller');
import './ScrollingTabComponent.html';

export default class ScrollingTabComponent {
  constructor() {
    console.log('in ScrollingTabsComponent constructor');
  }

  tabPanelReady(event) {
    const tabPanel = event.detail.cmp;
    tabPanel.setTabBar({
      layout: {
        pack: 'start',
        overflow: 'scroller',
        position: 'center',
      }
    });

    tabPanel.setDefaults({
      ...tabPanel.getDefaults(),
      tab: { minWidth: "130px" }
    });

  }
}
