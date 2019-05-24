Ext.require('Ext.layout.overflow.Scroller');
import './ScrollingTabComponent.html';

export default class ScrollingTabComponent {
    tabpanelReady = (event) => {
        const tabpanelCmp = event.detail.cmp;
        tabpanelCmp.setTabBar({
            layout: {
                pack: 'start',
                overflow: 'scroller',
                position: 'center',
            }
        });

        tabpanelCmp.setDefaults({
            ...tabpanelCmp.getDefaults(),
            tab: { minWidth: '130px' }
        });
    }
}
