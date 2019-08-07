import './ToolTipComponent.html';

export default class ToolTipComponent {
    onReadyContainer1 = (event) => {
        this.containerCmp1 = event.detail.cmp;
    }

    onreadyContainer2 = (event) => {
        this.containerCmp2 = event.detail.cmp;
    }

    onReadyContainer3 = (event) => {
        this.containerCmp3 = event.detail.cmp;
    }

    readyTooltip1 = (event) => {
        this.tooltipCmp1 = event.detail.cmp;
        this.tooltipCmp1.setHtml('A simple tooltip');
    }

    readyTooltip2 = (event) => {
        this.tooltipCmp2 = event.detail.cmp;
        this.tooltipCmp2.setHtml('A simple tooltip');
    }

    readyTooltip3 = (event) => {
        this.tooltipCmp3 = event.detail.cmp;
        this.tooltipCmp3.setHtml('This tip will follow the mouse while it is over the element');
    }

    readyTooltip4 = (event) => {
        this.tooltipCmp4 = event.detail.cmp;
        this.tooltipCmp4.setHtml(`
          <ul style="margin-bottom: 15px">
            <li>5 bedrooms</li>
            <li>Close to transport</li>
            <li>Large backyard</li>
          </ul>
          <img style="width: 400px; height: 300px;" src="resources/images/house.jpg"
        />
      `);
    }

    readyTooltip5 = (event) => {
        this.tooltipCmp5 = event.detail.cmp;
        this.tooltipCmp5.setHtml('The anchor is centered');
    }

    readyTooltip6 = (event) => {
        this.tooltipCmp6 = event.detail.cmp;
        this.tooltipCmp6.setHtml('Following the mouse with an anchor');
    }
}
