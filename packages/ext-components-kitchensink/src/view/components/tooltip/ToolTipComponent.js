import './ToolTipComponent.css';
import './ToolTipComponent.html';

export default class ToolTipComponent {

  constructor () {
    console.log('in ToolTipComponent constructor');
  }

  readycontainer1(event) {
    const layoutType = Ext.platformTags.phone ? 'vbox' : 'hbox';
    this.containerCmp1 = event.detail.cmp;
    // this.containerCmp1.setLayout({
    //   // type: 'hbox',
    //   align: 'start',
    //   pack: 'center'
    // });
  }

  readycontainer2(event) {
    const layoutType = Ext.platformTags.phone ? 'vbox' : 'hbox';
    this.containerCmp2 = event.detail.cmp;
    // this.containerCmp2.setLayout({
    //   // type: 'hbox',
    //   align: 'start',
    //   pack: 'center'
    // });
  }

  readycontainer3(event) {
    const layoutType = Ext.platformTags.phone ? 'vbox' : 'hbox';
    this.containerCmp3 = event.detail.cmp;
    // this.containerCmp3.setLayout({
    //   // type: 'hbox',
    //   align: 'start',
    //   pack: 'center'
    // });
  }

  readytooltip1(event) {
    this.tooltipCmp1 = event.detail.cmp;
    this.tooltipCmp1.setHtml(`A simple tooltip`);
  }

  readytooltip2(event) {
    this.tooltipCmp2 = event.detail.cmp;
    this.tooltipCmp2.setHtml(`A simple tooltip`);
  }

  readytooltip3(event) {
    this.tooltipCmp3 = event.detail.cmp;
    this.tooltipCmp3.setHtml(`This tip will follow the mouse while it is over the element`);
  }

  readytooltip4(event) {
    this.tooltipCmp4 = event.detail.cmp;
    this.tooltipCmp4.setHtml(`<ul style="margin-bottom: 15px">
          <li>5 bedrooms</li>
          <li>Close to transport</li>
          <li>Large backyard</li>
        </ul>
        <img style="width: 400px; height: 300px;" src="resources/images/house.jpg" />`);
  }

  readytooltip5(event) {
    this.tooltipCmp5 = event.detail.cmp;
    this.tooltipCmp5.setHtml(`The anchor is centered`);
  }

  readytooltip6(event) {
    this.tooltipCmp6 = event.detail.cmp;
    this.tooltipCmp6.setHtml(`Following the mouse with an anchor`);
  }
}
