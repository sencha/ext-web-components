Ext.require([
    'Ext.chart.theme.Blue',
    'Ext.chart.theme.Green',
    'Ext.chart.theme.Muted',
    'Ext.chart.theme.Red',
    'Ext.chart.theme.Sky',
    'Ext.chart.theme.Yellow'
]);

// const toolbarItemDefaults = {
//     margin: '0 10px 0 0'
// }

const downloadChart = (chart) => {
    debugger;
    if (Ext.is.Desktop) {
        chart.download({ filename: 'Chart' });
    } else {
        chart.preview();
    }
}

export default class ChartToolbar extends HTMLElement {
    constructor() {
        super()

        // this.toolbarready = this.toolbarready.bind(this);
        debugger;
    }

    toolbarready(event) {
        debugger;
        this.toolbarCmp = event.detail.cmp;
        this.toolbarCmp.setMargin(Ext.os.is.Phone ? '0 10' : '10 0 0 10');
}

    buttonready1(event) {
        debugger;
        this.buttonCmp1 = event.detail.cmp;
    }

    buttonready2(event) {
        this.buttonCmp2 = event.detail.cmp;
        this.buttonCmp2.setHidden(!(show || theme));
    }

    buttonready3(event) {
        this.buttonCmp3 = event.detail.cmp;
    }

    buttonready4(event) {
        this.buttonCmp4 = event.detail.cmp;
    }

    segmentedbuttonready1(event) {
        this.segmentedbuttonCmp1 = event.detail.cmp;
    }

    segmentedbuttonready2(event) {
        this.segmentedbuttonCmp2 = event.detail.cmp;
    }

    menuitemready1(event) {
        this.menuitemCmp1 = event.detail.cmp;
    }

    menuitemready2(event) {
        this.menuitemCmp2 = event.detail.cmp;
    }

    menuitemready3(event) {
        this.menuitemCmp3 = event.detail.cmp;
    }

    menuitemready4(event) {
        this.menuitemCmp4 = event.detail.cmp;
    }

    menuitemready5(event) {
        this.menuitemCmp5 = event.detail.cmp;
    }

    menuitemready6(event) {
        this.menuitemCmp6 = event.detail.cmp;
    }

    menuitemready7(event) {
        this.menuitemCmp7 = event.detail.cmp;
    }

    connectedCallback() {
        debugger;
        const button1 = document.createElement('ext-button');
        button1.margin = "0 10px 0 0";
        button1.ui = "action";
        button1.iconCls = "x-fa fa-eye";
        button1.text = "Preview";
        button1.setAttribute("onready", "charttoolbar.toolbarready(event)");
        button1.setAttribute("ontap", "charttoolbar.toolbarready(event)");

        // button1.handler = this.downloadChart.bind(this);

        this.append(button1);
    }
}

window.customElements.define('chart-toolbar', ChartToolbar);


// <ext-toolbar
//                 onready="charttoolbar.toolbarready(event)"
//                 docked="top"
//                 ui="app-transparent-toolbar"
//                 shadow="false"
//             >
//                 <ext-button
//                     onready="charts.buttonready1(event)"
//                     margin="0 10px 0 0"
//                     iconCls="x-fa fa-picture-o"
//                     text="Theme"
//                     ui="action">
//                     <ext-menu>
//                         <ext-menuitem
//                             onready="charts.menuitemready1(event)"
//                             text="Default"
//                             handler="onThemeChangeDefault">
//                         </ext-menuitem>
//                         <ext-menuitem
//                             onready="charts.menuitemready2(event)"
//                             text="Green"
//                             handler="onThemeChangeGreen">
//                         </ext-menuitem>
//                         <ext-menuitem
//                             onready="charts.menuitemready3(event)"
//                             text="Midnight"
//                             handler="onThemeChangeMidnight">
//                         </ext-menuitem>
//                         <ext-menuitem
//                             onready="charts.menuitemready4(event)"
//                             text="Muted"
//                             handler="onThemeChangeMuted">
//                         </ext-menuitem>
//                         <ext-menuitem
//                             onready="charts.menuitemready5(event)"
//                             text="Red"
//                             handler="onThemeChangeRed">
//                         </ext-menuitem>
//                         <ext-menuitem
//                             onready="charts.menuitemready6(event)"
//                             text="Sky"
//                             handler="onThemeChangeSky">
//                         </ext-menuitem>
//                         <ext-menuitem
//                             onready="charts.menuitemready7(event)"
//                             text="Yellow"
//                             handler="onThemeChangeYellow">
//                         </ext-menuitem>
//                     </ext-menu>
//                 </ext-button>
//                 <ext-button
//                     onready="charts.buttonready2(event)"
//                     margin="0 10px 0 0"
//                     ui="action"
//                     iconCls="x-fa fa-eye"
//                     text="Preview"
//                     handler="downloadChart"
//                     platformConfig='{
//                         "desktop": {"text": "DOWNLOAD","iconCls": "x-fa fa-download"}}'>
//                 </ext-button>

//                 <ext-button
//                     onready="charts.buttonready3(event)"
//                     ui="action"
//                     margin="0 10px 0 0"
//                     iconCls="x-fa fa-refresh"
//                     handler="onRefreshClick"
//                     text="REFRESH">
//                 </ext-button>

//                 <spacer></spacer>

//                 <ext-segmentedbutton
//                     onready="charts.segmentedbuttonready1(event)"
//                     margin="0 10px 0 0"
//                     change="onStackGroup($event)">
//                     <ext-button iconCls="x-fa fa-bars" text="STACK"></ext-button>
//                     <ext-button iconCls="x-fa fa-bar-chart" text="GROUP"></ext-button>
//                 </ext-segmentedbutton>

//                 <ext-segmentedbutton
//                     onready="charts.segmentedbuttonready2(event)"
//                     value="zoom">
//                     <ext-button
//                         iconCls="x-fa fa-arrows"
//                         handler="onToggleZoomOnPanPan"
//                         text="PAN"
//                         value="false">
//                     </ext-button>
//                     <ext-button
//                         iconCls="x-fa fa-search-plus"
//                         handler="onToggleZoomOnPanZoom"
//                         text="ZOOM"
//                         value="true">
//                     </ext-button>
//                     <ext-button
//                         onready="charts.buttonready4(event)"
//                         iconCls="x-fa fa-crosshairs"
//                         handler="onToggleCrosshairLocal"
//                         text="CROSSHAIR"
//                         value="crosshair">
//                     </ext-button>
//                 </ext-segmentedbutton>
//             </ext-toolbar>
