Ext.require('Ext.layout.overflow.Scroller');

export default class ScrollingTabsComponent {
  constructor () {
    console.log('in ScrollingTabsComponent constructor');
  }

  tabPanelReady(event) {
    debugger;
    const tabPanel = event.detail.cmp;
    tabPanel.setTabBar({
      layout: {
          pack: 'start',
          overflow: 'scroller',
      }
    });
  }
}
